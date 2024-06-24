import './about.css'

const activityImages = [
    { src: "../../images/content/park1.jpg", alt: "Test 1" },
    { src: "../../images/content/park1.jpg", alt: "Test 2" },
    { src: "../../images/content/park1.jpg", alt: "Test 3" },
];

export default function About() {
    return (
        <div className='about-container'>
            <section className='about-section'>
                <div className='about-img'>
                    <img
                        className="about-img-activity"
                        src={activityImages[0].src}
                        alt={activityImages[0].alt} />
                </div>
                <div className='about-text'>
                    <p>Activity 1</p>
                </div>
            </section>
            <section className='about-section'>
                <div className='about-text'>
                    <p>Activity 2</p>
                </div>
                <div className='about-img'></div>
            </section>
            <section className='about-section'>
                <div className='about-img'></div>
                <div className='about-text'>
                    <p>Activity 3</p>
                </div>
            </section>
        </div>
    )
}