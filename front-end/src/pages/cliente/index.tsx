import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

function Cliente({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cliente")
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return (
    <div>
      <h1>Cliente</h1>
      <div>
        <Link passHref href="/cliente/novo">
          <button>Adicionar novo cliente</button>
        </Link>
      </div>
      <div>
        <p>Lista de Clientes</p>
        <div>
        {
          data.map(({ nome }, i) => (
            <div key={i}>
              <p>{ nome }</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Cliente;