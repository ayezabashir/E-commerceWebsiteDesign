import { TbTruckDelivery } from 'react-icons/tb'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsShieldCheck, BsHeadset } from 'react-icons/bs'

const Wrapper = () => {
    const wrapperData = [
        {
            id: 1,
            cover: <i><TbTruckDelivery /></i>,
            title: "Worldwide Delivery",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            id: 2,
            cover: <i><AiOutlineCreditCard /></i>,
            title: "Safe Payment",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            id: 3,
            cover: <i><BsShieldCheck /></i>,
            title: "Shop With Confidence ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            id: 4,
            cover: <i><BsHeadset /></i>,
            title: "24/7 Support ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ]

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    {
                        wrapperData.map(item => (
                            <>
                                <div className="product" key={item.id}>
                                    <div className="img">
                                        {item.cover}
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.decs}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Wrapper
