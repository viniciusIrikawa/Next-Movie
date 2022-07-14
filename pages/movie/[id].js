import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width='200px' />
        <h1> Movie: {info.title} </h1>
        <p> Overview: {info.overview}</p>


        <div className={styles.search}>
          <Link href='/search'> Go to search </Link>
        </div>

    

      </main>
    </div>
  )
}

export async function getServerSideProps(context){

  const response = await fetch(`http://localhost:3000/api/movie/${context.params.id}`)
  const data = await response.json();
    console.log('json:', data)

  return {
    props: {
      info: data.info
    }
  }

}