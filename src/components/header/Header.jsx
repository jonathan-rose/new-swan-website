import Logo from '../logo/Logo'

export default function Header({ onLinkClick }) {
    return (
        <header>
            <div className='banner'>
                <div className='banner-item'>
                    <a onClick={() => onLinkClick('home')}>
                        <Logo></Logo>
                    </a>
                </div>
                <div className='banner-item'>
                    <h1>South Weston Activity Network</h1>
                </div>
                <div className='banner-item'>
                    <a href="https://www.facebook.com/SWAN.WSM">
                        <img id="facebook" src="./images/facebook.png"></img>
                    </a>
                </div>
            </div>
            <nav>
                <a onClick={() => onLinkClick('home')}>Home</a>
                <a onClick={() => onLinkClick('about')}>About</a>
                <a onClick={() => onLinkClick('gallery')}>Gallery</a>
                <a onClick={() => onLinkClick('videos')}>Videos</a>
                <a onClick={() => onLinkClick('contact')}>Contact</a>
                {/* <a href='https://www.facebook.com/swan.wsm/'>Facebook</a> */}
            </nav>
        </header>
    )
}