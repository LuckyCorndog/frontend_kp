import './styleFooter.css'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h2>TravelWithUs</h2>
                    <p>Share your experience.</p>
                </div>
                <div>
                    <a href='/'>
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>
                    <a href='/'>
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href='/'>
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h4>Contact us</h4>
                    <p>travelwith.us@gmail.com</p>
                    <p>066-876-99-08</p>
                    <p>098-344-255-78</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;