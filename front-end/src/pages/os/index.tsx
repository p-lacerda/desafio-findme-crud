import Link from 'next/link';
import React, { useEffect, useState } from 'react';


type Props = {};

function Os({}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/ordens")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h1>Ordens de Serviço</h1>
      <div>
        <Link passHref href="/os/novo">
          <button>Adicionar nova ordem de serviço</button>
        </Link>
      </div>
      <div>
        <p>Lista de Ordens de Serviço</p>
        <div>
        {
          data.map(({ dataAbertura, problemaRelatado }, i) => (
            <div key={i}>
              <p>{ dataAbertura }</p>
              <p>{ problemaRelatado }</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Os;