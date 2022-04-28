import React from 'react';
import Link from 'next/link';


type Props = {}

function Register({}: Props) {
  return (
    <div>
      <Link passHref href="/register/cliente">
        <button>Cadastrar clientes</button>
      </Link>
      <Link passHref href="/register/colaborador">
      <button>Cadastrar colaboradores</button>

      </Link>
      <Link passHref href="/register/os">
      <button>Cadastrar ordens de serviço</button>

      </Link>
    </div>
  )
}

export default Register;