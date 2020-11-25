import React from 'react';
import { useFontSize } from '../../hooks/fontSize';
import ContatoForm from './ContatoForm';

const ContatoSection: React.FC = () => {
  const { fontSizeText } = useFontSize();

  return (
    <div
      id="contato"
      className="bg-gray-50 dark:bg-gray-900 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              className={`${
                fontSizeText === 'text-base'
                  ? 'text-2xl sm:text-3xl'
                  : fontSizeText
              } leading-8 font-extrabold text-blue-primary dark:text-yellow-primary sm:leading-9`}
            >
              Contatos e Ouvidoria
            </h3>
            <div className="mt-3">
              <p
                className={`${
                  fontSizeText === 'text-base' ? 'text-lg' : fontSizeText
                } leading-7 text-gray-500`}
              >
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
                <div className="ml-3 leading-6 text-gray-500">
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
                <div className="ml-3 leading-6 text-gray-500">
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
  );
};

export default ContatoSection;
