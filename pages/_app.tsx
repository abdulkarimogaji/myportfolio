import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [history, setHistory] = useState<[string, string]>(["/", "/"]);

  useEffect(() => {
    setHistory((prev) => [prev[1], pathname]);
  }, [pathname]);
  return (
    <>
      <Head>
        <title>Abdulkarim Ogaji</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Component
        {...pageProps}
        currentPath={history[1]}
        previousPath={history[0]}
      />
      <Script id="handle-navbar-scroll">
        {`const navbar = document.querySelector('.navbar');
          window.onscroll = () => {
              if (window.scrollY > 50) {
                  navbar.classList.add('nav-active');
              } else {
                  navbar.classList.remove('nav-active');
              }
          };`}
      </Script>
      <Script id="analytics-script">
        {`// for links
              document.querySelectorAll("a").forEach((tag) => {
                tag.addEventListener("click", () => {
                  try {
                    fetch(
                      "https://abdulkarim-analytics.herokuapp.com/analytics",
                      {
                        headers: [["Content-Type", "application/json"]],
                        method: "POST",
                        body: JSON.stringify({
                          type: "[link clicked]",
                          source: "portfolio page",
                          description: "The link -"+  tag.href +"- was clicked",
                        }),
                      }
                    );
                  } catch (err) {
                    console.log(err);
                  }
                });
              })`}
      </Script>
    </>
  );
}

export default MyApp;
