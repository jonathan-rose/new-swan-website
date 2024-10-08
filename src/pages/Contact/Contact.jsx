import './contact.css'

export default function Contact() {
    return (
        <div class="contact-container">
            <section class="contact-section" id="contact-info">
                <div id="contact-items">
                    <span id="heading-span">
                        <h1 class="contact-heading">Contact Us</h1>
                    </span>
                    {/* <span class="contact-span">
                        <i class="fa-solid fa-mobile-screen"></i>
                        <p>01934 123 456</p>
                    </span> */}
                    <span class="contact-span">
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:info@swanwsm.oeg">info@swanwsm.org</a>
                    </span>
                    <span class="contact-span" id="address-block">
                        <i class="fa-solid fa-location-dot"></i>
                        <span id="address-text">
                            <p>South Weston Activity Network</p>
                            <p>For All Healthy Living Centre</p>
                            <p>68 Lonsdale Avenue</p>
                            <p>Weston-super-Mare</p>
                            <p>BS23 3SJ</p>
                        </span>
                    </span>
                </div>
            </section>
            <section class="contact-section" id="map-section">
                <h1 class="contact-heading">Visit Us</h1>
                <iframe
                    title="Healthy Living Centre Map"
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8384.868256735324!2d-2.965799349809938!3d51.33253169405425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f8c7dbb4decd%3A0xcdf90b4376839da1!2sFor%20All%20Healthy%20Living%20Centre!5e0!3m2!1sen!2suk!4v1727536295858!5m2!1sen!2suk"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
        </div>
    )
}
