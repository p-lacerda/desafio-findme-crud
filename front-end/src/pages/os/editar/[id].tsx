import React from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler } from "react-hook-form";
import OsForm from '../../../components/OsForm';

type Inputs = {
  clienteId: number,
  problemaRelatado: string,
  colaboradorId: number,
};

type Props = {};

const EditarOs = (props: Props) => {
  const router = useRouter();
  const { query } = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch(`http://localhost:3001/ordens/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    router.push('/os');
  };
  return (
    <div>
      Editar a ordem de serviço
      <div>
        <OsForm onSubmit={onSubmit} buttonName="Editar" />
      </div>
    </div>
  )
}

export default EditarOs;