import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link passHref href="/">
          <p className="btn btn-ghost normal-case text-xl">PredialX</p>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link passHref href="/cliente">Área de Clientes</Link>
          </li>
          <li>
            <Link passHref href="/colaborador">Área de Colaboradores</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
