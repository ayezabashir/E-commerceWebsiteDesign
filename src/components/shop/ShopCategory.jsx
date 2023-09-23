import { shopCategory } from "../../assets/data/data"

const ShopCategory = () => {
    return (
        <>
            <div className="category">
                <div className="chead">
                    <h2>Brands</h2>
                    <h2>Shops</h2>
                </div>
                {
                    shopCategory.map(item => (
                        <>
                            <div className="box" key={item.id}>
                                <img src={item.cateImg} alt="" />
                                <span>{item.cateName}</span>
                            </div>
                        </>
                    ))
                }
                <div className="box box2">
                    <button>View All Brands</button>
                </div>
            </div>
        </>
    )
}

export default ShopCategory
