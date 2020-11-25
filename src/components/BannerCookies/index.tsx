/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';

const BannerCookies: React.FC = () => {
  const [cookies, setCookie] = useCookies(['autorizouCookies']);

  const [aceito, setAceito] = useState(() => {
    return cookies.autorizouCookies;
  });

  const handleAceitar = useCallback(() => {
    setAceito(true);
    setCookie('autorizouCookies', true, {
      path: '/',
    });
  }, [setCookie]);

  return (
    <Transition show={!aceito}>
      <div className="fixed bottom-0 inset-x-0 pb-5 z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-24">
          <div className="p-2 rounded-lg bg-blue-primary shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex-1 flex items-center">
                <span className="hidden sm:flex p-2 rounded-lg bg-blue-500">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </span>
                <p className="mx-3 font-medium text-white">
                  Este site armazena dados como cookies para habilitar a
                  funcionalidade necessária, incluindo análises, segmentação e
                  personalização.{' '}
                  <Link href="/politica-de-privacidade">
                    <a className="text-blue-300">Política de Privacidade</a>
                  </Link>
                </p>
              </div>
              <div className="mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <button
                  type="button"
                  onClick={handleAceitar}
                  className="flex items-center justify-center w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default BannerCookies;
