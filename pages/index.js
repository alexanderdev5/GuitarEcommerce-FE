import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import styles from "../styles/Curso.module.css"
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, entradas }) {

  return (
    <Layout pagina="Inicio"
    guitarra={guitarras[1]}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso} />
      <section className='contenedor'>
      <ListadoBlog 
        entradas={entradas}
      />
      </section>
     

    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/api/guitarras?sort=precio:desc&populate=imagen`;
  const urlCursos = `${process.env.API_URL}/api/cursos1?populate=imagen`;
  const urlBlog = `${process.env.API_URL}/api/blogs?filters[id][$in][0]=1&filters[id][$in][1]=2&filters[id][$in][2]=3&populate=imagen`
  

  const [restGuitarras, restCursos, restBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ]);

  const [guitarras, curso, entradas] = await Promise.all([
    restGuitarras.json(),
    restCursos.json(),
    restBlog.json()
  ]);

  return {
    props: {
      guitarras: guitarras.data,
      curso: curso.data,
      entradas: entradas.data
    },
  };
}
