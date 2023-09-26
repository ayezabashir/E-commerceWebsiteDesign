import { shopCategory } from "../../assets/data/data"

const ShopCategory = () => {
    return (
        <>
            <div className="shopCategory">
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
                <div className="button box">
                    <button>View All Brands</button>
                </div>
            </div>
        </>
    )
}

export default ShopCategory
