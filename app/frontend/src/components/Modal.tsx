/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Modal = ({ modalId, detalhes }: any) => {
  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={modalId}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Detalhes do problema relatado
          </h3>
          <p className="py-4">
            { detalhes }
          </p>
        </div>
      </div>
    </>

  );
};

export default Modal;
