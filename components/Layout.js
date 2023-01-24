import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina, guitarra}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content={`Learn more about ${pagina}`} />
        <meta property="og:title" content={`${pagina} - My Clothing Store`} />
        <meta
          property="og:description"
          content={`Learn more about ${pagina}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/guitar.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header guitarra={guitarra} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra : null
}

export default Layout;
