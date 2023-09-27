import { BsGooglePlay, BsApple } from 'react-icons/bs';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="box">
                        <h1>E-commerce Store</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, enim.</p>
                        <div className="icon">
                            <div className="img">
                                <BsGooglePlay className='icon' />
                                <span>Google Play Store</span>
                            </div>
                            <div className="img">
                                <BsApple className='icon' />
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Terms & Conditions</li>
                            <li>Our Cares</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Track your order</li>
                            <li>How to Buy</li>
                            <li>Returns & Refunds</li>
                            <li>Help Center</li>
                            <li>Corporate & Bulk Purchasing</li>
                        </ul>
                    </div>

                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>xyz Los Angeles, United States</li>
                            <li>Email: xyz@gmail.com</li>
                            <li>Phone: +12 345 6789</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
