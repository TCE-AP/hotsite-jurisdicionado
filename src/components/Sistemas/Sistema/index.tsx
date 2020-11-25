/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import SistemaDTO from '../../../dtos/SistemaDTO';
import { useFontSize } from '../../../hooks/fontSize';

interface SistemaProps {
  sistema: SistemaDTO;
}

const Sistema: React.FC<SistemaProps> = ({ sistema }) => {
  const { titulo, sigla, capa, slug, descricaoClean } = sistema;
  const { fontSizeText } = useFontSize();
  return (
    <Link href={`/sistemas/${slug}`}>
      <a className="flex flex-wrap lg:flex-nowrap hover:underline">
        {capa && (
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="flex items-center justify-center w-48">
              <img src={capa} alt={titulo} className="rounded-lg" />
            </div>
          </div>
        )}
        <div className="ml-4 md:ml-0 lg:ml-4">
          <h6 className="text-blue-apoio dark:text-gray-500 font-medium transition-all duration-200">
            {sigla}
          </h6>
          <h4
            className={`${
              fontSizeText === 'text-base' ? 'text-lg' : fontSizeText
            } leading-6 font-semibold dark:text-yellow-primary text-blue-primary transition-all duration-200`}
          >
            {titulo}
          </h4>
          <p className="mt-2 leading-6 text-gray-500 dark:text-gray-400">
            {descricaoClean}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Sistema;
