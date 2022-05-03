import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  pesquisa: string,
  filtroData: string
};

type Props = {
  onSubmit: SubmitHandler<Inputs>
};

const Filter: React.FC<Props> = ({ onSubmit }: Props) => {
  const {
    register, handleSubmit,
    // watch, formState: { errors },
  } = useForm<Inputs>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-2">
          <label htmlFor="filtro-data">
            <input
              id="filtroData"
              placeholder="Selecione uma data"
              className="input input-bordered w-full max-w-xs"
              {...register('filtroData')}
              type="date"
            />
          </label>
          <label htmlFor="pesquisa">
            <input
              id="pesquisa"
              className="input input-bordered w-full max-w-xs"
              {...register('pesquisa')}
              placeholder="Pesquise por colaborador ou cliente"
            />
          </label>
          <button className="btn" type="submit">Filtrar</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
