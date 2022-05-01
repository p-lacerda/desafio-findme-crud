import React from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  clienteId: number,
  problemaRelatado: string,
  colaboradorId: number,
};

type Props = {};

const EditarOs = (props: Props) => {
  const router = useRouter();
  const { query } = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Id do Cliente:
          <input type="text"  {...register("clienteId", { required: true })} />
        </label>
        <label>
          Qual foi o problema relatado?
          <textarea  {...register("problemaRelatado", { required: true })} />
        </label>
        <label>
          Id do Colaborador:
          <input type="text"  {...register("colaboradorId", { required: true })} />
        </label>
        <button type="submit">Editar</button>
      </form>
    </div>
  )
}

export default EditarOs;