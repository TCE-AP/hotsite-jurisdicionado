import React from 'react';
import Head from 'next/head';

import Sistemas from '../components/Sistemas';
import ContatoSection from '../components/ContatoSection';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>TCE-AP | Jurisdicionado</title>
      </Head>
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative lg:z-10 md:pt-12 pb-8 bg-white dark:bg-black-apoio sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute dark:text-black-apoio right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-blue-primary dark:text-yellow-primary sm:text-5xl sm:leading-none md:text-6xl ">
                  <span className="text-gray-700 dark:text-white ">
                    Portal do{' '}
                  </span>
                  <br className="xl:hidden" />
                  Jurisdicionado
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://www.tce.ap.gov.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-600 bg-blue-600 dark:bg-yellow-primary hover:bg-blue-apoio dark:hover:bg-yellow-500 focus:outline-none focus:border-blue-700 dark:focus:border-yellow-600 focus:shadow-outline-blue dark:focus:shadow-outline-yellow transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Acesse nosso site
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/fachada.jpg"
            alt="Entrada do Tribunal de Contas do Estado do Amapá"
          />
        </div>
      </div>
      <div id="sistemas" className="py-12 bg-white dark:bg-gray-800 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-blue-600 dark:text-gray-400 font-semibold tracking-wide uppercase ">
              Acesse nossos
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-primary dark:text-yellow-primary sm:text-4xl sm:leading-10">
              Sistemas e Fiscalizações
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <Sistemas />
        </div>
      </div>
      <ContatoSection />
    </>
  );
};

export default Home;
