const ContactForm = () => {
    return (
        <div className="contactForm">
            <p className="title">Conatct Form</p>
            <p>Fill out this form and we'll get in touch with you soon</p>
            <form action="https://formspree.io/f/meqnloaa">
                <label htmlFor="fname"></label>
                <input type="text" id='fname' placeholder='First Name' name="fname" required />

                <label htmlFor="lname"></label>
                <input type="text" id='lname' placeholder='Last Name' name="lname" required />

                <label htmlFor="phone"></label>
                <input type="tel" id='phone' placeholder='Phone' name="phone" required />

                <label htmlFor="email"></label>
                <input type="email" id='email' placeholder='Email' name="email" />

                <label htmlFor="message"></label>
                <textarea name="message" id="message"  placeholder='Your Message' required></textarea>
            </form>
            <button className="formButton button" type="submit">Submit</button>
        </div>
    );
}

export default ContactForm;