import React from 'react';
import Link from 'next/link';


type Props = {}

function Navbar({}: Props) {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">PredialX</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Área de Clientes</a>
          </li>
          <li>
            <a>Área de Colaboradores</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
