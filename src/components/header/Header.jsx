import Logo from '../logo/Logo'

export default function Header({ onLinkClick }) {
    return (
        <header>
            <div className='banner'>
                <div className='banner-item'>
                    <a onClick={() => onLinkClick('home')}>
                        <Logo height="110px"></Logo>
                    </a>
                </div>
                <div className='banner-item' id="banner-text">
                    <h1>South Weston Activity Network</h1>
                </div>
                <div className='banner-item'>
                    <a href="https://www.facebook.com/SWAN.WSM">
                        <img id="facebook" src="./images/facebook.png" height="100px"></img>
                    </a>
                </div>
            </div>
            <nav>
                <a onClick={() => onLinkClick('home')}>Home</a>
                <a onClick={() => onLinkClick('about')}>About</a>
                <a onClick={() => onLinkClick('gallery')}>Gallery</a>
                <a onClick={() => onLinkClick('video')}>Video</a>
                <a onClick={() => onLinkClick('contact')}>Contact</a>

            </nav>
        </header>
    )
}