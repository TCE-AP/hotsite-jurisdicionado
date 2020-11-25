/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { Transition } from '@headlessui/react';
import HeaderLinkSubItem from './HeaderLinkSubItem';
import { MenuTreeItem } from '../../../../../dtos/MenuTreeDTO';

interface HeaderLinkItemProps {
  item: MenuTreeItem;
}

const HeaderLinkItem: React.FC<HeaderLinkItemProps> = ({ item }) => {
  const { titulo, url, novaJanela, child } = item;

  const [open, setOpen] = useState(false);

  function handleOpenState(): void {
    setOpen(!open);
  }

  if (child && child.length > 0) {
    return (
      <>
        <div
          className="relative rounded-lg hidden sm:block"
          onMouseEnter={handleOpenState}
          onMouseLeave={handleOpenState}
        >
          <button
            type="button"
            className="hover:text-blue-primary focus:text-blue-primary dark:focus:text-yellow-primary text-gray-500 dark:hover:text-yellow-primary group inline-flex items-center leading-6 font-medium focus:outline-none transition ease-in-out duration-150"
          >
            <span>{titulo}</span>
            <FiChevronDown
              className={`${
                open ? 'rotate-180' : ''
              } h-5 w-5 transition ease-in-out duration-150 transform text-gray-500 group-hover:text-blue-primary group-focus:text-blue-primary dark:group-hover:text-yellow-primary dark:group-focus:text-yellow-primary`}
            />
          </button>
          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <div className="absolute -ml-4 pt-3 sm:w-screen lg:max-w-2xl rounded-lg">
              <div className="rounded-lg">
                <div className="bg-white ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg dark:bg-black-apoio shadow-2xl z-20 relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  {child.map((subItem) => (
                    <HeaderLinkSubItem key={subItem.id} item={subItem} />
                  ))}
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div className="relative rounded-lg sm:hidden">
          <button
            type="button"
            onClick={handleOpenState}
            className="hover:text-blue-primary focus:text-blue-primary dark:focus:text-yellow-primary text-gray-500 dark:hover:text-yellow-primary group inline-flex items-center  leading-6 font-medium focus:outline-none transition ease-in-out duration-150"
          >
            <span>{titulo}</span>
            <FiChevronDown
              className={`${
                open ? 'rotate-180' : ''
              } h-5 w-5 transition ease-in-out duration-150 transform text-gray-500 group-hover:text-blue-primary group-focus:text-blue-primary dark:group-hover:text-yellow-primary dark:group-focus:text-yellow-primary`}
            />
          </button>
          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <div className="absolute -ml-4 pt-3 sm:w-screen lg:max-w-2xl rounded-lg">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-white dark:bg-black-apoio shadow-2xl z-20 relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  {child.map((subItem) => (
                    <HeaderLinkSubItem key={subItem.id} item={subItem} />
                  ))}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </>
    );
  }

  return novaJanela === 1 ? (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="leading-6 font-medium text-gray-500 focus:outline-none transition ease-in-out duration-150 hover:text-blue-primary focus:text-blue-primary dark:focus:text-yellow-primary"
    >
      {titulo}
    </a>
  ) : (
    <Link href={url}>
      <a className="leading-6 font-medium text-gray-500 dark:hover:text-yellow-primary focus:outline-none transition ease-in-out duration-150 hover:text-blue-primary focus:text-blue-primary dark:focus:text-yellow-primary">
        {titulo}
      </a>
    </Link>
  );
};

export default HeaderLinkItem;
