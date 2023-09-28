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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
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
