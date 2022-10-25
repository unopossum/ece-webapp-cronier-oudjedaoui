import '../styles/globals.css'
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
    <div id="_appdiv" >
      <header>
        <p>
            <a class="anim-underline-fx" href="/" > HOME </a>    |    
            <a class="anim-underline-fx" href="/about" > ABOUT </a>    |    
            <a class="anim-underline-fx" href="/articles" > ARTICLES </a>    |    
            <a class="anim-underline-fx" href="/contacts" > CONTACTS </a>
          </p>
      </header>
          
      <Component {...pageProps} />
      <div> 
        <footer>
          Site créé par Timothée Cronier et Sami
        </footer>
      </div>
    </div>
    
  )
}

export default MyApp


/*
<header>
        <hi>Project</hi>
      </header>
      
      
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
          <a class="anim-understyle-fx"> <h3>CONTACTS &rarr;</h3> </a>
        </Link>
        <Link href="/articles">
          <a> <h3>ARTICLES &rarr;</h3> </a>
        </Link>
      </ul>
      <footer>
        Timothée Cronier and Sami
      </footer>
*/