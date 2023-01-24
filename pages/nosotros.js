import Image from 'next/image'
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div>
          <div className={styles.contenido}>
            <Image width={600} height={450} src="/img/nosotros.jpg" alt="imagen sobre nosotros" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget convallis lorem. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nullam tempor dictum odio, id euismod arcu
              maximus ut. Nam in justo nulla. Nam a interdum lorem, et fermentum
              eros. Donec rutrum hendrerit tortor ut dictum. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Nulla sagittis sit amet tortor ac efficitur. Sed
              fringilla rutrum justo at laoreet. Quisque sed lectus gravida,
              efficitur arcu ut, varius erat. Quisque a odio urna. Integer odio
              justo, commodo at imperdiet et, scelerisque ut elit. Mauris
              vehicula in lorem in aliquam. Aenean velit libero, finibus ac
              , urna neque pulvinar lectus, vitae aliquam mi ex
              at sem. Etiam imperdiet facilisis molestie.ermentum faucibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget convallis lorem. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nullam tempor dictum odio, id euismod arcu
              maximus ut. Nam in justo nulla. Nam a interdum lorem, et fermentum
              eros. Donec rutrum hendrerit tortor ut dictum. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              ximus, urna neque pulvinar lectus, vitae aliquam mi ex
              at sem. Etiam imperdiet facilisis molestie. Nunc aliquet ante sit
              amet libero interdum tempor. Suspendisse quis nibh arcu. Morbi
              dignissim mauris purus, nec fringilla nibh fermentum faucibus.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
