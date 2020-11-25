/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import PaginaDTO from '../../dtos/PaginaDTO';

interface PaginaProps {
  pagina: PaginaDTO;
}

export default function ControleExternoSlug({
  pagina,
}: PaginaProps): JSX.Element {
  const { titulo, conteudo, slug } = pagina;

  const breadCrumbLinkItemCss =
    'text-blue-primary dark:text-gray-400 dark:hover:text-yellow-primary font-semibold hover:text-blue-apoio transition-colors duration-100';

  return (
    <div className="dark:bg-gray-900">
      <Head>
        <>
          <title>TCE-AP | Jurisdicionado - {titulo}</title>
          <meta property="fb:app_id" content="410440873247656" />
          <meta content="Jurisdicionado - TCE-AP" property="og:site_name" />
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_WEB_URL}/controle-externo/${slug}`}
          />
          <meta property="og:title" content={titulo} />
          <meta
            property="og:description"
            content="Acesse nossos sistemas e projetos exclusivos para o Jurisdicionado do TCE-AP"
          />
          <meta
            property="og:image"
            content="https://jurisdicionado.tce.ap.gov.br/images/fachada.jpg"
          />
          <meta property="og:type" content="article" />
          <meta property="og:image:width" content="1100" />
          <meta property="og:image:height" content="620" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@TCE_APoficial" />
          <meta property="twitter:title" content={titulo} />
          <meta property="twitter:creator" content="@TCE_APoficial" />
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
          <li className="mx-2 text-gray-500">•</li>
          <li className="text-gray-500 font-semibold">Controle Externo</li>
          <li className="mx-2 text-gray-500">•</li>
          <li className="text-gray-500 font-semibold">{titulo}</li>
        </ul>
      </nav>
      <main>
        <div className="pt-5 px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-blue-apoio dark:text-gray-500 font-semibold tracking-wide uppercase">
              Controle Externo
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-yellow-primary sm:text-4xl sm:leading-10">
              {titulo}
            </h1>
          </div>
          <div
            className="prose prose-lg text-gray-500 dark:text-gray-400 mx-auto mt-2 text-justify"
            dangerouslySetInnerHTML={{ __html: conteudo }}
          />
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/paginas`,
  );
  const paginas = await response.json();

  const paths = paginas.map(({ slug }: PaginaDTO) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/paginas/${context.params?.slug}`,
  );
  const pagina = await response.json();

  return {
    props: {
      pagina,
    },
    revalidate: 1,
  };
};
