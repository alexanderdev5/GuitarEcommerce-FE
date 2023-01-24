import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ posts }) => {
  const { contenido, imagen, publishedAt, titulo } = posts.data[0].attributes;
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            width={800}
            height={600}
            src={imagen && imagen?.data?.attributes?.url}
            alt={`Imagen entrada ${titulo}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/blogs?populate=imagen`);
  const post = await res.json();
  const paths = post.data.map((x) => ({
    params: { url: x.attributes.url },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const res = await fetch(
    `${process.env.API_URL}/api/blogs?filters[url]=${url}&populate=imagen`
  );
  const posts = await res.json();  
  return {
    props: { posts : posts },
  };
}

export default EntradaBlog;
