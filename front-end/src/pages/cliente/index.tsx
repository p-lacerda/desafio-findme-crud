import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

function Cliente({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cliente")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>Cliente</h1>
      <div>
        <Link passHref href="/cliente/novo">
          <button className="btn">Adicionar novo cliente</button>
        </Link>
      </div>
      <div>
        <p>Lista de Clientes</p>
        <div>
        {
          data.map(({ id, nome }, i) => (
            <div key={i} className="flex flex-row items-center">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span>{ nome[0] }</span>
                </div>
              </div>
              <p>{ nome }</p>
              <div>
                <Link passHref href={`/cliente/editar/${id}`}>
                  <button
                    className='btn'
                  >
                    Editar
                  </button>
                </Link>
                <Link passHref href={`/cliente/deletar/${id}`}>
                  <button
                    className='btn'
                  >
                    Deletar
                  </button>
                </Link>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Cliente;