import {Link} from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6"
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Home = () => (
    <>
        <Navbar />
        <div className='home-bg-container'>
            <div className='home-card-container'>
                <div className='home-card-about'>
                    <h1 className='home-card-heading'>Book Appointment<br/> With Trusted Doctors</h1>
                    <div className='home-card-description'>
                        <img src="https://prescripto.vercel.app/assets/group_profiles-BCL6AVF5.png" alt="doctorGroup" className='home-card-icon' />
                        <p className='home-card-des-para'>
                            Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.
                        </p>
                    </div>
                    <Link to="/book-appointment" className="home-book-appointment-btn">
                        <p className='home-book-appointment-text'>Book Appointment</p>
                        <FaArrowRightLong />
                    </Link>
                    <img src="https://res.cloudinary.com/dijdcmpa1/image/upload/v1753997143/1000_F_265958166_YTEL6wHpfxnPlN9nNYxL7UKHiOWCln59-removebg-preview_ek9pnx.png" alt="doctorImg" className='home-img1' />
                </div>
                <img src="https://res.cloudinary.com/dijdcmpa1/image/upload/v1753997143/1000_F_265958166_YTEL6wHpfxnPlN9nNYxL7UKHiOWCln59-removebg-preview_ek9pnx.png" alt="doctorImg" className='home-img2' />
            </div>
            <div className="why-choose-arogya">
                <h1 className='why-choose-arogya-heading'>Why Choose Arogya?</h1>
                <img src="https://www.docsapp.in/assets/images/optimized/Group-54797_2x.webp" alt="whyChooseArogya" className='why-choose-arogya-img' />
                <img src="https://www.docsapp.in/assets/images/optimized/Group-54796_2x.webp" alt="whyChooseImg" className='why-choose-arogya-img' />
            </div>
        </div>
        <Footer />
    </>
)

export default Home 
