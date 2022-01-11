import React from 'react';
import { SecaoDTO } from '../../../../dtos/SistemaDTO';
import Secao from './Secao';

interface SecaoSectionProps {
  secoes: SecaoDTO[];
}

const SecaoSection: React.FC<SecaoSectionProps> = ({ secoes }) => {
  return (
    <div className="my-6">
      <div className="flex flex-wrap justify-center">
        {secoes.map((secao) => (
          <Secao key={secao.id} secao={secao} />
        ))}
      </div>
    </div>
  );
};

export default SecaoSection;
