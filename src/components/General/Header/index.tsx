/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';
import HeaderLinks from './HeaderLinks';
import logoFull from '../../../assets/logo-com-texto.svg';
import logoFullBranco from '../../../assets/logo-com-texto-branco.svg';
import { useFontSize } from '../../../hooks/fontSize';
import { useTheme } from '../../../hooks/theme';

const Header: React.FC = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);

  const {
    fontSizeText,
    increaseFontSize,
    decreaseFontSize,
    normalizeFontSize,
  } = useFontSize();

  const { theme, toggleTheme } = useTheme();

  function handleMobileMenuShow(): void {
    setMobileMenuShow(!mobileMenuShow);
  }

  return (
    <>
      <div className="bg-gray-100 leading-6">
        <div
          className={`${
            fontSizeText === 'text-base' ? 'text-sm' : fontSizeText
          } max-w-7xl px-4 sm:px-6 md:mx-auto flex flex-wrap py-5`}
        >
          <div className="flex-grow font-semibold text-gray-500 uppercase">
            <div className="flex flex-wrap flex-col md:flex-row">
              <a className="md:w-auto" href="tel:+559621014700">
                TEL +55 (96) 2101-4700
              </a>
              <a href="/" className="md:mx-4 md:w-auto">
                Acesso a Informação
              </a>
              <a href="/" className="md:w-auto">
                Transparência
              </a>
            </div>
          </div>
          <div className="text-right self-center space-x-2 flex text-gray-500">
            <button type="button" className="flex" onClick={increaseFontSize}>
              <sup>(1)</sup>A+
            </button>
            <button type="button" className="flex" onClick={normalizeFontSize}>
              <sup>(2)</sup>A
            </button>
            <button type="button" className="flex" onClick={decreaseFontSize}>
              <sup>(3)</sup>A-
            </button>
            <button type="button" className="flex" onClick={toggleTheme}>
              <sup>(4)</sup>
              {theme === 'dark' ? (
                <FiSun className="self-center" />
              ) : (
                <FiMoon className="self-center" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="transition duration-300 shadow bg-white dark:bg-black-apoio relative z-20">
        <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center py-6 lg:justify-start lg:space-x-10">
          <Link href="/">
            <a className="flex">
              {theme === 'dark' ? (
                <img
                  className="h-8 w-auto sm:h-10"
                  src={logoFullBranco}
                  alt="Tribunal de Contas do Estado do Amapá"
                />
              ) : (
                <img
                  className="h-8 w-auto sm:h-10"
                  src={logoFull}
                  alt="Tribunal de Contas do Estado do Amapá"
                />
              )}
            </a>
          </Link>
          <div className="-mr-2 -my-2 lg:hidden">
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
          <div className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden">
            <div className="rounded-lg shadow-lg">
              <div className="bg-white dark:bg-black-apoio rounded-lg shadow-xs divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      {theme === 'light' ? (
                        <img
                          className="h-8 w-auto"
                          src={logoFull}
                          alt="TCE-AP"
                        />
                      ) : (
                        <img
                          className="h-8 w-auto"
                          src={logoFullBranco}
                          alt="TCE-AP"
                        />
                      )}
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={handleMobileMenuShow}
                        className="
                          inline-flex
                          items-center
                          justify-center
                          p-2
                          rounded-md
                          text-gray-400
                          hover:text-gray-500
                          hover:bg-gray-100
                          focus:outline-none
                          focus:bg-gray-100
                          focus:text-gray-500
                          transition
                          duration-150
                          ease-in-out"
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
