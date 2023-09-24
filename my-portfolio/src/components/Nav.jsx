import {Link} from  "react-scroll";
import {useState} from "react";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)
   
    
    const toggleHamburger = () => {
        setIsOpen(prev => !prev)
    }

    const closeNavLinks = () => {
        if(window.innerWidth <= 700){
            setIsOpen(false)
        }
    }

    return(
        <section className="nav">
        <div className="nav-section set-space">
        <div className="nav-logo">
            <img className="my-logo" src='my-logo1.png'/>
        </div>
        <div className={isOpen? 'open-menu-active' : 'close-menu-active'} onClick={toggleHamburger}>
            <div className="hamburger-menu"></div>
        </div>
        <div className={`nav-links ${isOpen? 'open-menu-active' : ''}`}>
          <Link
          className='nav-items'
          to='home'
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeNavLinks}
          >
          Home
          </Link>
          <Link
          className='nav-items'
          to='about'
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={closeNavLinks}
          >
          About
          </Link>
          <Link
          className='nav-items'
          to='portfolio'
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={closeNavLinks}
          >
          Portfolio
          </Link>
          <Link
          className='nav-items'
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeNavLinks}
          >
          Contact
          </Link>
        </div>
        </div>
        </section>
    )
}
export default Nav