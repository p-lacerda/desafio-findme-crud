/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <div className="flex flex-row gap-4 max-w-full">
        <div className="form-control w-full">
          <label htmlFor="clienteId" className="label">
            <span className="label-text">Id do cliente:</span>
          </label>
          <input
            className="input input-bordered w-full"
            {...register('clienteId', { required: true })}
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="colaboradorId" className="label">
            <span className="label-text">Id do colaborador:</span>
          </label>
          <input
            className="input input-bordered w-full"
            {...register('colaboradorId', { required: true })}
          />

        </div>
      </div>

      <div className="form-control">
        <label htmlFor="problemaRelatado" className="label">
          <span className="label-text">Qual foi o problema relatado?</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-36"
          {...register('problemaRelatado', { required: true })}
        />
      </div>
      <div className="flex flex-row gap-2 place-content-end">
        <Link passHref href="/">
          <button type="button" className="btn btn-error mt-4">Cancelar</button>
        </Link>
        <button type="submit" className="btn btn-success mt-4">{ buttonName }</button>
      </div>

    </form>
  );
};

export default OsForm;
