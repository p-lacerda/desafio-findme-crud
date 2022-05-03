import React from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler } from 'react-hook-form';
import OsForm from '../../../components/OsForm';

type Inputs = {
  clienteId: number,
  problemaRelatado: string,
  colaboradorId: number,
};

const EditarOs = () => {
  const router = useRouter();
  const { query } = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch(`http://localhost:3001/ordens/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    router.push('/');
  };
  return (
    <div className="py-8 px-10 w-screen max-w-5xl h-screen">
      <h1 className="text-3xl font-semibold">Editar a ordem de serviço</h1>
      <p className="text-gray-400">*Ids de cliente e colaborador precisam ser existentes</p>

      <div>
        <OsForm onSubmit={onSubmit} buttonName="Editar" />
      </div>
    </div>
  );
};

export default EditarOs;
