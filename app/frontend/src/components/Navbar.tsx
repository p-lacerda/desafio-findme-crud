// import Link from 'next/link';
import Link from 'next/link';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { MdSpaceDashboard, MdSupervisedUserCircle, MdAccountCircle } from 'react-icons/md';
import { RiUserSmileFill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full sticky">
        <div className="flex flex-col w-full md:w-64 bg-gray-900 flex-shrink-0 border-r ">
          <div className="flex-shrink-0 px-8 py-6 flex flex-row items-center justify-between">
            <a href="/" className="text-3xl font-semilight rounded-lg text-white focus:outline-none focus:shadow-outline">PredialX</a>
            <button type="button" className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
            <Link
              href="/"
            >
              <button type="button" className="px-4 py-2 mt-2 text-md font-semibold  rounded-lg bg-gray-900 hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray-200  focus:outline-none focus:shadow-outline flex items-center mr-2 gap-2">
                <MdSpaceDashboard />
                Dashboard
              </button>
            </Link>
            <Link
              href="/cliente"
            >
              <button type="button" className="px-4 py-2 mt-2 text-md font-semibold  rounded-lg bg-gray-900 hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray-200  focus:outline-none focus:shadow-outline flex items-center mr-2 gap-2">
                <RiUserSmileFill />
                Clientes
              </button>
            </Link>
            <Link
              href="/colaborador"
            >
              <button type="button" className="px-4 py-2 mt-2 text-md font-semibold  rounded-lg bg-gray-900 hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray-200  focus:outline-none focus:shadow-outline flex items-center mr-2 gap-2">
                <MdSupervisedUserCircle />
                Colaboradores
              </button>
            </Link>
            <a
              className="px-4 py-2 mt-2 text-md font-semibold  rounded-lg bg-gray-900 hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray-200  focus:outline-none focus:shadow-outline flex items-center mr-2 gap-2"
              href="/meu-perfil"
            >
              <MdAccountCircle />
              Minha conta
            </a>
            <button
              type="button"
              className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-md text-center flex items-center mr-2 px-4 py-2 mt-4 gap-2 ml-4"
            >
              <FiLogOut />
              Sair
            </button>

          </nav>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
