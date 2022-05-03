import React from 'react';

// type Props = {}

const Order = () => {
  return (
    <div>
      <form>
        <div>
          Ordernar por nome do Cliente:
          <label htmlFor="filtro-ordem">
            <input type="radio" name="filtro-ordem" />
            Crescente
          </label>
          <label htmlFor="filtro-ordem">
            <input type="radio" name="filtro-ordem" />
            Decrescente
          </label>
        </div>

        <div>
          Ordernar por nome do Colaborador:
          <label htmlFor="filtro-ordem">
            <input type="radio" name="filtro-ordem" />
            Crescente
          </label>
          <label htmlFor="filtro-ordem">
            <input type="radio" name="filtro-ordem" />

            Decrescente
          </label>
        </div>

        <div>
          Ordernar por Data:
          <label htmlFor="filtro-ordem">
            <input type="radio" name="filtro-ordem" />
            Mais recente
          </label>
          <label htmlFor="filtro-ordem">
            <input type="radio" name="filtro-ordem" />
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
