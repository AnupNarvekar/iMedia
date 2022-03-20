import images from './../Img/images'

const ServicesCards = ({ cards }) => {
    return (
        <div className="serviceCards_container">
            {cards.map((card, index) => (
                <div className={`serviceCard ServiceCard${card.id}`} key={card.id}>
                    <div className="imageSection"> <img src={card.image} alt="" />  </div>
                    <div className="textSection">
                        <p className="cardTitle">{card.title}</p>
                        <ul className="serviceTags">
                            {card.tags.map((tag) => (
                                <li> {tag} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            <div className="serviceCard customService" >
                <div className="imageSection"> <img src={images.servicesCard_img.customService} alt="custom service image" />  </div>
                <div className="textSection">
                    <p className="cardTitle">Custom Service</p>
                    <p className='text'>Want a custom service ? We got you covered! </p>
                    <a href='#contactUs' className='button'>Contact Us</a>
                </div>
            </div>
        </div>
    );
}

export default ServicesCards;