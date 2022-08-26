/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useMemo } from 'react';
import Pagina from '../../components/Pagina';

const NormasPrestacaoDeContas: React.FC = () => {
  const conteudo = useMemo(() => {
    return (
      <div>
        <h3>MONITORAMENTO DAS UNIDADES DE CONSERVAÇÃO ESTADUAIS DO AMAPÁ</h3>

        <ul>
          <li>
              <a target="_blank" href="https://app.tce.ap.gov.br/storage/Area do Jurisdicionado/Responsabilidade Socioambiental/Fiscalizacao/Índice de Implementação e de Gestão de Áreas Protegidas - INIDMAPA 2013.pdf">Índice de Implementação e de Gestão de Áreas Protegidas - INIDMAPA 2013</a>
          </li>
          <li>
            <a target="_blank" href="https://app.tce.ap.gov.br/storage/Area do Jurisdicionado/Responsabilidade Socioambiental/Fiscalizacao/Índice de Implementação e de Gestão de Áreas Protegidas - INIDMAPA 2019.png">Índice de Implementação e de Gestão de Áreas Protegidas - INIDMAPA 2019</a>
          </li>
          <li>
            <a target="_blank" href="https://app.tce.ap.gov.br/storage/Area do Jurisdicionado/Responsabilidade Socioambiental/Fiscalizacao/Comparativo INDIMAPA da Gestão das UCs de 2013 a 2019.png">COMPARATIVO INDIMAPA 2013 a 2019</a>
          </li>
        </ul>

        <h3>FISCALIZAÇÃO DAS UNIDADES DE CONSERVAÇÃO ESTADUAIS DO AMAPÁ</h3>

        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-6/12 flex justify-center">
            <a
              className=""
              href="https://app.tce.ap.gov.br/storage/Area do Jurisdicionado/Responsabilidade Socioambiental/Fiscalizacao/Relatório Final Auditoria Operacional UCs 2013.pdf"
              target="_blank"
            >
                <img src="https://app.tce.ap.gov.br/storage/Area do Jurisdicionado/Responsabilidade Socioambiental/Fiscalizacao/socioambiental-2.png" alt="Relatório de auditoria operacional" />
            </a>
          </div>
          <div className="w-full md:w-6/12 flex justify-center">
            <a
              className=""
              href="https://app.tce.ap.gov.br/storage/Area do Jurisdicionado/Responsabilidade Socioambiental/Fiscalizacao/Relatório de Auditoria Operacional UCs 2019.pdf"
              target="_blank"
            >
                <img src="https://app.tce.ap.gov.br/storage/Area do Jurisdicionado/Responsabilidade Socioambiental/Fiscalizacao/socioambiental-1.png" alt="Unidades de conservação estaduais do Amapá" />
            </a>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <Pagina title="Responsabilidade Socioambiental - Fiscalização">
      <div className="prose prose-lg mx-auto">
        {conteudo}
      </div>
    </Pagina>
  );
};

export default NormasPrestacaoDeContas;
