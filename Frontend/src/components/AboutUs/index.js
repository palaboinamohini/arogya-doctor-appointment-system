import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

const AboutUs = () => (
    <>
        <Navbar />
        <div className='about-bg-container'>
            <h1 className='about-heading'>ABOUT US</h1>
            <div className='about-description-container'>
                <img src="https://prescripto.vercel.app/assets/about_image-MG9zrc7b.png" alt="about-us" className='about-img' />
                <div>
                    <p className='about-description'>Welcome to Arogya, your trusted partner in managing your healthcare needs conveniently and efficiently. At Arogya, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                    <p className='about-description'>Arogya is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Arogya is here to support you every step of the way.</p>
                    <h2 className='our-vision-heading'>Our Vision</h2>
                    <p className='about-description'>Our vision at Arogya is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
            </div>
            <div className="about-why-choose-arogya">
                <h1 className='about-why-choose-arogya-heading'>Why Choose Arogya?</h1>
                <img src="https://www.docsapp.in/assets/images/optimized/Group-54797_2x.webp" alt="whyChooseArogya" className='about-why-choose-arogya-img' />
                <img src="https://www.docsapp.in/assets/images/optimized/Group-54796_2x.webp" alt="whyChooseImg" className='about-why-choose-arogya-img' />
            </div>
        </div>
        <Footer />
    </>
)

export default AboutUs
