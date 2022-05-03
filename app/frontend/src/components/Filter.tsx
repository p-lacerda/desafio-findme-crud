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
        <label htmlFor="pesquisa">
          <label htmlFor="filtro-data">
            <input
              id="filtroData"
              {...register('filtroData')}
              type="date"
            />
          </label>
          <input
            id="pesquisa"
            {...register('pesquisa')}
            placeholder="Pesquise por colaborador ou cliente"
          />
        </label>
        <button className="btn" type="submit">Filtrar</button>
      </form>
    </div>
  );
};

export default Filter;
