/* eslint-disable react/prop-types */
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
const Cart = ({ cartItem, addToCart, decreaseQty }) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <section className="cart-items">
            <div className="container">
                <div className="cart-details">
                    {cartItem.length === 0 && <h1 className="no-items">No Items are added in the Cart</h1>}
                    {cartItem.map(item => {
                        const productQty = item.price * item.qty;
                        return (
                            <div className="cart-list product" key={item.id}>
                                <div className="img">
                                    <img src={item.cover} alt='' />
                                </div>
                                <div className='details'>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>${item.price}.00</h4>
                                        <h4>Quantity: {item.qty}</h4>
                                        <span>${productQty}.00</span>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button>
                                                <RxCross2 className='icon' />
                                            </button>
                                        </div>
                                        <div className="incCart">
                                            <button onClick={() => addToCart(item)}>
                                                <AiOutlinePlusCircle className='icon' />
                                            </button>
                                            <button onClick={() => decreaseQty(item)}>
                                                <AiOutlineMinusCircle className='icon' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item-price"></div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-total">
                    <h2>Cart Summary</h2>
                    <div className="summary">
                        <h4>Total Price: </h4>
                        <h4>${totalPrice}.00</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
