import { Discountdata } from "../../assets/data/data"
import Slider from "react-slick";

const DiscountCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        margin: 200,
    };
    return (
        <>
            <Slider {...settings}>
                {
                    Discountdata.map(item => (
                        <>
                            <div key={item.id} className="discountcard">
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className="desc">
                                    <h4>{item.name}</h4>
                                    <span>{item.price}</span>

                                </div>
                            </div>
                        </>
                    ))
                }
            </Slider>
        </>
    )
}

export default DiscountCard
