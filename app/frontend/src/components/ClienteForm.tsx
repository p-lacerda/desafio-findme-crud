/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <div className="form-control w-full">
        <label htmlFor="nome" className="label">
          <span className="label-text">Nome</span>
        </label>
        <input
          className="input input-bordered w-full"
          {...register('nome', { required: true })}
        />
      </div>
      <div className="flex flex-row gap-2 place-content-end">
        <Link passHref href="/cliente">
          <button type="button" className="btn btn-error mt-4">Cancelar</button>
        </Link>
        <button type="submit" className="btn btn-success mt-4">{ buttonName }</button>
      </div>
    </form>
  );
};

export default ClienteForm;
