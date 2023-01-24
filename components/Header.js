import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router'

const Header = ({ guitarra }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <Image
              priority="true"
              width={400}
              height={100}
              src="/img/logo.png"
              alt="Imagen logo"
            />
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <Image src="/img/carrito.png" width={30} height={25} alt="Imagen carrito"/>
            </Link>
          </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo} >
            <h2>Modelo {guitarra && guitarra?.attributes?.nombre}</h2>
            <p>{guitarra && guitarra?.attributes?.descripcion}</p>
            <p className={styles.precio}>${guitarra && guitarra?.attributes?.precio}</p>
            <Link href={`/guitarras/${guitarra.attributes.url}`} className={styles.enlace} >
              Ver Producto
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && ( 
        <div className={styles.guitarra}>
        <Image  src={`/img/guitarra.png`} alt="imagen header" width={500} height={1200} />
        </div>

      )}

    </header>
  );
};

export default Header;
