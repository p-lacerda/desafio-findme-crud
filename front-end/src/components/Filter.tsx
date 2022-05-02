import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  pesquisa: string,
  filtroData: string
};

type Props = {
  onSubmit: SubmitHandler<Inputs>
};

const Filter = ({ onSubmit }: Props): JSX.Element => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="pesquisa">
        <input
          id="pesquisa"
          {...register("pesquisa")}
          placeholder="Pesquise por colaborador ou cliente"
        />
      </label>
      <label htmlFor="filtro-data">
        <input
          id="filtroData"
          {...register("filtroData")}
          type="date"
        />
      </label>
      <button type="submit">Filtrar</button>
      </form>
    </div>
  )
}

export default Filter