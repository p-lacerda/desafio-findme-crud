import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nome: string,
  email: string,
  senha: string,
};


type Props = {
  onSubmit: SubmitHandler<Inputs>,
  buttonName: string,
}

function ColaboradorForm({onSubmit, buttonName}: Props) {
  const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=""
    >
          <label>
            Nome:
            <input { ...register("nome", { required: true })} />
          </label>
          <label>
            Email:
            <input { ...register("email", { required: true, pattern: {
            value: EMAIL_VALIDATION,
            message: 'O campo email é inválido',
          } })} />
          </label>
          <label>
            Senha:
            <input { ...register("senha", { required: true, minLength: 6 })} />
          </label>
      <button type="submit">{ buttonName }</button>
      <Link passHref href="/colaborador">
        <button type="button">Cancelar</button>
      </Link>
    </form>
  )
}

export default ColaboradorForm;