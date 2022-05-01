import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

function Colaborador({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/colaborador")
      .then(res => res.json())
      .then(res => setData(res))
  }, [])
  return (
    <div>
      <h1>Colaborador</h1>
      <div>
        <Link passHref href="/colaborador/novo">
          <button>Adicionar novo colaborador</button>
        </Link>
      </div>
      <div>
        <p>Lista de Colaboradores</p>
        <div>
        {
          data.map(({ nome, email }, i) => (
            <div key={i}>
              <p>{ nome }</p>
              <p>{ email }</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Colaborador;