import Link from 'next/link';
import React from 'react';

type Props = {};

function Colaborador({}: Props) {
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
      </div>
    </div>
  )
}

export default Colaborador;