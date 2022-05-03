// import Link from 'next/link';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <div className="flex flex-col w-full md:w-64 text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 border-r md:mr-2" x-data="{ open: false }">
          <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
            <a href="/" className="text-lg font-semibold text-gray-900 rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">PredialX</a>
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
              <button type="button" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Dashboard</button>
            </Link>
            <Link
              href="/cliente"
            >
              <button type="button" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Clientes</button>
            </Link>
            <Link
              href="/colaborador"
            >
              <button type="button" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Colaboradores</button>
            </Link>
            <a
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/meu-perfil"
            >
              Minha conta
            </a>
            <a
              className="px-4 py-2 mt-2 btn btn-error"
              href="/login"
            >
              Sair
            </a>
          </nav>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
