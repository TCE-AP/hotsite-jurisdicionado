import React from 'react';
import Noticia from './Noticia';
import NoticiaDTO from '../../dtos/NoticiaDTO';

const Noticias: React.FC = () => {
  const noticias: NoticiaDTO[] = [
    {
      titulo: 'Mingau Solidário',
      imagem:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      conteudo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      data: '01 de Agosto de 2020',
    },
    {
      titulo: 'Doações de Sextas Básicas',
      imagem:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      conteudo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      data: '01 de Agosto de 2020',
    },
    {
      titulo: 'Outra Ação',
      imagem:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      conteudo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      data: '01 de Agosto de 2020',
    },
  ];

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-blue-primary sm:text-4xl sm:leading-10">
            Nossas Ações
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {noticias.map(({ titulo, imagem, conteudo, data }) => (
            <Noticia
              key={titulo}
              titulo={titulo}
              imagem={imagem}
              conteudo={conteudo}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noticias;
