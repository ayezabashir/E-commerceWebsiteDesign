import { slider } from "../../assets/data/data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        appendDots: (dots) => {
            return <ul style={{ margin: "0" }}>{dots}</ul>
        },
        pauseOnHover: true
    };
    return (
        <>
            <Slider {...settings}>
                {
                    slider.map(item => (
                        <div className="box" key={item.id}>
                            <div className="left">
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button className="btn-primary">Visit Collection</button>
                            </div>
                            <div className="right">
                                <img src={item.cover} alt="" />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default SlideCard
