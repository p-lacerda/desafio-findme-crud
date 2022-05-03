import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Colaborador = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/colaborador')
      .then((res) => { return res.json(); })
      .then((res) => { return setData(res); })
      .catch((error) => { return console.log(error); });
  }, []);
  return (
    <div>
      <h1>Colaborador</h1>
      <div>
        <Link passHref href="/colaborador/novo">
          <button type="button">Adicionar novo colaborador</button>
        </Link>
      </div>
      <div>
        <p>Lista de Colaboradores</p>
        <div>
          {
          data.map(({ id, nome, email }) => {
            return (
              <div key={id}>
                <p>{ nome }</p>
                <p>{ email }</p>
                <div>
                  <Link passHref href={`/colaborador/editar/${id}`}>
                    <button
                      className="btn"
                      type="button"
                    >
                      Editar
                    </button>
                  </Link>
                  <Link passHref href={`/colaborador/deletar/${id}`}>
                    <button
                      className="btn"
                      type="button"
                    >
                      Excluir
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
