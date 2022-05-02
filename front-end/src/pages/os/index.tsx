import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SubmitHandler } from "react-hook-form";
import Filter from '../../components/Filter';

type Inputs = {
  pesquisa: string,
  filtroData: string
};

type Props = {};

function Os({}: Props): JSX.Element {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {

    // Se a pesquisa é vazia o array retorna ao original
    if (formData.pesquisa.length === 0 && formData.filtroData.length === 0) {
      return setFilteredData(data);
    }

    let filteredSearch = data.filter((
      { clienteInfo: { nome: clienteNome }, colaboradorInfo: { nome: colaboradorNome } }
    ) => (
        clienteNome.toLowerCase().includes(formData.pesquisa.toLowerCase()) ||
          colaboradorNome.toLowerCase().includes(formData.pesquisa.toLowerCase())
      )
    )
    
    filteredSearch = filteredSearch.filter(ordem => ordem.dataAbertura.includes(formData.filtroData))
    setFilteredData(filteredSearch);
  };

  useEffect(() => {
    fetch("http://localhost:3001/ordens")
      .then(res => res.json())
      .then(res => { 
        setData(res)
        setFilteredData(res) 
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h1>Ordens de Serviço</h1>
      <div>
        <Link passHref href="/os/novo">
          <button>Adicionar nova ordem de serviço</button>
        </Link>
      </div>
      <div>
        <Filter onSubmit={onSubmit}/>
        <p>Lista de Ordens de Serviço</p>
        <div>
        {
          filteredData.map((ordem, i) => (
            <div key={i}>
              <p>{ ordem.dataAbertura }</p>
              <p>{ ordem.problemaRelatado }</p>
              <p>{ ordem.colaboradorInfo.nome }</p>
              <p>{ ordem.clienteInfo.nome }</p>
              <div>
                <Link passHref href={`/os/editar/${ordem.id}`}>
                  <button
                    className='btn'
                  >
                    Editar
                  </button>
                </Link>
                <Link passHref href={`/os/deletar/${ordem.id}`}>
                  <button
                    className='btn'
                  >
                    Excluir
                  </button>
                </Link>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Os;