import { cat } from "../../assets/data/data"

const Categories = () => {
    return (
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
    )
}

export default Categories
