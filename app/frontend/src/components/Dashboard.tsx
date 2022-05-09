/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Order from './Order';
import Filter from './Filter';
import Modal from './Modal';

type Inputs = {
  pesquisa: string,
  filtroData: string
};

type OrderBy = {
  filtroOrdem: string,
};

type Props = {};

const Dashboard: React.FC<Props> = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const submitFilter: SubmitHandler<Inputs> = (formData) => {
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

  const submitOrderBy: SubmitHandler<OrderBy> = async (formData) => {
    let orderedBySearch = [];

    if (formData.filtroOrdem === null) {
      return setFilteredData(data);
    }

    if (formData.filtroOrdem === 'colaboradorCrescente') {
      orderedBySearch = data.sort((a, b) => {
        return a.colaboradorInfo.nome.localeCompare(b.colaboradorInfo.nome);
      });
    }

    if (formData.filtroOrdem === 'colaboradorDecrescente') {
      orderedBySearch = data.sort((a, b) => {
        return b.colaboradorInfo.nome.localeCompare(a.colaboradorInfo.nome);
      });
    }

    if (formData.filtroOrdem === 'clienteCrescente') {
      orderedBySearch = data.sort((a, b) => {
        return a.clienteInfo.nome.localeCompare(b.clienteInfo.nome);
      });
    }

    if (formData.filtroOrdem === 'clienteDecrescente') {
      orderedBySearch = data.sort((a, b) => {
        return b.clienteInfo.nome.localeCompare(a.clienteInfo.nome);
      });
    }

    if (formData.filtroOrdem === 'dataCrescente') {
      orderedBySearch = data.sort((a, b) => {
        return +new Date(a.dataAbertura) + +new Date(b.dataAbertura);
      });
    }

    if (formData.filtroOrdem === 'dataDecrescente') {
      orderedBySearch = data.sort((a, b) => {
        return +new Date(b.dataAbertura) - +new Date(a.dataAbertura);
      });
    }

    await setFilteredData([]);
    return setFilteredData(orderedBySearch);
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
    <div className="py-6 px-0 w-full">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Ordens de Serviço</h1>
        <Link passHref href="/os/novo">
          <button className="btn b-4 border-gray-900 bg-transparent text-gray-900 hover:text-white hover:bg-gray-900 hover:border-gray-900 font-medium" type="button">Adicionar ordem de serviço</button>
        </Link>
      </div>
      <div>
        <Order onSubmit={submitOrderBy} />
        <div className="flex flex-col">
          <div className="bg-white w-full">
            <div className="flex gap-2 place-content-end mt-4">
              <Filter onSubmit={submitFilter} />
            </div>
            <div>
              <table className="table-auto w-full mt-4">
                <thead className="border-b">
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-medium">Id</th>
                    <th className="text-left p-4 font-medium">Colaborador</th>
                    <th className="text-left p-4 font-medium">Cliente</th>
                    <th className="text-left p-4 font-medium">Problema relatado</th>
                    <th className="text-left p-4 font-medium">Data de abertura</th>
                    <th className="text-left p-4 font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    filteredData.map((ordem) => {
                      return (
                        <tr className="border-b hover:bg-gray-50" key={ordem.id}>
                          <td className="p-4">
                            { ordem.id }
                          </td>
                          <td className="p-4">
                            { ordem.colaboradorInfo.nome }
                            <p className="font-light text-xs">
                              {`Id: ${ordem.colaboradorId}`}
                            </p>
                          </td>
                          <td className="p-4">
                            { ordem.clienteInfo.nome }
                            <p className="font-light text-xs">
                              {`Id: ${ordem.clienteId}`}
                            </p>
                          </td>
                          <td className="p-4">
                            <label htmlFor={`modal-detalhes-${ordem.id}`} className="btn modal-button">
                              Ver detalhes
                            </label>
                            <Modal modalId={`modal-detalhes-${ordem.id}`} detalhes={ordem.problemaRelatado} />
                          </td>
                          <td className="p-4">
                            { ordem.dataAbertura }
                          </td>
                          <td className="p-4 gap-2 flex">
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
      </div>
    </div>
  );
};

export default Dashboard;
