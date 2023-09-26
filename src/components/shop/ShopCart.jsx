/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiFillStar, AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai'


const ShopCart = ({ shopsItem, addToCart }) => {
    const [count, setCount] = useState(0);
    let increment = () => {
        setCount(count + 1);
    }
    return (
        <>
            {
                shopsItem.map(item => (
                    <>
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
                    </>
                ))
            }
        </>
    )
}

export default ShopCart
