/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import NavegacaoSistemas from '../../components/Sistemas/Sistema/NavegacaoSistemas';
import PerguntaSection from '../../components/Sistemas/Sistema/PerguntaSection';
import SecaoSection from '../../components/Sistemas/Sistema/SecaoSection';
import VideoSection from '../../components/Sistemas/Sistema/VideoSection';
import SistemaDTO from '../../dtos/SistemaDTO';
import { useApi } from '../../hooks/useApi';

interface SistemaProps {
  sistema: SistemaDTO;
}

const sistemaCiclo2Slug = 'levantamento-de-receitas-segundo-ciclo';
const breadCrumbLinkItemCss =
    'text-blue-primary dark:text-gray-400 font-semibold hover:text-blue-apoio transition-colors duration-100';

export default function SistemaSlug({ sistema }: SistemaProps): JSX.Element {
  const {
    titulo,
    slug,
    capa,
    descricaoClean,
    sigla,
    videos,
    secoes,
    perguntas,
    link,
    descricao,
  } = sistema;

  const isReceitas = sigla === 'RECEITAS';

  const [sistemaCiclo2, setSistemaCiclo2] = useState<SistemaDTO | undefined>();
  const [cicloTab, setCicloTab] = useState<1 | 2>(1);

  useEffect(() => {
    if (isReceitas) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jurisdicionado/sistemas/${sistemaCiclo2Slug}`)
        .then(response => response.json())
        .then(json => {
          setSistemaCiclo2(json);
        });
    }
  }, []);

  console.log(sistemaCiclo2);

  return (
    <div className="dark:bg-gray-900">
      <Head>
        <>
          <title>TCE-AP | Jurisdicionado - {titulo}</title>
          <meta property="fb:app_id" content="410440873247656" />
          <meta content="Jurisdicionado - TCE-AP" property="og:site_name" />
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_WEB_URL}/sistemas/${slug}`}
          />
          <meta property="og:title" content={titulo} />
          <meta property="og:description" content={descricaoClean} />
          <meta property="og:image" content={capa} />
          <meta property="og:type" content="article" />
          <meta property="og:image:width" content="1100" />
          <meta property="og:image:height" content="620" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@TCE_APoficial" />
          <meta property="twitter:title" content={titulo} />
          <meta property="twitter:description" content={descricaoClean} />
          <meta property="twitter:creator" content="@TCE_APoficial" />
          <meta property="twitter:image" content={capa} />
        </>
      </Head>
      <div className="bg-blue-primary dark:bg-gray-800 h-24 sm:h-36" />
      <nav className="mx-2 sm:mx-12 px-4 py-2 xl:container xl:mx-auto rounded bg-gray-100 dark:bg-black-apoio shadow -mt-6 sm:-mt-4 mb-2">
        <ul className="flex flex-row flex-wrap">
          <li>
            <Link href="/">
              <a className={breadCrumbLinkItemCss}>Página Inicial</a>
            </Link>
          </li>
          <li className="mx-2 dark:text-gray-500">•</li>
          <li>
            <Link href="/#sistemas">
              <a className={breadCrumbLinkItemCss}>Sistemas</a>
            </Link>
          </li>
          <li className="mx-2 dark:text-gray-500">•</li>
          <li className="text-gray-500 dark:text-yellow-primary font-semibold">
            {sistema ? sistema.titulo : titulo}
          </li>
        </ul>
      </nav>
      <main>
        <div className="container mx-auto flex flex-wrap ">
          <div className="w-full lg:w-1/4 lg:my-4 lg:pr-8 lg:border-r border-gray-200 dark:border-gray-700">
            <NavegacaoSistemas slug={slug} />
          </div>
          <div className="w-full lg:w-3/4 relative py-4 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="text-lg max-w-prose mx-auto mb-6">
                <p className="text-base text-center leading-6 text-blue-apoio dark:text-gray-400 font-semibold tracking-wide uppercase">
                  Sistemas
                </p>
                <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-yellow-primary sm:text-4xl sm:leading-10">
                  {sistema ? (
                    sistema.titulo
                  ) : (
                    <div className="mx-auto w-64">
                      <Skeleton />
                    </div>
                  )}
                </h1>
              </div>
              {sistema ? (
                <img
                  src={sistema.capa}
                  className="mx-auto rounded-lg h-24 md:h-44"
                  alt={`logo ${sistema.titulo}`}
                />
              ) : (
                <div className="mx-auto w-2/5">
                  <Skeleton height="10rem" />
                </div>
              )}

              {sistema ? (
                (sistema.link !== '-' && sistema.link !== 'none') && (
                  <div className="my-5 sm:flex justify-center">
                    <div className="rounded-md shadow">
                      <a
                        href={sistema.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-600 bg-blue-600 dark:bg-yellow-primary hover:bg-blue-apoio dark:hover:bg-yellow-primary focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-2 md:text-lg md:px-20"
                      >
                        Acessar
                        <FiExternalLink className="ml-2" size={18} />
                      </a>
                    </div>
                  </div>
                )
              ) : (
                <div className="mx-auto w-64">
                  <Skeleton height="3rem" />
                </div>
              )}
              {sistema ? (
                <div
                  className="prose prose-lg text-gray-600 dark:text-gray-400 mx-auto mt-2 text-justify"
                  dangerouslySetInnerHTML={{ __html: sistema.descricao }}
                />
              ) : (
                <div className="mx-auto w-2/3">
                  <Skeleton count={10} />
                </div>
              )}

              {(!isReceitas || !sistemaCiclo2) && sistema.secoes.length > 0 && (
                <SecaoSection secoes={sistema.secoes} />
              )}

              {(isReceitas && sistemaCiclo2) && (
                <div>
                  <div className="flex justify-center items-center space-x-3">
                    <_TabButton label="Ciclo 1" onClick={() => { setCicloTab(1) }} isAtivo={cicloTab === 1} />
                    <_TabButton label="Ciclo 2" onClick={() => { setCicloTab(2) }} isAtivo={cicloTab === 2} />
                  </div>

                  {cicloTab === 1 && <SecaoSection secoes={sistema.secoes} />}
                  {cicloTab === 2 && <SecaoSection secoes={sistemaCiclo2.secoes} />}
                </div>
              )}

              {sistema.videos.length > 0 && (
                <VideoSection videos={sistema.videos} />
              )}
            </div>
          </div>
        </div>
        {sistema.perguntas.length > 0 && (
          <PerguntaSection perguntas={sistema.perguntas} />
        )}
      </main>
    </div>
  );
}

const _TabButton: React.FC<{
  label: string;
  onClick: () => void;
  isAtivo: boolean;
}> = React.memo(({ label, onClick, isAtivo }) => {
  return (
    <div
      className={`inline-flex justify-center py-3 px-6 leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out ${isAtivo ? 'bg-blue-600 dark:bg-transparent dark:text-yellow-300 dark:border-yellow-300' : 'hover:bg-blue-500 focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 bg-blue-300 dark:bg-transparent dark:border-white dark:hover:text-yellow-500 dark:hover:border-yellow-500 cursor-pointer'}`}
      onClick={isAtivo ? undefined : onClick}
    >
      {label}
    </div>
  );
});

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jurisdicionado/sistemas`,
  );
  const sistemas = await response.json();

  const paths = sistemas.map(({ slug }: SistemaDTO) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jurisdicionado/sistemas/${context.params?.slug}`,
  );
  const sistema = await response.json();

  return {
    props: {
      sistema,
    },
    revalidate: 1,
  };
};
