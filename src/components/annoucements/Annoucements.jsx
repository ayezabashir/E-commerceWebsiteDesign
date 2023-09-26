import banner1 from '/banner-1.png'
import banner2 from '/banner-2.png'

const Annoucements = () => {
    const style1 = {
        width: '30%',
        height: '340px',
    }
    const style2 = {
        width: '68%',
        height: '340px',
    }
    return (
        <>
            <section className="annoucements">
                <div className="container">
                    <div className="img" style={style1}>
                        <img src={banner1} width='100%' height='100%' alt="" />
                    </div>
                    <div className="img" style={style2}>
                        <img src={banner2} width='100%' height='100%' alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Annoucements
