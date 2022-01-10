import { ReactComponent as GihubIcon } from 'assets/img/github.svg';
import './style.css';
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DsMovie</h1>
                    <a href='https://github.com/matheus-feliz'>
                        <div className="dsmovie-contact-container">
                            <GihubIcon />
                            <p className="dsmovie-contact-link">/matheus-feliz</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;