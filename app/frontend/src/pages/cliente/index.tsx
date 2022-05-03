import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// type Props = {};

const Cliente = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cliente')
      .then((res) => { return res.json(); })
      .then((res) => { return setData(res); })
      .catch((error) => { return console.log(error); });
  }, []);

  return (
    <div className="flex flex-col w-screen max-w-5xl h-screen max-w-7xl px-10 py-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Clientes</h1>
        <Link passHref href="/cliente/novo">
          <button type="button" className="btn b-4 border-gray-900 bg-transparent text-gray-900 hover:text-white hover:bg-gray-900 hover:border-gray-900 font-medium">Adicionar novo cliente</button>
        </Link>
      </div>
      <div>
        <div>
          <table className="table-auto w-full mt-4">
            <thead className="border-b">
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-medium">Id</th>
                <th className="text-left p-4 font-medium">Cliente</th>
                <th className="text-left p-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {
data.map((cliente: any) => {
  return (
    <tr className="border-b hover:bg-gray-50" key={cliente.id}>
      <td className="p-4">
        { cliente.id }
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span>{ cliente.nome[0] }</span>
            </div>
          </div>
          <p>{ cliente.nome }</p>
        </div>
      </td>
      <td className="p-4 gap-2 flex">
        <Link passHref href={`/cliente/editar/${cliente.id}`}>
          <button
            className="btn"
            type="button"
          >
            Editar
          </button>
        </Link>
        <Link passHref href={`/cliente/deletar/${cliente.id}`}>
          <button
            className="btn"
            type="button"
          >
            Excluir
          </button>
        </Link>
      </td>

    </tr>
  );
})
                  }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cliente;
