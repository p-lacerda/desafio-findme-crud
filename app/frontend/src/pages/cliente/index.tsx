import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// type Props = {};

const Cliente = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cliente')
      .then((res) => { return res.json(); })
      .then((res) => { return setData(res); })
      .catch((error) => { return console.log(error); });
  }, []);

  return (
    <div>
      <h1>Cliente</h1>
      <div>
        <Link passHref href="/cliente/novo">
          <button type="button" className="btn">Adicionar novo cliente</button>
        </Link>
      </div>
      <div>
        <p>Lista de Clientes</p>
        <div>
          {
          data.map(({ id, nome }) => {
            return (
              <div key={id} className="flex flex-row items-center">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span>{ nome[0] }</span>
                  </div>
                </div>
                <p>{ nome }</p>
                <div>
                  <Link passHref href={`/cliente/editar/${id}`}>
                    <button
                      className="btn"
                      type="button"
                    >
                      Editar
                    </button>
                  </Link>
                  <Link passHref href={`/cliente/deletar/${id}`}>
                    <button
                      type="button"
                      className="btn"
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

export default Cliente;
