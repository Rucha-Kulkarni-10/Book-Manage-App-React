import '../components/Header.css';
import { Link } from 'react-router-dom';

function Header()
{
    return(
        <>
             <div className='header'>
                  <ul>
                      <Link to="/">
                        <li>Home</li>
                      </Link>

                    {/* it will reload the page */}
                      {/* <a href="/about">
                         <li>About</li>
                      </a> */}

                      <Link to='/about'>
                          <li>About</li>
                      </Link>

                      <Link to="/contact">
                         <li>Contact</li>
                      </Link>
                  </ul>
             </div>
        </>
    );
}

export default Header;