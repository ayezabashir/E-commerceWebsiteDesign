import { NewArrivaldata } from "../../assets/data/data"

const Cart = () => {
    return (
        <>
            <div className="content">
                {
                    NewArrivaldata.map(item => (
                        <div key={item.id} className="newins">
                            <div className="img">
                                <img src={item.cover} alt="" />
                            </div>
                            <h4>{item.name}</h4>
                            <span>{item.price}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart
