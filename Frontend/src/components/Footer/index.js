import './index.css'

const Footer = () => (
    <div className='footer-bg-container'>
        <div className='footer-about-container'>
            <div className='footer-about-us-container'>
                <div className='footer-logo-container'>
                    <img src="https://icones.pro/wp-content/uploads/2021/03/symbole-du-docteur-icone-png-vert.png" alt="WebsiteLogo" className='footer-logo' />
                    <h1 className='footer-logo-name'>Arogya</h1>
                </div>
                <div className='footer-about-items-container'>
                    <ul className='footer-items-container'>
                        <li className='footer-items'>About Us</li>
                        <li className='footer-items'>Annual Checkup</li>
                        <li className='footer-items'>Blogs</li>
                        <li className='footer-items'>Careers</li>
                    </ul>
                    <ul className='footer-items-container'>
                        <li className='footer-items'>Get a Diagnosis</li>
                        <li className='footer-items'>How it works</li>
                        <li className='footer-items'>Privacy Policy</li>
                    </ul>
                    <ul className='footer-items-container'>
                        <li className='footer-items'>Contact Us</li>
                        <li className='footer-items'>FAQs</li>
                    </ul>
                </div>
            </div>
            <div className='footer-about-us-container'>
                <h1 className='footer-items-heading'>Top Insurance</h1>
                <div className='footer-about-items-container'>
                    <ul className='footer-items-container'>
                        <li className='footer-items'>Aentha</li>
                        <li className='footer-items'>Health Plan</li>
                        <li className='footer-items'>Blue Shield</li>
                        <li className='footer-items'>Careers</li>
                    </ul>
                    <ul className='footer-items-container'>
                        <li className='footer-items'>Health Net</li>
                        <li className='footer-items'>Health Smart</li>
                        <li className='footer-items'>View More</li>
                    </ul>
                </div>
            </div>
            <div className='footer-about-us-container'>
                <h1 className='footer-items-heading'>Follow Us</h1>
                <div className='footer-icons-container'>
                    <img src="https://res.cloudinary.com/dijdcmpa1/image/upload/t_icons/set-of-square-social-media-icon-in-color-background-free-vector_ccz0lc" alt="icons" className='footer-icon' />
                </div>
            </div>
        </div>
        <hr className='footer-horizontal-line' />
        <p className='footer-items'>Copyright © 2025 xyz Tech Ltd. All Rights Reserved</p>
    </div>
)

export default Footer
