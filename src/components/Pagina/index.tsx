import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export type PaginaProps = {
  title: string;
  topTitle?: string;
  parents?: Array<{
    name: string;
    link?: string;
  }>;
  noBg?: boolean;
  noPadding?: boolean;
  maxWidth?: boolean;
  children?: React.ReactNode
};

const breadCrumbLinkItemCss =
    'text-blue-primary dark:text-yellow-primary font-semibold hover:text-blue-apoio';

const Pagina: React.FC<PaginaProps> = (props) => {
  return (<>
    <Head>
      <title>TCE-AP | {props.title}</title>
    </Head>
    <div className="bg-blue-primary h-36">
      <div className="container xl:w-4/6 mx-auto px-4 sm:px-0">
        <h1 className="text-white font-semibold leading-normal text-3xl pt-12">
          {props.topTitle ?? props.title}
        </h1>
      </div>
    </div>
    <div className="px-4 sm:px-0">
      <nav className="container xl:w-4/6 mx-auto px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 shadow -mt-4">
        <ul className="flex flex-row flex-wrap">
          <li>
            <Link href="/">
              <div className="cursor-pointer text-blue-primary dark:text-yellow-primary font-semibold hover:text-blue-600">
                Página Inicial
              </div>
            </Link>
          </li>
          {props.parents && props.parents.map((parent, idx) => (
            <React.Fragment key={idx}>
              <li className="mx-2 text-gray-400 dark:text-gray-300">•</li>
              <li className="text-gray-500 dark:text-gray-200 font-semibold">
                {parent.link ? (
                  <Link href={parent.link}>
                    <a className={breadCrumbLinkItemCss}>{parent.name}</a>
                  </Link>
                ) : (
                  parent.name
                )}
              </li>
            </React.Fragment>
          ))}
          <li className="mx-2 text-gray-400 dark:text-gray-300">•</li>
          <li className="text-gray-500 dark:text-gray-200 font-semibold">{props.title}</li>
        </ul>
      </nav>
    </div>
    <div className={`container ${props.maxWidth ? 'xl:w-full' : 'xl:w-4/6'} mx-auto px-4 sm:px-0`}>
      <div id="__conteudo" className={'dark:text-white' + (props.noPadding ? '' : ' py-8')
        + (props.noBg ? '' : ' bg-white dark:bg-gray-700')}
      >
        {props.children}
      </div>
    </div>
  </>);
};

export default React.memo(Pagina);
