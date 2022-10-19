import '../styles/globals.css'
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
        <hi>Project</hi>
      </header>
      <Component {...pageProps} />
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h2>INDEX : </h2>
      <ul>
        <Link href="/">
          <a> <h3>HOME &rarr;</h3> </a>
        </Link>
        <Link href="/about">
          <a> <h3>ABOUT &rarr;</h3> </a>
        </Link>
        <Link href="/contacts">
          <a> <h3>CONTACTS &rarr;</h3> </a>
        </Link>
        <Link href="/articles">
          <a> <h3>ARTICLES &rarr;</h3> </a>
        </Link>
      </ul>
      <footer>
        Timothée Cronier and Sami
      </footer>
    </div>
  )
}

export default MyApp
