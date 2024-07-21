import luxury from "../../assets/img/img/6a1f1689481903.5df65ad917545@2x.jpg"
import pseudoLinie from "../../assets/img/img/pseudo.png"
import "./IndulgeInLuxury.css"
const IndulgeInLuxury = () => {
    return ( 
        <>
        <section className="indulgeInLuxury">
            <h5>60 YEARS OF EXPERIENCE</h5>
            <p>LET US INDUGLE YOU IN LUXURY</p>
            <img className="luxury" src={luxury} alt="" />
            <img className="pseudoLinie" src={pseudoLinie} alt="" />
            <span>- Our Story →</span>
        </section>
        </>
     );
}
 
export default IndulgeInLuxury;