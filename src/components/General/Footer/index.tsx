/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import Link from 'next/link';
import MenuLink from '../../../dtos/MenuLinkDTO';
import { useApi } from '../../../hooks/useApi';

interface SocialLinks {
  icon: IconType | any;
  link: string;
}

interface MenuProps {
  data: {
    tree: MenuLink[];
  };
}

const Footer: React.FC = () => {
  const socialIconCSS = 'ml-6 text-gray-400 transition duration-200';
  const socialLinks: SocialLinks[] = [
    {
      icon: (
        <FiYoutube
          className={`${socialIconCSS} hover:text-red-700 focus:text-red-700`}
          size={28}
        />
      ),
      link: 'https://www.youtube.com/channel/UCTysjH6OfRhnonCY76RxbGg',
    },
    {
      icon: (
        <FiFacebook
          className={`${socialIconCSS} hover:text-blue-800 focus:text-blue-800`}
          size={28}
        />
      ),
      link: 'https://www.facebook.com/TCEAP/',
    },
    {
      icon: (
        <FiTwitter
          className={`${socialIconCSS} hover:text-blue-400 focus:text-blue-400`}
          size={28}
        />
      ),
      link: '',
    },
    {
      icon: (
        <FiInstagram
          className={`${socialIconCSS} hover:text-blue-700 focus:text-blue-700`}
          size={28}
        />
      ),
      link: 'https://www.instagram.com/tceamapa/',
    },
  ];

  const [menu, setMenu] = useState<MenuLink[]>([]);

  const { data }: MenuProps = useApi(
    '/api/menus/portal-do-jurisdicionado-footer',
  );

  useEffect(() => {
    data && setMenu(data.tree);
  }, [data]);

  return (
    <>
      <div className="bg-white dark:bg-black-apoio container mx-auto" id="__rodape">
        <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            {menu.map((item) => (
              <div key={item.titulo} className="px-5 py-2">
                <Link key={item.id} href={item.url}>
                  <a className="leading-6 text-gray-500 dark:text-gray-400 hover:text-blue-primary dark:hover:text-yellow-primary">
                    {item.titulo}
                  </a>
                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{social.link}</span>
                {social.icon}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-center leading-6 text-gray-400">
              &copy; 2020 Tribunal de Contas do Estado do Amapá
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
