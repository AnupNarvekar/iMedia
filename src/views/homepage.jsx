import { useState } from 'react';
import ServicesCards from './../components/servicesCards';
import images from './../Img/images';
import NavBar from './../components/navBar'
import ContactForm from '../components/ContactForm';
import Phone from './phone';

const Homepage = () => {

    const [cards, setCards] = useState([
        {
            image: `${images.servicesCard_img.webDesign}`,
            title: 'Web Design & Development',
            tags: [
                'UIUX Design',
                'Website Development',
                'Website Performance Optimisation',
                'Website Multi Device Optimization',
                'E-commerce website'
            ],
            id: 1
        },

        {
            image: `${images.servicesCard_img.seo}`,
            title: `SEARCH ENGINE OPTIMIZATION`,
            tags: [
                `Complete SEO Audit`,
                `Website Meta`,
                `SEO Keyword Research`,
                `Website Content Optimization`,
                `Google Analytics & Search Console setup `,
                `& integration`,
                `Off Page SEO + On Page SEO`
            ],
            id: 2

        },

        {
            image: `${images.servicesCard_img.googleAds}`,
            title: `GOOGLE ADS`,
            tags: [
                `Search Ads`,
                `Remarketing Ads`,
                `Shopping Ads`,
                `Display Ads`
            ],
            id: 3
        },

        {
            image: `${images.servicesCard_img.digitalBrandPresence}`,
            title: `DIGITAL BRAND PRESENCE`,
            tags: [
                `Campaign Ideas`,
                `Page Follower Growth`,
                `Creative Designs collaterals`,
                `Social Media Plan`
            ],
            id: 4
        },

        {
            image: `${images.servicesCard_img.brandManagement}`,
            title: `BRAND MANAGEMENT (DIGITAL)`,
            tags: [
                `Facebook, Instagram, LinkedIn, Twitter & Pinterest - Posts + Stories`,
                `Bloggers & Influencer Marketing`,
                `YouTube - Videos Update`
            ],
            id: 5
        },

        {
            image: `${images.servicesCard_img.paidMarketing}`,
            title: `DIGITAL PAID MARKETING`,
            tags: [
                `Brand Awareness Campaigns`,
                `Website Conversion Campaigns`,
                `Lead Generation Campaigns`,
                `Website Traffic Campaigns`,
                `Call/WhatsApp Campaigns`
            ],
            id: 6
        },

        {
            image: `${images.servicesCard_img.contentMarketing}`,
            title: `CONTENT MARKETING`,
            tags: [
                `Content idea's & Activity generation`,
                `Photography & Video marketing content`,
                `Micro content generation`
            ],
            id: 7
        },

        {
            image: `${images.servicesCard_img.branding}`,
            title: `BRANDING`,
            tags: [
                `Logo Design, Mockup & Branding`,
                `Video & GIF - Editing & Production`,
                `Social Media Artwork Design`
            ],
            id: 8
        },

        {
            image: `${images.servicesCard_img.competatorAnalysis}`,
            title: `COMPETITOR ANALYSIS`,
            tags: [
                `Digital growth monitoring`,
                `Social media plan monitoring`,
                `Engagement insight`
            ],
            id: 9
        },

        {
            image: `${images.servicesCard_img.emailMarketing}`,
            title: `EMAIL & SMS MARKETING`,
            tags: [
                `Newsletters`,
                `Bulk SMS Campaigns`,
                `Email Marketing Conversion Funnels`,
                `Email Marketing Campaigns`
            ],
            id: 10
        },

        {
            image: `${images.servicesCard_img.virtualTour}`,
            title: `VIRTUAL 360 TOURS`,
            tags: [
                `Video-based virtual tours`,
                `Photospheres (360° Photos)`
            ],
            id: 11
        },
    ])

    const [contactDetails, setContactDetails] = useState({
        phone: '7666811887',
        email: 'info@insightsmedia.com',
        address: 'Prabhu residency opp. Socooro Panchayat, Porvorim, Goa',
        googleMapsLink: 'https://goo.gl/maps/zUeFuQ3k9QAtDzLj9',

        socials: {
            linkedIn: 'https://www.linkedin.com/in/insights-media-b4a624234/',
            twitter: 'https://www.google.co.in',
            instagram: 'https://www.instagram.com/insightsmedia.in/',
            facebook: 'https://m.facebook.com/Insights-Media-112562324666676',
            whatsapp: `https://wa.me/917666811887/?lang=en`
        }
    })


    return (
        <div className="home">
            <NavBar />
            <section className="homescreen" id='homescreen'>
                <div className="homeContainer">
                    <div className="textContainer">
                        <h1>Skyrocket your leads with our expertise</h1>
                        <p>We at Insights Media help you grow your business using the endless opportunities online. Contact us to learn more about taking your business/brand to the next level.</p>
                    </div>
                    <img src={images.hereImage} alt="Hero" />
                    <a href='#contactUs' className='button'>Contact Us</a>
                </div>
            </section>

            <section className="aboutUs" id='aboutUs'>
                <div className="aboutUs_Container">
                    <p className="sectionTitle">About Us</p>
                    <img src={images.logo} alt="Insights Media Logo" />
                    <div className="text">
                        <p className="title">{'We are a diverse team of strategists, marketers, designers & developers'}</p>
                        <p className="subTitle">Insights Media is one of the top, full-serve Digital Marketing Agency based in Goa. We take pride in building your brand with full responsibility. We don't only offer services, but solutions too</p>
                    </div>
                </div>
            </section>

            <section className="services" id='services'>
                <div className="servicesContainer">
                    <p className="sectionTitle">Services</p>
                    <div className="cardsContainer">
                        <ServicesCards cards={cards} />
                    </div>
                </div>
            </section>

            <section className="contactUs" id='contactUs'>
                <div className="contactContainer">
                    <p className="sectionTitle">Contact Us</p>
                    <div className="contents">
                        <Phone />
                        <p className='or'> ---------------- OR ----------------</p>
                        < ContactForm />
                    </div>
                </div>
            </section>

            <section className="footer">
                <div className="footerContainer">
                    <footer>
                        <div className="socials">
                            <p className="title">Socials</p>
                            <div className="icons">
                                <a href={contactDetails.socials.linkedIn} target="_blank" className="linkedIn"> <img src={images.footer.linkedin} alt="linkedin" /></a>
                                <a href={contactDetails.socials.twitter} target="_blank" className="twitter"> <img src={images.footer.twitter} alt="twitter" /></a>
                                <a href={contactDetails.socials.instagram} target="_blank" className="insta"> <img src={images.footer.insta} alt="insta" /></a>
                                <a href={contactDetails.socials.facebook} target="_blank" className="facebook"> <img src={images.footer.facebook} alt="facebook" /></a>
                                <a href={contactDetails.socials.whatsapp} target="_blank" className="whatsapp"> <img src={images.footer.whatsapp} alt="whatsapp" /></a>
                            </div>
                        </div>

                        <div className="contact">
                            <p className="title">Contact</p>
                            <div className="contactItemsConatiner">
                                <a className="phone contactItems" href={`tel:${contactDetails.phone}`} target="_blank">
                                    <img src={images.footer.phone} alt="phone" />
                                    <p> {contactDetails.phone} </p>
                                </a>
                                <a className="email contactItems" href={`mailto:${contactDetails.email}`} target="_blank">
                                    <img src={images.footer.email} alt="email" />
                                    <p> {contactDetails.email} </p>
                                </a>
                                <a className="address contactItems" href={contactDetails.googleMapsLink} target="_blank">
                                    <img src={images.footer.home} alt="address" />
                                    <p> {contactDetails.address} </p>
                                </a>
                            </div>
                        </div>
                        <p className="copyright">{`Copyrighted © ${new Date().getFullYear()} | All rights reserved`}</p>

                    </footer>
                </div>
            </section>

        </div>
    );
}

export default Homepage;