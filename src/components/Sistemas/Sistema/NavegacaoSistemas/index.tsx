/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import SistemaDTO from '../../../../dtos/SistemaDTO';
import { useApi } from '../../../../hooks/useApi';

interface NavegacaoSistemasProps {
  slug: string;
}

const NavegacaoSistemas: React.FC<NavegacaoSistemasProps> = ({ slug }) => {
  const [open, setOpen] = useState(false);

  const [sistemas, setSistemas] = useState<SistemaDTO[]>([]);
  const { data } = useApi('/api/jurisdicionado/sistemas');

  useEffect(() => {
    setSistemas(data);
  }, [data]);

  const toggleOpen = useCallback(() => setOpen(!open), [open]);
  return (
    <>
      <div className="hidden lg:block sticky top-0 pt-10">
        <h3 className="text-blue-apoio dark:text-yellow-primary font-semibold text-xl mb-2 pl-2 border-l-4 border-blue-apoio dark:border-gray-600">
          Sistemas e Fiscalizações
        </h3>
        {sistemas &&
          sistemas.map((sist) =>
            sist.slug === slug ? (
              <div
                key={sist.id}
                className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-800 dark:text-gray-400 rounded-md bg-gray-100 dark:bg-gray-800 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
              >
                <span>
                  {sist.sigla} - {sist.titulo}
                </span>
              </div>
            ) : (
              sist.slug !== slug && (
                <Link key={sist.id} href={sist.slug}>
                  <a
                    key={sist.id}
                    className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-800 hover:bg-gray-50 dark:hover:text-gray-400 dark:hover:bg-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <span>
                      {sist.sigla} - {sist.titulo}
                    </span>
                  </a>
                </Link>
              )
            ),
          )}
      </div>
      <div className="lg:hidden pt-5 mx-4">
        <button
          type="button"
          onClick={toggleOpen}
          className="font-semibold text-xl py-2 px-4 flex w-full justify-between bg-blue-600 text-white rounded-lg"
        >
          Sistemas e Fiscalizações
          <FiChevronDown
            size={18}
            className={`${
              open ? 'transform rotate-180' : ''
            } my-auto transition duration-200`}
          />
        </button>
        <Transition
          show={open}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
          className="pt-2 shadow mx-2 mb-2 rounded-b px-2"
        >
          {sistemas &&
            sistemas.map((sist) =>
              sist.slug === slug ? (
                <div
                  key={sist.id}
                  className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-800 rounded-md bg-gray-100 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                >
                  <span>{sist.titulo}</span>
                </div>
              ) : (
                sist.slug !== slug && (
                  <Link key={sist.id} href={sist.slug}>
                    <a
                      key={sist.id}
                      className="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-800 hover:bg-gray-50 focus:outline-none focus:text-gray-800 focus:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <span>{sist.titulo}</span>
                    </a>
                  </Link>
                )
              ),
            )}
        </Transition>
      </div>
    </>
  );
};

export default NavegacaoSistemas;
