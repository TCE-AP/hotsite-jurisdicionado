/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ImAccessibility } from 'react-icons/im';
import { GiHearingDisabled } from 'react-icons/gi';
import { FaBlind, FaSitemap } from 'react-icons/fa';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useFontSize } from '../../../hooks/fontSize';
import { useTheme } from '../../../hooks/theme';
import HeaderLinks from './HeaderLinks';
import logoFull from '../../../assets/logo-com-texto.svg';

const tceUrl = process.env['NEXT_PUBLIC_TCE_URL'] ?? 'https://tceap.tc.br';

const Header: React.FC = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);

  const { fontSizeText, increaseFontSize, decreaseFontSize, normalizeFontSize } = useFontSize();

  const { theme, toggleTheme } = useTheme();

  function handleMobileMenuShow(): void {
    setMobileMenuShow(!mobileMenuShow);
  }

  const irPara = (e: React.MouseEvent, anchorId: string, fallbackAnchorId?: string) => {
    e.preventDefault();

    let element = document.getElementById(anchorId);

    if (!element) {
      if (fallbackAnchorId)
        element = document.getElementById(fallbackAnchorId);
      else
        return;
    }

    if (element) {
      const top = element.offsetTop;
      window.scrollTo(0, top);
    }
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-white leading-6">
        <div
          className={`${
            fontSizeText === 'text-base' ? 'text-sm' : fontSizeText
          } max-w-7xl px-4 sm:px-6 md:mx-auto flex flex-wrap py-1`}
        >
          <div className="flex-grow font-semibold text-gray-500 dark:text-white hidden lg:flex items-center">
            <div className="flex flex-wrap flex-col md:flex-row text-xs">
              <a href="#" className="md:w-auto" onClick={e => irPara(e, '__conteudo', '__conteudo_fallback')}>
                <span title="Shift+1">Ir Para Conteúdo [1]</span>
              </a>
              <a href="#" className="md:mx-4 md:w-auto" onClick={e => irPara(e, '__menu')}>
                <span title="Shift+2">Ir Para Menu [2]</span>
              </a>
              <a href="#" className="md:w-auto" onClick={e => irPara(e, '__rodape')}>
                <span title="Shift+3">Ir Para Rodapé [3]</span>
              </a>
            </div>
          </div>
          <div className="text-right self-center space-x-4 flex text-gray-500 dark:text-white">
            <button type="button" className="flex" onClick={increaseFontSize}>
              A+
            </button>
            <button type="button" className="flex" onClick={normalizeFontSize}>
              A
            </button>
            <button type="button" className="flex" onClick={decreaseFontSize}>
              A-
            </button>
            <a href={`${tceUrl}/paginas/acessibilidade`} className="flex">
              <ImAccessibility className="self-center" />
            </a>
            <a href={`${tceUrl}/paginas/leitor-de-tela-nvda`} className="flex">
              <FaBlind className="self-center" />
            </a>
            <a href={`${tceUrl}/paginas/vlibras-traducao-de-portugues-pra-libras`} className="flex">
              <GiHearingDisabled className="self-center" />
            </a>
            <button type="button" className="flex" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <FiSun className="self-center" />
              ) : (
                <FiMoon className="self-center" />
              )}
            </button>
            <a href={`${tceUrl}/mapa-do-site`} className="flex">
              <FaSitemap className="self-center" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="transition duration-300 shadow bg-white dark:bg-gray-700 sticky top-0 z-20" id="__menu"
      >
        <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center lg:justify-start lg:space-x-10">
          <Link href="/">
            <a className="flex">
              <img
                className="h-12 w-auto sm:h-10"
                src={logoFull}
                alt="Tribunal de Contas do Estado do Amapá"
                style={theme === 'dark' ? { filter: 'invert(1) contrast(200%)' } : {}}
              />
            </a>
          </Link>
          <div className="-mr-2 -my-2 lg:hidden">
            <button
              type="button"
              onClick={handleMobileMenuShow}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between lg:space-x-12">
            <HeaderLinks />
          </div>
        </div>

        <Transition
          show={mobileMenuShow}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute top-0 inset-x-0 z-20 p-2 transition transform origin-top-right lg:hidden">
            <div className="rounded-lg shadow-lg">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xs divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={logoFull}
                        alt="TCE-AP"
                        style={theme === 'dark' ? { filter: 'invert(1) contrast(200%)' } : {}}
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={handleMobileMenuShow}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
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
                  <div>
                    <HeaderLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Header;
