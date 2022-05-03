import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Order from './Order';
import Filter from './Filter';

type Inputs = {
  pesquisa: string,
  filtroData: string
};

type Props = {};

const Dashboard: React.FC<Props> = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // Se a pesquisa é vazia o array retorna ao original
    if (formData.pesquisa.length === 0 && formData.filtroData.length === 0) {
      return setFilteredData(data);
    }

    let filteredSearch = data.filter((
      { clienteInfo: { nome: clienteNome }, colaboradorInfo: { nome: colaboradorNome } },
    ) => {
      return (
        clienteNome.toLowerCase().includes(formData.pesquisa.toLowerCase())
          || colaboradorNome.toLowerCase().includes(formData.pesquisa.toLowerCase())
      );
    });

    filteredSearch = filteredSearch.filter((ordem) => {
      return ordem.dataAbertura.includes(formData.filtroData);
    });

    return setFilteredData(filteredSearch);
  };

  useEffect(() => {
    fetch('http://localhost:3001/ordens')
      .then((res) => { return res.json(); })
      .then((res) => {
        setData(res);
        setFilteredData(res);
      })
      .catch((error) => { return console.log(error); });
  }, []);

  return (
    <div className="py-8 px-10 w-full">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Ordens de Serviço</h1>
        <Link passHref href="/os/novo">
          <button className="btn b-4 border-gray-900 bg-transparent text-gray-900 hover:text-white hover:bg-gray-900 hover:border-gray-900 font-medium" type="button">Adicionar ordem de serviço</button>
        </Link>
      </div>
      <div>
        <Order />
        <div className="flex flex-col">
          <div>
            <p className="text-xl">Lista</p>
          </div>
          <div className="bg-white w-full">
            <Filter onSubmit={onSubmit} />

            <div className="overflow-x-auto border-x border-t max-w-none w-full">
              <table className="table-auto w-full">
                <thead className="border-b">
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-medium">Colaborador</th>
                    <th className="text-left p-4 font-medium">Cliente</th>
                    <th className="text-left p-4 font-medium">Problema relatado</th>
                    <th className="text-left p-4 font-medium">Ações do Painel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      Paulo de Tasso
                      <p className="font-light text-sm">Id: 1</p>
                    </td>
                    <td className="p-4">
                      João Farias
                      <p className="font-light text-sm">Id: 1</p>
                    </td>
                    <td className="p-4">
                      <button type="button" className="btn">
                        Ver detalhes
                      </button>
                    </td>
                    <td className="p-4 gap-2 flex">
                      <button type="button" className="btn btn-warning font-medium">Editar</button>
                      <button type="button" className="btn btn-error font-medium">Excluir</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {
          filteredData.map((ordem) => {
            return (
              <div key={ordem.id}>
                <p>{ ordem.dataAbertura }</p>
                <p>{ ordem.problemaRelatado }</p>
                <p>{ ordem.colaboradorInfo.nome }</p>
                <p>{ ordem.clienteInfo.nome }</p>
                <div>
                  <Link passHref href={`/os/editar/${ordem.id}`}>
                    <button
                      className="btn"
                      type="button"
                    >
                      Editar
                    </button>
                  </Link>
                  <Link passHref href={`/os/deletar/${ordem.id}`}>
                    <button
                      className="btn"
                      type="button"
                    >
                      Excluir
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
