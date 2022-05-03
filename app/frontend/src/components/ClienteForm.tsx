import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  nome: string,
};

type Props = {
  onSubmit: SubmitHandler<Inputs>,
  buttonName: string,
};

const ClienteForm = ({ onSubmit, buttonName }: Props) => {
  const {
    register, handleSubmit,
    // watch, formState: { errors },
  } = useForm<Inputs>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=""
    >
      <label htmlFor="nome">
        Nome:
        <input {...register('nome', { required: true })} />
      </label>
      <button type="submit">{ buttonName }</button>
      <Link passHref href="/cliente">
        <button type="button">Cancelar</button>
      </Link>
    </form>
  );
};

export default ClienteForm;
