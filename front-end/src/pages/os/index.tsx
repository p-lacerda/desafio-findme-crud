import Link from 'next/link';
import React from 'react';

type Props = {};

function Os({}: Props) {
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
      </div>
    </div>
  )
}

export default Os;