/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick'

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <BsFillArrowRightCircleFill className='icon' />
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <BsFillArrowLeftCircleFill className='icon' />
            </button>
        </div>
    )
}

const FlashCard = ({ productItems }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    };
    return (
        <>
            <Slider {...settings}>
                {
                    productItems.map(item => (
                        <div key={item.id} className="flashcard">
                            <div className="product">
                                <div className="img">
                                    <span className="discount">{item.discount}% Off</span>
                                    <img src={item.cover} alt="" />
                                    <div className="product-like">
                                        <label>0</label> <br />
                                        <AiOutlineHeart className="icon" />
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{item.name}</h3>
                                    <div className="rate">
                                        <AiFillStar className="icon" />
                                        <AiFillStar className="icon" />
                                        <AiFillStar className="icon" />
                                        <AiFillStar className="icon" />
                                        <AiFillStar className="icon" />
                                    </div>
                                    <div className="price">
                                        <h4>${item.price}.00</h4>
                                        <button>
                                            <AiOutlinePlus className='icon' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default FlashCard
