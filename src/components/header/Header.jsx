import Logo from '../logo/Logo'

export default function Header ({ onLinkClick }) {
    return (
        <header>
            <nav>
                <Logo height="100px"></Logo>
                <a onClick={() => onLinkClick('home')}>Home</a>
                <a onClick={() => onLinkClick('about')}>About</a>
                <a onClick={() => onLinkClick('gallery')}>Gallery</a>
                <a onClick={() => onLinkClick('video')}>Video</a>
                <a onClick={() => onLinkClick('contact')}>Contact</a>
                <img src="./images/facebook.png" height="100"/>
            </nav>
        </header>
    )
}