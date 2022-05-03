import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Colaborador = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/colaborador')
      .then((res) => { return res.json(); })
      .then((res) => { return setData(res); })
      .catch((error) => { return console.log(error); });
  }, []);
  return (
    <div className="flex flex-col w-screen max-w-7xl h-screen px-10 py-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Colaborador</h1>
        <Link passHref href="/colaborador/novo">
          <button type="button" className="btn b-4 border-gray-900 bg-transparent text-gray-900 hover:text-white hover:bg-gray-900 hover:border-gray-900 font-medium">Adicionar novo colaborador</button>
        </Link>
      </div>
      <div>
        <div>
          <table className="table-auto w-full mt-4">
            <thead className="border-b">
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-medium">Id</th>
                <th className="text-left p-4 font-medium">Colaborador</th>
                <th className="text-left p-4 font-medium">Email</th>
                <th className="text-left p-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {
data.map(({ id, email, nome }) => {
  return (
    <tr className="border-b hover:bg-gray-50" key={id}>
      <td className="p-4">
        <p className="font-bold">{ id }</p>
      </td>
      <td className="p-4">
        <p>{ nome }</p>
      </td>
      <td className="p-4">
        <p>{ email }</p>
      </td>
      <td className="p-4 gap-2 flex">
        <Link passHref href={`/colaborador/editar/${id}`}>
          <button
            className="btn"
            type="button"
          >
            Editar
          </button>
        </Link>
        <Link passHref href={`/colaborador/deletar/${id}`}>
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

export default Colaborador;
