import Head from 'next/head';
import React from 'react';

const VlibrasComponent: React.FC = () => {
  return (
    <>
      <Head>
        <script defer src="/scripts/vlibras.js" />;
      </Head>
      <div id="vlibras" />
    </>
  );
};

export default VlibrasComponent;
