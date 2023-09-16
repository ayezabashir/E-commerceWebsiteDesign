import { Topdata } from "../../assets/data/data"
import Slider from "react-slick";
const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider {...settings}>
                {
                    Topdata.map(item => (
                        <div className="topData" key={item.id}>
                            <div className="nametop">
                                <div className="tleft">{item.para}</div>
                                <div className="tright">{item.desc}</div>
                            </div>
                            <div className="img">
                                <img src={item.cover} alt="" />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default TopCart
