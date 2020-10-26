/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import * as Scroll from 'react-scroll';
import Link from 'next/link';

import {
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiArrowUp,
} from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import logoSimples from '../assets/logo-simples-sm.svg';
import logoComTexto from '../assets/logo-com-texto.svg';
import Transition from '../components/General/Transition';
import ContatoForm from '../components/ContatoForm';
import Noticias from '../components/Noticias';
import { useApi } from '../hooks/useApi';
import SistemaDTO from '../dtos/SistemaDTO';

interface SocialLinks {
  icon: IconType | any;
  link: string;
}

const socialIconCSS = 'ml-6 text-gray-400 transition duration-200';

const socialLinks: SocialLinks[] = [
  {
    icon: (
      <FiYoutube
        className={`${socialIconCSS} hover:text-red-700 focus:text-red-700`}
        size={28}
      />
    ),
    link: 'https://www.youtube.com/channel/UCTysjH6OfRhnonCY76RxbGg',
  },
  {
    icon: (
      <FiFacebook
        className={`${socialIconCSS} hover:text-blue-800 focus:text-blue-800`}
        size={28}
      />
    ),
    link: 'https://www.facebook.com/TCEAP/',
  },
  {
    icon: (
      <FiTwitter
        className={`${socialIconCSS} hover:text-blue-400 focus:text-blue-400`}
        size={28}
      />
    ),
    link: '',
  },
  {
    icon: (
      <FiInstagram
        className={`${socialIconCSS} hover:text-blue-700 focus:text-blue-700`}
        size={28}
      />
    ),
    link: 'https://www.instagram.com/tceamapa/',
  },
];
interface MenuLinkItem {
  nome: string;
  link: string;
}

const menuLinks: MenuLinkItem[] = [
  {
    nome: 'Início',
    link: '/#inicio',
  },
  {
    nome: 'Ações',
    link: '/#acoes',
  },
  {
    nome: 'Legislações',
    link: '/#legislacao',
  },
  {
    nome: 'Orientações',
    link: '/#orientacoes',
  },
  {
    nome: 'Contato',
    link: '/#contato',
  },
];

const Home: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sistemas, setSistemas] = useState<SistemaDTO[]>([]);

  const scroll = Scroll.animateScroll;

  const { data, error } = useApi('/api/jurisdicionado/sistemas');

  function toggleMobileMenu(): void {
    setMobileMenu(!mobileMenu);
  }

  useEffect(() => {
    setSistemas(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>TCE-AP | Jurisdicionado</title>
      </Head>
      <div id="inicio" className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/#" aria-label="Home">
                      <img
                        src={logoComTexto}
                        alt="Logomarca TCE-AP"
                        width="200"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        id="main-menu"
                        aria-label="Main menu"
                        aria-haspopup="true"
                        onClick={toggleMobileMenu}
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4">
                  {menuLinks.map((item) => (
                    <a
                      key={item.nome}
                      href={item.link}
                      className="font-medium mr-8 text-gray-500 hover:text-blue-primary transition duration-150 ease-in-out"
                    >
                      {item.nome}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <Transition
              show={mobileMenu}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md">
                  <div
                    className="rounded-lg bg-white shadow-xs overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="main-menu"
                  >
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={logoSimples}
                          alt="Logomarca simples do TCE-AP"
                        />
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                          aria-label="Close menu"
                          onClick={toggleMobileMenu}
                        >
                          <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      {menuLinks.map((item) => (
                        <a
                          key={item.nome}
                          href={item.link}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-primary focus:outline-none focus:text-white focus:bg-blue-primary transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          {item.nome}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-blue-primary sm:text-5xl sm:leading-none md:text-6xl">
                  <span className="text-gray-700"> Portal do </span>
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
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-apoio focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
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
      <div id="acoes">
        <Noticias />
      </div>
      <div id="sistemas" className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Acesse nossos
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-primary sm:text-4xl sm:leading-10">
              Sistemas e Fiscalizações
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              {sistemas &&
                sistemas.map(
                  ({ id, capa, titulo, slug, descricaoClean, sigla }) => (
                    <li key={id} className="mt-10 md:mt-0">
                      <Link href={`/sistemas/${slug}`}>
                        <a className="flex">
                          {capa && (
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center h-36 w-36">
                                <img
                                  src={capa}
                                  alt={titulo}
                                  className="rounded shadow-md"
                                />
                              </div>
                            </div>
                          )}
                          <div className="ml-4">
                            <h4 className="text-lg leading-6 font-medium text-blue-primary">
                              {titulo} - {sigla}
                            </h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                              {descricaoClean}
                            </p>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ),
                )}
            </ul>
          </div>
        </div>
      </div>
      <div id="contato" className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-2xl leading-8 font-extrabold text-blue-primary sm:text-3xl sm:leading-9">
                Contato
              </h2>
              <div className="mt-3">
                <p className="text-lg leading-7 text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-base leading-6 text-gray-500">
                    <p>+55 (96) 2101-4700</p>
                    <p className="mt-1">
                      Funcionamento Segunda à Sexta - 7:30 às 13:30
                    </p>
                    <p className="mt-1">
                      Atendimento de Protocolo Segunda à Sexta - 7:30 às 17:30
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-base leading-6 text-gray-500">
                    <p>support@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContatoForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-2xl leading-8 font-extrabold text-blue-primary sm:text-3xl sm:leading-9">
          Links Úteis
        </h2>
        <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
          TCE-AP
        </p>
        <div className="flex flex-wrap justify-center mt-4 items-center space-y-2">
          <div className="w-full sm:w-1/5">
            <a
              href="https://portal.tcu.gov.br/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/images/parceria/image4.png"
                alt="Logomarca Tribunal de Contas da União"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/5">
            <a
              href="https://www.atricon.org.br"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/images/parceria/image5.png"
                className=""
                alt="Logomarca Atricon"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/5">
            <a
              href="https://portal.ap.gov.br"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/images/parceria/image1.png"
                alt="Logomarca do Estado do Amapá"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/5">
            <a
              href="http://www.mpap.mp.br"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/images/parceria/image2.png"
                alt="Logomarca do Ministério Público do Estado do Amapá"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            {menuLinks.map((item) => (
              <div key={item.nome} className="px-5 py-2">
                <a
                  key={item.nome}
                  href={item.link}
                  className="text-base leading-6 text-gray-500 hover:text-blue-primary"
                >
                  {item.nome}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{social.link}</span>
                {social.icon}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2020 Tribunal de Contas do Estado do Amapá
            </p>
          </div>
        </div>
      </div>
      <a
        href="/#"
        onClick={() => scroll.scrollToTop()}
        className="fixed right-0 bottom-0 mr-2 sm:mr-10 mb-5 p-4 rounded-full transition duration-200 text-blue-primary hover:text-blue-apoio bg-white shadow-lg"
      >
        <FiArrowUp className="animate-bounce stroke-current" size={18} />
      </a>
    </>
  );
};

export default Home;
