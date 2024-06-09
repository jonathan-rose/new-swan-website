import './contact.css'

export default function Contact() {
    return (
        <div class="contact-container">
            <section class="contact-section" id="contact-info">
                <div id="contact-items">
                    <span id="heading-span">
                        <h1 class="contact-heading">Contact Us</h1>
                    </span>
                    <span class="contact-span">
                        <i class="fa-solid fa-mobile-screen"></i>
                        <p>01934 123 456</p>
                    </span>
                    <span class="contact-span">
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:info@swanwsm.oeg">info@swanwsm.org</a>
                    </span>
                    <span class="contact-span" id="address-block">
                        <i class="fa-solid fa-location-dot"></i>
                        <span id="address-text">
                            <p>Line One</p>
                            <p>Line Two</p>
                            <p>Line Three</p>
                            <p>Line Four</p>
                            <p>Line Five</p>
                        </span>
                    </span>
                </div>
            </section>
            <section class="contact-section" id="map-section">
                <h1 class="contact-heading">Visit Us</h1>
                <iframe
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.8532092287664!2d-2.96828892313459!3d51.332219723485466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f8c7dbb4decd%3A0xcdf90b4376839da1!2sFor%20All%20Healthy%20Living%20Centre!5e0!3m2!1sen!2suk!4v1709495151720!5m2!1sen!2suk"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
        </div>
    )
}
