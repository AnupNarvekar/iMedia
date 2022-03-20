import images from './../Img/images'

const Phone = () => {
    return (
        <div className="phoneContainer">
            <div className="phone">
                <img src={images.phone} alt="phone" />
                <a href='https://wa.me/917666811887/?lang=en' target='_blank' className="whatsappBtn button">WhatsApp Us</a>
            </div>
        </div>
    );
}

export default Phone;