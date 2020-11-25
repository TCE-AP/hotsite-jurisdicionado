import React from 'react';
import { SecaoDTO } from '../../../../../dtos/SistemaDTO';

interface SecaoProps {
  secao: SecaoDTO;
}

const Secao: React.FC<SecaoProps> = ({ secao }) => {
  const { cor, titulo, descricao } = secao;
  return (
    <div className="mb-4 text-base w-full">
      <div className={`${cor} px-4 py-2 rounded-lg shadow`}>
        <h5 className="font-semibold">{titulo}</h5>
        <div
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: descricao }}
        />
      </div>
    </div>
  );
};

export default Secao;
