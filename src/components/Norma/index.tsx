import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import NormaDTO from '../../dtos/NormaDTO';

interface NormaProps {
  data: NormaDTO;
}

const Norma: React.FC<NormaProps> = ({ data }) => {
  const { titulo, descricao, arquivo } = data;

  return (
    <>
      <div className="flex flex-wrap w-full shadow rounded-lg mb-2 pb-4 md:py-4 dark:bg-black-apoio">
        <div className="w-full lg:w-11/12 px-4 py-2 md:py-0">
          <h5 className="font-semibold text-blue-apoio dark:text-yellow-primary text-base">
            {titulo}
          </h5>
          <p
            dangerouslySetInnerHTML={{ __html: descricao }}
            className="text-sm"
            style={{ marginTop: 0, marginBottom: 0 }}
          />
        </div>
        <div className="w-full lg:w-1/12 place-self-center">
          <a href={arquivo} target="_blank" rel="noreferrer noopener">
            <FiExternalLink
              size={24}
              className="mx-auto text-blue-apoio dark:text-yellow-primary"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Norma;
