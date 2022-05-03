import React from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler } from 'react-hook-form';
import ColaboradorForm from '../../../components/ColaboradorForm';

type Inputs = {
  nome: string,
  email: string,
  senha: string,
};

const EditarColaborador = () => {
  const router = useRouter();
  const { query } = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch(`http://localhost:3001/colaborador/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    router.push('/colaborador');
  };
  return (
    <div className="py-8 px-10 w-screen max-w-5xl h-screen">
      <h1 className="text-3xl font-semibold">Editar o colaborador</h1>
      <div>
        <ColaboradorForm onSubmit={onSubmit} buttonName="Editar" />
      </div>
    </div>
  );
};

export default EditarColaborador;
