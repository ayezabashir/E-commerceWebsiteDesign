import { cat } from "../../assets/data/data"

const Categories = () => {
    return (
        <div className="category">
            {
                cat.map(item => (
                    <div className="box" key={item.id}>
                        <img src={item.catImg} alt="" />
                        <p>{item.catName}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Categories
