import { NavLink } from 'react-router-dom'
import Logo from '../logo/Logo'

export default function Header() {
    return (
        <header>
            <div className='banner'>
                <div className='banner-item'>
                    <NavLink to="/">
                        <Logo></Logo>
                    </NavLink>
                </div>
                <div className='banner-item'>
                    <h1>South Weston Activity Network</h1>
                </div>
                <div className='banner-item'>
                    <a href="https://www.facebook.com/SWAN.WSM" target="_blank" rel="noopener noreferrer">
                        <img id="facebook" src="./images/facebook.png" alt="Facebook logo"></img>
                    </a>
                </div>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                {/* <NavLink to="/about">About</NavLink> */}
                {/* <NavLink to="/gallery">Gallery</NavLink> */}
                <NavLink to="/media">Media</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {/* <a href='https://www.facebook.com/swan.wsm/' target="_blank" rel="noopener noreferrer">Facebook</a> */}
            </nav>
        </header>
    )
}