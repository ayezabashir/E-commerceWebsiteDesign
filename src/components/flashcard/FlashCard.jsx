/* eslint-disable react/prop-types */
import { useState } from 'react';
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

const FlashCard = ({ productItems, addToCart }) => {
    const [count, setCount] = useState(0);
    let increment = () => {
        setCount(count + 1);
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

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
                                        <label>{count}</label> <br />
                                        <AiOutlineHeart className="icon" onClick={increment} />
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
                                        <button onClick={() => addToCart(item)}>
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
