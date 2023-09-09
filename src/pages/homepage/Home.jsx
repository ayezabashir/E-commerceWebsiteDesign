import Categories from "../../components/categories/Categories"
import Slider from "../../components/slide/Slider"

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container">
                    <Categories />
                    <Slider />
                </div>
            </section>
        </>
    )
}

export default Home
