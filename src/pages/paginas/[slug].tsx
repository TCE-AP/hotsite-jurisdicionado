/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Pagina from '../../components/Pagina';
import PaginaDTO from '../../dtos/PaginaDTO';
import { agent } from '../../utils/utils';

interface PaginaProps {
  pagina: PaginaDTO;
}

export default function PaginasSlug({ pagina }: PaginaProps): JSX.Element {
  const { titulo, conteudo, publicada, slug } = pagina;
  return (
    <Pagina title={titulo}>
      <div className="relative py-4 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg dark:prose dark:prose-lg text-gray-600 dark:text-white mx-auto mt-2"
            dangerouslySetInnerHTML={{ __html: conteudo }}
          />
        </div>
      </div>
    </Pagina>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const options = { agent } as RequestInit;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/paginas`, options);
  const paginas: any[] = await response.json();

  const paths = paginas.map((pagina) => {
    return {
      params: { slug: pagina.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const options = { agent } as RequestInit;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/paginas/${slug}`, options);
  const pagina = await response.json();

  return {
    props: {
      pagina,
    },
    revalidate: 60, // 300
  };
};
