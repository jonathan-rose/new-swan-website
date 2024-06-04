export default function Header ({ onLinkClick }) {
    return (
        <header>
            <nav>
                <a onClick={() => onLinkClick('home')}>Home</a>
                <a onClick={() => onLinkClick('about')}>About</a>
                <a onClick={() => onLinkClick('contact')}>Contact</a>
            </nav>
        </header>
    )
}