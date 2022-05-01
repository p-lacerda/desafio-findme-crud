import React from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nome: string,
};

type Props = {};

const EditarCliente = (props: Props) => {
  const router = useRouter();
  const { query } = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch(`http://localhost:3001/cliente/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    router.push('/cliente');
  };
  return (
    <div>
      Editar o cliente

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          <input type="text"  {...register("nome", { required: true })} />
        </label>
        <button type="submit">Editar</button>
      </form>
    </div>
  )
}

export default EditarCliente;