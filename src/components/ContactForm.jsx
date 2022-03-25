import { useForm, ValidationError } from '@formspree/react';
const Form = () => {
    const [state, handleSubmit] = useForm("meqnloaa");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="fname"></label>
            <input type="text" id='fname' placeholder='First Name' name='fname' required />

            <label htmlFor="lname"></label>
            <input type="text" id='lname' placeholder='Last Name' name='lname' required />

            <label htmlFor="phone"></label>
            <input type="tel" id='phone' placeholder='Phone' name='phone' required />

            <label htmlFor="email"></label>
            <input type="email" id='email' placeholder='Email' name='email' />

            <label htmlFor="message"></label>
            <textarea name="message" id="message" placeholder='Your Message' required></textarea>

            <button className="formButton button" type="submit" disabled={state.submitting} >Submit</button>
        </form>
    );
}

const ContactForm = () => {
    return (
        <div className="contactForm">
            <p className="title">Conatct Form</p>
            <p>Fill out this form and we'll get in touch with you soon</p>
            <Form />
        </div>
    );
}

export default ContactForm;