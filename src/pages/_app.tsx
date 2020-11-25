/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/tailwind.css';
import ToTop from '../components/General/ToTop';
import Footer from '../components/General/Footer';
import Header from '../components/General/Header';
import AppProvider from '../hooks';
import 'pure-react-carousel/dist/react-carousel.es.css';
import BannerCookies from '../components/BannerCookies';
import logoFull from '../assets/logo-com-texto.svg';

function MyApp({ Component, pageProps }: AppProps) {
  return process.browser ? (
    <AppProvider>
      <div id="inicio" className="dark:bg-black-apoio">
        <Head>
          <>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
              name="msapplication-TileImage"
              content="/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          </>
        </Head>
        <Header />
        <Component {...pageProps} />
        <BannerCookies />
        <Footer />
        <ToTop />
      </div>
    </AppProvider>
  ) : (
    <>
      <Head>
        <>
          <title>TCE-AP | Jurisdicionado</title>
          <meta property="fb:app_id" content="410440873247656" />
          <meta content="Jurisdicionado - TCE-AP" property="og:site_name" />
          <meta
            property="og:url"
            content="https://jurisdicionado.tce.ap.gov.br"
          />
          <meta
            property="og:title"
            content="Portal do Jurisdicionado | TCE-AP"
          />
          <meta
            property="og:description"
            content="Acesse nossos sistemas e projetos exclusivos para o Jurisdicionado do TCE-AP"
          />
          <meta content="/images/fachada.jpg" property="og:image" />
          <meta content="article" property="og:type" />
          <meta content="1100" property="og:image:width" />
          <meta content="620" property="og:image:height" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@TCE_APoficial" />
          <meta name="twitter:title" content="" />
          <meta
            name="twitter:description"
            content="Acesse nossos sistemas e projetos exclusivos para o Jurisdicionado do TCE-AP"
          />
          <meta name="twitter:creator" content="@TCE_APoficial" />
          <meta name="twitter:image" content="/images/fachada.jpg" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </>
      </Head>
      <div className="w-screen">
        <img
          src={logoFull}
          className="animate-pulse w-64 mx-auto mt-72"
          alt="Logomarca do Tribunal de Contas do Estado do Amapá"
        />
      </div>
    </>
  );
}

export default MyApp;
