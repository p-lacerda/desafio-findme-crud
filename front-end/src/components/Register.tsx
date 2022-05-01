import React from 'react';
import Link from 'next/link';


type Props = {}

function Register({}: Props) {
  return (
    <div>
      <Link passHref href="/cliente">
        <button>Área de Clientes</button>
      </Link>
      <Link passHref href="/colaborador">
      <button>Área de Colaboradores</button>

      </Link>
      <Link passHref href="/os">
      <button>Área de Ordens de serviço</button>

      </Link>
    </div>
  )
}

export default Register;