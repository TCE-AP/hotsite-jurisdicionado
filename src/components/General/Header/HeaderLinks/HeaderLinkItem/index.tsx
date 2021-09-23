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

export const headerLinkStyle =
    'leading-6 font-medium text-cool-gray-500 focus:outline-none transition ease-in-out duration-150 hover:text-blue-primary focus:text-blue-primary flex items-center dark:text-yellow-300';

const HeaderLinkItem: React.FC<HeaderLinkItemProps> = ({ item }) => {
  const { titulo, url, novaJanela, child } = item;

  const [open, setOpen] = useState(false);

  function handleOpenState(): void {
    setOpen(!open);
  }

  // const open = item.id === 5;

  if (child && child.length > 0) {
    return (
      <>
        <div
          className="hidden lg:block relative rounded-lg py-4"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button type="button" className={`${headerLinkStyle} group inline-flex items-center`}>
            <span>{titulo}</span>
            <FiChevronDown
              className={`${
                open ? 'rotate-180' : ''
              } h-5 w-5 transition ease-in-out duration-150 transform text-cool-gray-500 dark:text-yellow-300 group-hover:text-blue-primary group-focus:text-blue-primary dark:group-hover:text-yellow-200 dark:group-focus:text-yellow-200`}
            />
          </button>
          <Transition
            show={open}
            /*enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"*/
          >
            <div className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 sm:px-0 lg:max-w-3xl">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative flex flex-col bg-white dark:bg-gray-700 p-2">
                  {child.map((subItem, idx) => (
                    <React.Fragment key={idx}>
                      <HeaderLinkSubItem item={subItem} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div className="relative rounded-lg lg:hidden">
          <button
            type="button"
            onClick={handleOpenState}
            className={`${headerLinkStyle} group inline-flex items-center`}
          >
            <span>{titulo}</span>
            <FiChevronDown
              className={`${
                open ? 'rotate-180' : ''
              } h-5 w-5 transition ease-in-out duration-150 transform text-cool-gray-500 group-hover:text-blue-primary group-focus:text-blue-primary dark:group-hover:text-yellow-200 dark:group-focus:text-yellow-200`}
            />
          </button>
          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <div className="absolute -ml-4 sm:w-screen lg:max-w-2xl rounded-lg">
              <div className="rounded-lg shadow-xs overflow-hidden">
                <div className="bg-white dark:bg-gray-700 shadow-2xl z-20 relative grid px-8 py-2 lg:grid-cols-2">
                  {child.map((subItem) => (
                    <HeaderLinkSubItem key={subItem.id} item={subItem} mobile />
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
    <a href={url} target="_blank" rel="noreferrer noopener" className={headerLinkStyle}>
      {titulo}
    </a>
  ) : (
    <Link href={url}>
      <a className={headerLinkStyle}>{titulo}</a>
    </Link>
  );
};

export default HeaderLinkItem;
