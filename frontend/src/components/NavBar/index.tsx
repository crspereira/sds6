import { ReactComponent as GithubIcon } from 'assets/imgs/icon_github.svg';
import './styles.css';

function Navbar() {
   return (
      <header>
         <nav className="container">
            <div className="dsmovie-nav-content">
               <h1>DSMovie</h1>
               <a href="https://github.com/crspereira">
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