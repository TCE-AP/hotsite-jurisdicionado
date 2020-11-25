import React from 'react';
import { SecaoDTO } from '../../../../dtos/SistemaDTO';
import Secao from './Secao';

interface SecaoSectionProps {
  secoes: SecaoDTO[];
}

const SecaoSection: React.FC<SecaoSectionProps> = ({ secoes }) => {
  return (
    <section className="text-gray-500 mx-auto my-4">
      <div className="prose prose-lg mx-auto">
        <div className="flex flex-wrap">
          {secoes.map((secao) => (
            <Secao key={secao.id} secao={secao} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoSection;
