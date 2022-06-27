
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const [history, setHistory] = useState<[string, string]>(["/", "/"])

  useEffect(() => {
    setHistory(prev => [prev[1], pathname])
  }, [pathname])
  return (
    <>
    <Head>
        <title>Abdulkarim Ogaji</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Component {...pageProps} currentPath={history[1]} previousPath={history[0]} />
    </>
  );
}

export default MyApp;
