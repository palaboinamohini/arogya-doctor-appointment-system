import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ContactUs = () => (
    <>
        <Navbar />
        <div className='contact-bg-container'>
            <h1 className='contact-heading'>CONTACT US</h1>
            <div className='contact-description-container'>
                <img src="https://prescripto.vercel.app/assets/contact_image-IJu_19v_.png" alt="about-us" className='contact-img' />
                <div className='contact-description-container2'>
                    <h2 className='our-office-heading'>OUR OFFICE</h2>
                    <p className='contact-description'>00000 West Hyderabad <br /> Madhapur 000, Telangana, India</p>
                    <p className='contact-description2'>Tel: (000) 000-0000 <br />Email: xyzstackdev@gmail.com</p>
                    <h2 className='our-office-heading'>CAREERS AT AROGYA</h2>
                    <p className='contact-description'>Learn more about our teams and job openings.</p>
                    <button type="button" className='contact-us-btn'>Explore Jobs</button>
                </div>
            </div>
        </div>
        <Footer />
    </>
)

export default ContactUs

