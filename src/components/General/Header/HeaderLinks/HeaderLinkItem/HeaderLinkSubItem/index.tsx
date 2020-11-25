/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { FiFileText } from 'react-icons/fi';
import { MenuTreeItem } from '../../../../../../dtos/MenuTreeDTO';

interface HeaderLinkSubItemProps {
  item: MenuTreeItem;
}

const HeaderLinkSubItem: React.FC<HeaderLinkSubItemProps> = ({ item }) => {
  const { id, titulo, url, descricao, novaJanela } = item;

  return novaJanela === 1 ? (
    <a
      key={id}
      target="_blank"
      href={url}
      rel="noopener noreferrer"
      className="hover:bg-gray-200 dark:hover:bg-gray-900 -m-3 p-3 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150"
    >
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-primary text-white sm:h-12 sm:w-12 ">
        <FiFileText size={24} />
      </div>
      <div className="space-y-1">
        <p className="text-gray-900 dark:text-yellow-primary text-base leading-6 font-medium">
          {titulo}
        </p>
        <p className="text-sm leading-5 text-gray-400">{descricao}</p>
      </div>
    </a>
  ) : (
    <Link key={id} href={`/${url}`}>
      <a className="hover:bg-gray-200 dark:hover:bg-gray-900 -m-3 p-3 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-primary text-white sm:h-12 sm:w-12 ">
          <FiFileText size={24} />
        </div>
        <div className="space-y-1">
          <p className="text-gray-900 dark:text-yellow-primary text-base leading-6 font-medium">
            {titulo}
          </p>
          <p className="text-sm leading-5 text-gray-400">{descricao}</p>
        </div>
      </a>
    </Link>
  );
};

export default HeaderLinkSubItem;
