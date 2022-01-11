import React from 'react';
import { SecaoDTO } from '../../../../../dtos/SistemaDTO';

interface SecaoProps {
  secao: SecaoDTO;
}

const Secao: React.FC<SecaoProps> = ({ secao }) => {
  const { titulo, link, icone } = secao;
  return (
    <div className="m-2 p-2 rounded-lg shadow">
      {/* <h5 className="font-semibold">{titulo}</h5> */}
      <a href={link}>
        <img src={icone} alt={titulo} className="w-48 h-auto" />
      </a>
    </div>
  );
};

export default Secao;
