import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  filtroOrdem: string,
};

type Props = {
  onSubmit: SubmitHandler<Inputs>
};

const Order: React.FC<Props> = ({ onSubmit }: Props) => {
  const {
    register, handleSubmit,
    // watch, formState: { errors },
  } = useForm<Inputs>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          Ordernar por nome do Cliente:
          <label htmlFor="filtroOrdem">
            <input type="radio" value="clienteCrescente" {...register('filtroOrdem')} />
            Crescente
          </label>
          <label htmlFor="filtroCliente">
            <input type="radio" value="clienteDecrescente" {...register('filtroOrdem')} />
            Decrescente
          </label>
        </div>

        <div>
          Ordernar por nome do Colaborador:
          <label htmlFor="filtroColaborador">
            <input type="radio" value="colaboradorCrescente" {...register('filtroOrdem')} />
            Crescente
          </label>
          <label htmlFor="filtroColaborador">
            <input type="radio" value="colaboradorDecrescente" {...register('filtroOrdem')} />

            Decrescente
          </label>
        </div>

        <div>
          Ordernar por Data:
          <label htmlFor="filtroOrdem">
            <input type="radio" value="dataCrescente" {...register('filtroOrdem')} />
            Mais recente
          </label>
          <label htmlFor="filtroOrdem">
            <input type="radio" value="dataDecrescente" {...register('filtroOrdem')} />
            Mais antigo
          </label>
        </div>
        <button type="submit">
          Ordenar
        </button>
      </form>
    </div>
  );
};

export default Order;
