import { Transition } from '@headlessui/react';
import React, { useCallback, useState } from 'react';
import { PerguntaDTO } from '../../../../../dtos/SistemaDTO';

interface PerguntaItemProps {
  item: PerguntaDTO;
}

const PerguntaItem: React.FC<PerguntaItemProps> = ({ item }) => {
  const { pergunta, resposta } = item;
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className="pt-6">
      <dl>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div>
            <dt className="text-lg leading-7">
              <button
                type="button"
                onClick={toggleOpen}
                className="text-left w-full flex justify-between items-start text-gray-400 dark:text-yellow-primary focus:outline-none focus:text-gray-900"
              >
                <span className="font-medium text-gray-900 dark:text-yellow-primary">
                  {pergunta}
                </span>
                <span className="ml-6 h-7 flex items-center">
                  <svg
                    className={`${
                      open && '-rotate-180'
                    } rotate-0 h-6 w-6 transform transition-all duration-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd className="mt-2 pr-12">
              <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              >
                <div
                  className="text-base leading-6 text-gray-500 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: resposta }}
                />
              </Transition>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
};

export default PerguntaItem;
