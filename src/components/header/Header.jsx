import Logo from '../logo/Logo'

export default function Header({ onLinkClick }) {
    return (
        <header>
            <div className='banner'>
                <div className='banner-item'>
                    <a href="Home" onClick={(e) => {e.preventDefault(); onLinkClick('home')}}>
                        <Logo></Logo>
                    </a>
                </div>
                <div className='banner-item'>
                    <h1>South Weston Activity Network</h1>
                </div>
                <div className='banner-item'>
                    <a href="https://www.facebook.com/SWAN.WSM">
                        <img id="facebook" src="./images/facebook.png" alt="Facebook logo"></img>
                    </a>
                </div>
            </div>
            <nav>
                <a href="Home" onClick={(e) => {e.preventDefault(); onLinkClick('home')}}>Home</a>
                <a href="About" onClick={(e) => {e.preventDefault(); onLinkClick('about')}}>About</a>
                {/* <a onClick={() => onLinkClick('gallery')}>Gallery</a> */}
                <a href="Videos" onClick={(e) => {e.preventDefault(); onLinkClick('videos')}}>Videos</a>
                <a href="Contact" onClick={(e) => {e.preventDefault(); onLinkClick('contact')}}>Contact</a>
                {/* <a href='https://www.facebook.com/swan.wsm/'>Facebook</a> */}
            </nav>
        </header>
    )
}