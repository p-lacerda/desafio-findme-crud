import React from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler } from 'react-hook-form';
import ClienteForm from '../../../components/ClienteForm';

type Inputs = {
  nome: string,
};

const EditarCliente = () => {
  const router = useRouter();
  const { query } = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch(`http://localhost:3001/cliente/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    router.push('/cliente');
  };
  return (
    <div>
      Editar o cliente
      <ClienteForm onSubmit={onSubmit} buttonName="Editar" />
    </div>
  );
};

export default EditarCliente;
