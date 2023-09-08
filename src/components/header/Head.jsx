import { BsTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs'
const Head = () => {
    return (
        <section className="head">
            <div className="container">
                <div className="left">
                    <div className="group">
                        <BsTelephoneFill className='icon' />
                        <label>+123 45678-90123</label>
                    </div>
                    <div className="group">
                        <BsFillEnvelopeFill className='icon' />
                        <label>ayezabashir46@gmail.com</label>
                    </div>
                </div>
                <div className="right">
                    <label>FAQs</label>
                    <label>Help</label>
                    <label>EN</label>
                    <label>USD</label>
                </div>
            </div>
        </section>
    )
}

export default Head
