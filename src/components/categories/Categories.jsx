import { cat } from "../../assets/data/data"

const Categories = () => {
    return (
        <div className="container">
            <div className="category">
                {
                    cat.map(item => (
                        <div className="box" key={item.id}>
                            <img src={item.catImg} alt="" />
                            <span>{item.catName}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
