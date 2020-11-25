import React from 'react';

const LinksUteis: React.FC = () => (
  <div className="container mx-auto text-center">
    <h2 className="text-2xl leading-8 font-extrabold text-blue-primary sm:text-3xl sm:leading-9">
      Links Úteis
    </h2>
    <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
      TCE-AP
    </p>
    <div className="flex flex-wrap justify-center mt-4 items-center space-y-2">
      <div className="w-full sm:w-1/5">
        <a
          href="https://portal.tcu.gov.br/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="/images/parceria/image4.png"
            alt="Logomarca Tribunal de Contas da União"
          />
        </a>
      </div>
      <div className="w-full sm:w-1/5">
        <a
          href="https://www.atricon.org.br"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="/images/parceria/image5.png"
            className=""
            alt="Logomarca Atricon"
          />
        </a>
      </div>
      <div className="w-full sm:w-1/5">
        <a
          href="https://portal.ap.gov.br"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="/images/parceria/image1.png"
            alt="Logomarca do Estado do Amapá"
          />
        </a>
      </div>
      <div className="w-full sm:w-1/5">
        <a
          href="http://www.mpap.mp.br"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="/images/parceria/image2.png"
            alt="Logomarca do Ministério Público do Estado do Amapá"
          />
        </a>
      </div>
    </div>
  </div>
);

export default LinksUteis;
