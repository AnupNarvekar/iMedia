const ContactForm = () => {
    return (
        <div className="contactForm">
            <p className="title">Conatct Form</p>
            <p>Fill out this form and we'll get in touch with you soon</p>
            <form action="">
                <label htmlFor="fname"></label>
                <input type="text" id='fname' placeholder='First Name' required />

                <label htmlFor="lname"></label>
                <input type="text" id='lname' placeholder='Last Name' required />

                <label htmlFor="phone"></label>
                <input type="tel" id='phone' placeholder='Phone' required />

                <label htmlFor="email"></label>
                <input type="email" id='email' placeholder='Email' />

                <label htmlFor="message"></label>
                <textarea name="message" id="message"  placeholder='Your Message' required></textarea>
            </form>
            <button className="formButton button" type="submit">Submit</button>
        </div>
    );
}

export default ContactForm;