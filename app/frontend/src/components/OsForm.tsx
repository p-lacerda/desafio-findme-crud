import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  clienteId: number,
  problemaRelatado: string,
  colaboradorId: number,
};

type Props = {
  onSubmit: SubmitHandler<Inputs>,
  buttonName: string,
};

const OsForm = ({ onSubmit, buttonName }: Props) => {
  const {
    register, handleSubmit,
    // watch, formState: { errors },
  } = useForm<Inputs>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=""
    >
      <label htmlFor="clienteId">
        Id do cliente:
        <input {...register('clienteId', { required: true })} />
      </label>
      <label htmlFor="problemaRelatado">
        Qual foi o problema relatado?
        <textarea {...register('problemaRelatado', { required: true })} />
      </label>
      <label htmlFor="colaboradorId">
        Id do colaborador:
        <input {...register('colaboradorId', { required: true })} />
      </label>
      <button type="submit">{ buttonName }</button>
      <Link passHref href="/os">
        <button type="button">Cancelar</button>
      </Link>
    </form>
  );
};

export default OsForm;
