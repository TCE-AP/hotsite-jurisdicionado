/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { useCallback } from 'react';
import { FiFile, FiFolder, FiFolderPlus, FiFolderMinus, FiExternalLink, FiDownload } from 'react-icons/fi';
import { MenuTreeItem } from '../../../../../../dtos/MenuTreeDTO';
import { usePopper } from 'react-popper';

interface HeaderLinkSubItemProps {
  item: MenuTreeItem;
  mobile?: boolean;
}

const anchorStyles = 'hover:bg-gray-200 dark:hover:bg-gray-500 flex items-center space-x-4 rounded-lg '
  + 'transition ease-in-out duration-150 p-2 cursor-pointer';
const conteudoStyles = 'flex-shrink-0 flex items-center justify-center h-5 w-5 text-blue-primary dark:text-yellow-300';

const HeaderLinkSubItem: React.FC<HeaderLinkSubItemProps> = ({ item, mobile }) => {
  const [showChildren, setShowChildren] = useState(false);

  const { id, titulo, url, descricao, novaJanela, child } = item;
  const endereco = url.startsWith('http') || url.startsWith('/') ? url : `/${url}`;
  const hasChildren = child && child.length > 0;

  const icone = hasChildren ? (
    showChildren
      ? <FiFolderMinus size={24} />
      : <FiFolderPlus size={24} />
  ) : (
    (url.endsWith('.pdf') || url.endsWith('.xls')) ? <FiDownload size={24} /> :
    novaJanela ? <FiExternalLink size={24} /> :
    <FiFile size={24} />
  );

  const conteudo = (<>
    <div className={conteudoStyles}>
      {icone}
    </div>
    <div className="space-y-1">
      <p className="text-gray-900 dark:text-white text-base leading-6 font-medium whitespace-nowrap">{titulo}</p>
    </div>
  </>);

  const onClick = useCallback((e: React.MouseEvent) => {
    if (!hasChildren)
      return;

    e.preventDefault();
    e.stopPropagation();

    setShowChildren(!showChildren);
  }, [hasChildren, showChildren]);

  if (mobile) {
    if (hasChildren) {
      if (showChildren) {
        return (
          <>
            <div
              className={anchorStyles}
              onClick={onClick}
            >
              {conteudo}
            </div>

            <div className="px-6">
              {child!.map((item, idx) => (
                <HeaderLinkSubItem key={idx} item={item} />
              ))}
            </div>
          </>
        );
      }

      return (
        <a
          onClick={onClick}
          className={anchorStyles}
        >
          {conteudo}
        </a>
      );
    }
  }

  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right-start',
    strategy: 'absolute',
  });

  if (hasChildren) {
    return (<>
      <div
        // onClick={onClick}
        onMouseEnter={() => setShowChildren(true)}
        onMouseLeave={() => setShowChildren(false)}
        ref={setReferenceElement}
      >
        <a className={anchorStyles}>
          {conteudo}
        </a>

        {showChildren && (
          <div
            className={'rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 bg-white dark:bg-gray-700'
              + (showChildren ? '' : ' hidden')}
            style={styles.popper}
            ref={setPopperElement}
            {...attributes.popper}
          >
            {child!.map((item, idx) => (
              <HeaderLinkSubItem key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    </>);
  }

  return (
    <a
      key={id}
      href={endereco}
      target={novaJanela === 1 ? '_blank' : ''}
      className={anchorStyles}
    >
      {conteudo}
    </a>
  );
};

export default HeaderLinkSubItem;
