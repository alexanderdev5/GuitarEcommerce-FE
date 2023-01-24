import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, nombre, precio, url } = guitarra.attributes;
  return (
    <div className={styles.guitarra}>
      <Image
        width={180}
        height={350}
        src={imagen && imagen.data.attributes.url}
        alt={`imagen Guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  );
};

export default Guitarra;
