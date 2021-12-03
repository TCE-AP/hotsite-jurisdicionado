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

export default function SistemaSlug({ sistema }: SistemaProps): JSX.Element {
  const {
    titulo,
    slug,
    capa,
    descricaoClean,
    videos,
    secoes,
    perguntas,
    link,
    descricao,
  } = sistema;

  const [loadedSistema, setLoadedSistema] = useState<SistemaDTO>();

  const { data, error } = useApi(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jurisdicionado/sistemas/${slug}`,
  );

  useEffect(() => {
    setLoadedSistema(data);
  }, [data]);

  const breadCrumbLinkItemCss =
    'text-blue-primary dark:text-gray-400 font-semibold hover:text-blue-apoio transition-colors duration-100';

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
            {loadedSistema ? loadedSistema.titulo : titulo}
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
                  {loadedSistema ? (
                    loadedSistema.titulo
                  ) : (
                    <div className="mx-auto w-64">
                      <Skeleton />
                    </div>
                  )}
                </h1>
              </div>
              {loadedSistema ? (
                <img
                  src={loadedSistema.capa}
                  className="mx-auto rounded-lg h-24 md:h-44"
                  alt={`logo ${loadedSistema.titulo}`}
                />
              ) : (
                <div className="mx-auto w-2/5">
                  <Skeleton height="10rem" />
                </div>
              )}

              {loadedSistema ? (
                (loadedSistema.link !== '-' && loadedSistema.link !== 'none') && (
                  <div className="my-5 sm:flex justify-center">
                    <div className="rounded-md shadow">
                      <a
                        href={loadedSistema.link}
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
              {loadedSistema ? (
                <div
                  className="prose prose-lg text-gray-500 dark:text-gray-400 mx-auto mt-2 text-justify"
                  dangerouslySetInnerHTML={{ __html: loadedSistema.descricao }}
                />
              ) : (
                <div className="mx-auto w-2/3">
                  <Skeleton count={10} />
                </div>
              )}

              {loadedSistema && loadedSistema.secoes.length > 0 && (
                <SecaoSection secoes={loadedSistema.secoes} />
              )}
              {loadedSistema && loadedSistema.videos.length > 0 && (
                <VideoSection videos={loadedSistema.videos} />
              )}
            </div>
          </div>
        </div>
        {loadedSistema && loadedSistema.perguntas.length > 0 && (
          <PerguntaSection perguntas={loadedSistema.perguntas} />
        )}
      </main>
    </div>
  );
}

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
