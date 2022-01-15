import { ReactComponent as GithubIcon } from 'assets/imgs/icon_github.svg';
import './styles.css';

function Navbar() {
   return (
      <header>
         <nav className="container">
            <div className="dsmovie-nav-content">
               <a href="/">
                  <h1>DSMovie - Classificação de Filmes</h1>
               </a>
               <a href="https://github.com/crspereira/sds6">
                  <div className="dsmovie-contact-content">
                     <GithubIcon />
                     <p className="dsmovie-contact-link">/crspereira</p>
                  </div>
               </a>
            </div>
         </nav>
      </header>
   ); 
}

export default Navbar;