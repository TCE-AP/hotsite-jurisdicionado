/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState, useMemo } from 'react';
import Pagina from '../components/Pagina';
import NormaDTO from '../dtos/NormaDTO';
import NormaLegislacaoDTO from '../dtos/NormaLegislacaoDTO';
import { Utils } from '../utils/utils';

type Grupo = {
  ano: string;
  items: NormaLegislacaoDTO[];
};

const NormasPrestacaoDeContas: React.FC = () => {
  const [normas, setNormas] = useState<NormaDTO[]>([]);
  const [normasFiltradas, setNormasFiltradas] = useState<NormaDTO[]>([]);
  const [exercicios, setExercicios] = useState<number[]>([]);
  const [filtro, setFiltro] = useState('');
  const [data, setData] = useState<NormaLegislacaoDTO[] | null>(null);

  useEffect(() => {
    Utils.fetchApi('api/legislacoes?pagination=true&paginate=100&prestacao_contas=true')
      .then(data => data.json())
      .then(json => {
        setData(json['data']);
      });
  }, []);

  const breadCrumbLinkItemCss =
    'text-blue-primary dark:text-gray-400 font-semibold hover:text-blue-apoio transition-colors duration-100';

  const grupos: Grupo[] | null = useMemo(() => {
    if (data === null)
      return null;

    const grupos: Grupo[] = [];
    data.forEach(next => {
      let grupo = grupos.find(g => g.ano == next.exercicio);

      if (!grupo) {
        grupo = { ano: next.exercicio, items: [] };
        grupos.push(grupo);
      }

      grupo.items.push(next);
    });

    return grupos.sort((g1, g2) => g1.ano.localeCompare(g2.ano));
  }, [data]);

  const conteudo = useMemo(() => {
    return grupos && (
      <div>
        <ol>
          {grupos.map((grupo, idx) => (
            <li key={idx}>
              <strong className="dark:text-white">Exercício {grupo.ano}</strong>
              <ul>
                {grupo.items.map((item, idx) => (
                  <li key={idx} className="bg-gray-200 dark:bg-gray-800 p-4">
                    <a href={item.arquivo} target="_blank" className="dark:text-white">{item.titulo}</a>
                    <br />
                    <p className="dark:text-gray-100" dangerouslySetInnerHTML={{ __html: item.descricao }} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    );
  }, [grupos]);

  return (
    <Pagina title="Normas sobre a Prestação de Contas" parents={[ {name: 'Control Externo'} ]}>
      <p className="prose prose-lg mx-auto text-justify">
        {conteudo}
      </p>
    </Pagina>
  );
};

export default NormasPrestacaoDeContas;
