import Categories from "../../components/categories/Categories"
import SlideCard from "../../components/slide/SlideCard"

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container">
                    <Categories />
                    <SlideCard />
                </div>
            </section>
        </>
    )
}

export default Home
