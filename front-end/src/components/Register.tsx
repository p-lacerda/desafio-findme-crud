import React from 'react';
import Link from 'next/link';


type Props = {}

function Register({}: Props) {
  return (
    <div>
      <Link passHref href="/cliente/novo">
        <button>Cadastrar clientes</button>
      </Link>
      <Link passHref href="/colaborador/novo">
      <button>Cadastrar colaboradores</button>

      </Link>
      <Link passHref href="/os/novo">
      <button>Cadastrar ordens de serviço</button>

      </Link>
    </div>
  )
}

export default Register;