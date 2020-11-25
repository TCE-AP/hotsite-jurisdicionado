/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import NormaDTO from '../../dtos/NormaDTO';
import Norma from '../../components/Norma';

const NormasELegislacoes: React.FC = () => {
  const [normas, setNormas] = useState<NormaDTO[]>([]);
  const [normasFiltradas, setNormasFiltradas] = useState<NormaDTO[]>([]);
  const [exercicios, setExercicios] = useState<number[]>([]);
  const [filtro, setFiltro] = useState('');

  const { data } = useApi(
    '/api/jurisdicionado/controle-externo/normas-e-legislacoes',
  );

  const breadCrumbLinkItemCss =
    'text-blue-primary dark:text-gray-400 font-semibold hover:text-blue-apoio transition-colors duration-100';

  useEffect(() => {
    data && setNormas(data);
  }, [data]);

  useEffect(() => {
    const filtradas = normas.filter((norma) =>
      JSON.stringify(norma)
        .toLowerCase()
        .normalize('NFD')
        .replace(new RegExp(/[\u0300-\u036f]/, 'gi'), '')
        .includes(
          filtro
            .toLowerCase()
            .normalize('NFD')
            .replace(new RegExp(/[\u0300-\u036f]/, 'gi'), ''),
        ),
    );
    setNormasFiltradas(filtradas);
  }, [filtro, normas]);

  function handleFilter(text: string): void {
    setFiltro(text);
  }

  useEffect(() => {
    normas.map((norma) => {
      if (!exercicios.includes(norma.exercicio)) {
        setExercicios([...exercicios, norma.exercicio]);
      }
      return null;
    });
  }, [normas, exercicios]);

  return (
    <div className="dark:bg-gray-900 pb-6">
      <Head>
        <title>TCE-AP | Jurisdicionado - Normas e Legislações</title>
      </Head>
      <div className="bg-blue-primary dark:bg-gray-800 h-24 sm:h-36" />
      <nav className="mx-2 sm:mx-12 px-4 py-2 xl:container xl:mx-auto rounded bg-gray-100 dark:bg-black-apoio shadow -mt-6 sm:-mt-4 mb-2">
        <ul className="flex flex-row flex-wrap">
          <li>
            <Link href="/">
              <a className={breadCrumbLinkItemCss}>Página Inicial</a>
            </Link>
          </li>
          <li className="mx-2 text-gray-500">•</li>
          <li className="text-gray-500 font-semibold">Controle Externo</li>
          <li className="mx-2 text-gray-500">•</li>
          <li className="text-gray-500 font-semibold">Normas e Legislações</li>
        </ul>
      </nav>
      <main>
        <div className="pt-5 px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-blue-apoio dark:text-gray-500 font-semibold tracking-wide uppercase">
              Controle Externo
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-yellow-primary sm:text-4xl sm:leading-10">
              Normas e Legislações
            </h1>
          </div>
          <div>
            <div className="relative rounded-md shadow-sm w-full lg:w-1/3 mx-auto">
              <input
                id="busca"
                value={filtro}
                onChange={(e) => handleFilter(e.target.value)}
                className="ring-1 dark:ring-gray-700 focus:ring-blue-500 dark:focus:ring-yellow-primary focus:border-blue-500 dark:focus:border-yellow-primary border-gray-300 dark:border-black-apoio block w-full shadow-sm py-3 px-4 placeholder-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-400 outline-none"
                placeholder="Buscar normas"
              />
            </div>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto mt-2 text-justify">
            {exercicios.reverse().map((ex) => {
              return (
                <div
                  key={ex}
                  className="border-l-2 border-blue-apoio dark:border-yellow-primary py-4 lg:py-8"
                >
                  <h5
                    id={`ano-${ex}`}
                    className="font-semibold text-3xl text-blue-apoio dark:text-yellow-primary border-l-8 border-blue-apoio dark:border-yellow-primary pl-2 mb-4"
                  >
                    {ex}
                  </h5>
                  <div className="ml-4">
                    <h5 className="font-bold text-black-apoio dark:text-gray-400 text-xl text-left">
                      Normas gerais da prestação de contas anual
                    </h5>
                    {normasFiltradas.map(
                      (norma) =>
                        norma.exercicio === ex &&
                        norma.tipo === 0 && (
                          <Norma key={norma.id} data={norma} />
                        ),
                    )}

                    <h5 className="font-bold text-black-apoio dark:text-gray-400 text-xl text-left">
                      Normas específicas da prestação de contas anual
                    </h5>
                    {normasFiltradas.map(
                      (norma) =>
                        norma.exercicio === ex &&
                        norma.tipo === 1 && (
                          <Norma key={norma.id} data={norma} />
                        ),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NormasELegislacoes;
