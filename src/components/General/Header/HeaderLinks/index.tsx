import React, { useEffect, useState } from 'react';
import MenuTree from '../../../../dtos/MenuTreeDTO';
import { useApi } from '../../../../hooks/useApi';
import HeaderLinkItem from './HeaderLinkItem';

const HeaderLinks: React.FC = () => {
  const [menuTree, setMenuTree] = useState<MenuTree | null>(null);

  const { data, error } = useApi('/api/menus/portal-do-jurisdicionado-header');

  useEffect(() => {
    setMenuTree(data);
  }, [data]);

  return (
    <nav className="grid gap-4 lg:gap-0 lg:flex md:space-x-3 xl:space-x-5">
      {menuTree && menuTree.tree.map((item) => {
        if (item.id === 4) // id 4 = PÁGINA INICIAL
          return null;
        return <HeaderLinkItem key={item.id} item={item} />;
      })}
    </nav>
  );
};

export default HeaderLinks;
