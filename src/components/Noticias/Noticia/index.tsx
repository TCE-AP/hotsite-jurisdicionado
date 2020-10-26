/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import NoticiaDTO from '../../../dtos/NoticiaDTO';
import Transition from '../../General/Transition';

const Noticia: React.FC<NoticiaDTO> = ({ titulo, imagem, conteudo, data }) => {
  const [open, setOpen] = useState(false);

  function toggle(): void {
    setOpen(!open);
  }

  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={imagem} alt={titulo} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-blue-primary">
                {titulo}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {conteudo}
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex flex-wrap text-sm leading-5 text-gray-500 w-full">
              <div className="mr-auto">{data}</div>
              <button
                className="px-4 py-1 ml-auto rounded shadow-xs bg-gray-100 text-gray-500"
                type="button"
                onClick={() => toggle()}
              >
                ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? '' : 'invisible'
        } fixed z-20 bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center`}
      >
        <Transition
          show={open}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity">
            <div
              role="banner"
              className="absolute inset-0 bg-gray-500 opacity-75"
              onClick={() => toggle()}
            />
          </div>
        </Transition>
        <Transition
          show={open}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="relative h-screen pt-10">
            <div
              className="bg-white h-11/12 overflow-auto mx-auto rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="sm:flex sm:items-start">
                <div>
                  <div className="text-lg max-w-prose mx-auto mb-6">
                    <p className="text-base text-center leading-6 text-blue-apoio font-semibold tracking-wide uppercase">
                      Ações
                    </p>
                    <h3 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-blue-primary sm:text-4xl sm:leading-10">
                      {titulo}
                    </h3>
                    <figure>
                      <img
                        className="w-full rounded-lg"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                        alt=""
                        width="1310"
                        height="873"
                      />
                      <figcaption>
                        Sagittis scelerisque nulla cursus in enim consectetur
                        quam.
                      </figcaption>
                    </figure>
                  </div>
                  <div className="prose prose-lg text-gray-500 mx-auto">
                    <p>
                      Faucibus commodo massa rhoncus, volutpat.{' '}
                      <strong>Dignissim</strong> sed{' '}
                      <strong>eget risus enim</strong>. Mattis mauris semper sed
                      amet vitae sed turpis id. Id dolor praesent donec est.
                      Odio penatibus risus viverra tellus varius sit neque erat
                      velit. Faucibus commodo massa rhoncus, volutpat. Dignissim
                      sed eget risus enim. <a href="/#">Mattis mauris semper</a>{' '}
                      sed amet vitae sed turpis id.
                    </p>
                    <ul>
                      <li>Quis elit egestas venenatis mattis dignissim.</li>
                      <li>
                        Cras cras lobortis vitae vivamus ultricies facilisis
                        tempus.
                      </li>
                      <li>
                        Orci in sit morbi dignissim metus diam arcu pretium.
                      </li>
                    </ul>
                    <p>
                      Quis semper vulputate aliquam venenatis egestas sagittis
                      quisque orci. Donec commodo sit viverra aliquam porttitor
                      ultrices gravida eu. Tincidunt leo, elementum mattis
                      elementum ut nisl, justo, amet, mattis. Nunc purus, diam
                      commodo tincidunt turpis. Amet, duis sed elit interdum
                      dignissim.
                    </p>
                    <h3>Outra Chamada</h3>
                    <p>
                      Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                      consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                      euismod vitae interdum mauris enim, consequat vulputate
                      nibh. Maecenas pellentesque id sed tellus mauris, ultrices
                      mauris. Tincidunt enim cursus ridiculus mi. Pellentesque
                      nam sed nullam sed diam turpis ipsum eu a sed convallis
                      diam.
                    </p>
                    <blockquote>
                      <p>
                        Sagittis scelerisque nulla cursus in enim consectetur
                        quam. Dictum urna sed consectetur neque tristique
                        pellentesque. Blandit amet, sed aenean erat arcu morbi.
                      </p>
                    </blockquote>
                    <p>
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                      eget risus enim. Mattis mauris semper sed amet vitae sed
                      turpis id. Id dolor praesent donec est. Odio penatibus
                      risus viverra tellus varius sit neque erat velit.
                    </p>

                    <h3>Mais uma chamada</h3>
                    <p>
                      Purus morbi dignissim senectus mattis{' '}
                      <a href="/#">adipiscing</a>. Amet, massa quam varius orci
                      dapibus volutpat cras. In amet eu ridiculus leo sodales
                      cursus tristique. Tincidunt sed tempus ut viverra
                      ridiculus non molestie. Gravida quis fringilla amet eget
                      dui tempor dignissim. Facilisis auctor venenatis varius
                      nunc, congue erat ac. Cras fermentum convallis quam.
                    </p>
                    <p>
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                      eget risus enim. Mattis mauris semper sed amet vitae sed
                      turpis id. Id dolor praesent donec est. Odio penatibus
                      risus viverra tellus varius sit neque erat velit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    onClick={toggle}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    Fechar
                  </button>
                </span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Noticia;
