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
    <div className="py-2">
      <h1 className="text-3xl font-semibold">Ordens de Serviço</h1>
      <div>
        <Link passHref href="/os/novo">
          <button type="button">Adicionar nova ordem de serviço</button>
        </Link>
      </div>
      <div>
        <Filter onSubmit={onSubmit} />
        <Order />
        <div className="flex flex-row">
          <div>
            <p>Lista de Ordens de Serviço</p>

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
