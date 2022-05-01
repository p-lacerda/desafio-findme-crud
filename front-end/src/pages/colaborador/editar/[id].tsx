import React from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nome: string,
  email: string,
  senha: string,
};

type Props = {};

const EditarColaborador = (props: Props) => {
  const router = useRouter();
  const { query } = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch(`http://localhost:3001/colaborador/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    router.push('/colaborador');
  };
  return (
    <div>
      Editar o colaborador

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          <input type="text"  {...register("nome", { required: true })} />
        </label>
        <label>
          Email:
          <input type="text"  {...register("email", { required: true })} />
        </label>
        <label>
          Senha:
          <input type="text"  {...register("senha", { required: true })} />
        </label>
        <button type="submit">Editar</button>
      </form>
    </div>
  )
}

export default EditarColaborador;