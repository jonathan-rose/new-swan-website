import './about.css'

export default function About () {
    return (
        <div className='about-container'>
            <section className='about-section'>
                <div className='about-img'></div>
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