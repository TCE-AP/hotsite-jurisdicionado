import Head from 'next/head';
import React from 'react';

const VlibrasComponent: React.FC = () => {
  return process.browser ? (
    <>
      <Head>
        <script defer src="/scripts/vlibras.js" />;
      </Head>
      <div id="vlibras" />
    </>
  ) : (
    <div />
  );
};

export default VlibrasComponent;
