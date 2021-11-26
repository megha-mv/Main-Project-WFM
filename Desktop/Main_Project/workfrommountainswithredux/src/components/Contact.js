import React from 'react'
import './Contact.css'
import{IoLogoFacebook,IoLogoTwitter,IoLogoLinkedin,IoLogoInstagram,IoIosMail} from 'react-icons/io'

const Contact = () => {
    return (
        <div>
            <div className="footer_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9oDkWxH2yHgQgsEH4o9mIIDMSirmfbAgSCeP2C6MNwH7ODc66cQ3IWxVEJVSv0WRvDA&usqp=CAU" alt ="Main_Image"
          height='576px' width='1400px'/>
            </div>
            <label className="contact_text">Our Team <br/><br/>Whether you are owner or tenant, our experienced team will assist you in every possible way.
Feel Free to connect with us.</label> 
            <label className="join_us">Join Us</label>
            <span className='fb_span'><IoLogoFacebook size={63}/></span>
            <span className='twitter_span'><IoLogoTwitter size={63}/></span>
            <span className='linkedIn_span'><IoLogoLinkedin size={63}/></span>
            <span className='insta_span'><IoLogoInstagram size={63}/></span>
            <div className= 'contact_details_div'>
                <div className='contact_card'>
                <label>CONTACT DETAILS</label>
                <br/>
                <br/>
                <label>23 StreeT,<br/>ABC Place,<br/>Jumbleworld building,India</label>
                <br/>
                <br/>
                <label><IoIosMail size={25}/>support@WFM.com</label>
                </div>
                <div className='service_card'>
                <label>SERVICES</label>
                <ul>
                <li>Rent Your Property</li>
                <li>Search Property</li>
                <li>Security Policy</li>
                </ul> 
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact;