import React from 'react';
import { PerguntaDTO } from '../../../../dtos/SistemaDTO';
import PerguntaItem from './Pergunta';

interface PerguntaSectionProps {
  perguntas: PerguntaDTO[];
}

const PerguntaSection: React.FC<PerguntaSectionProps> = ({ perguntas }) => {
  return (
    <section id="perguntas">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 dark:text-yellow-primary sm:text-4xl sm:leading-10">
              Perguntas Frequentes
            </h2>
            {perguntas.map((pergunta) => (
              <PerguntaItem key={pergunta.id} item={pergunta} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerguntaSection;
