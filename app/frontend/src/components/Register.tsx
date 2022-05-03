import React from 'react';
import Link from 'next/link';

// type Props = {}

const Register = () => {
  return (
    <div>
      <Link passHref href="/cliente">
        <button type="button">Área de Clientes</button>
      </Link>
      <Link passHref href="/colaborador">
        <button type="button">Área de Colaboradores</button>

      </Link>
      <Link passHref href="/os">
        <button type="button">Área de Ordens de serviço</button>

      </Link>
    </div>
  );
};

export default Register;
