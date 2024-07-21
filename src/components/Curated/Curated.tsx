import "./Curated.css"
import goldUhr from "../../assets/img/img/03_Curated_WAT_HUBLOT_b.jpg"
import diamantRing from "../../assets/img/img/04_Curated_Fine_Ring_Product_b.jpg"
import raumDuft from "../../assets/img/img/07_Curated_DEC_Locherber_b-1.jpg"

const Curated = () => {
    return ( 
        <div className="curatedWrapper">
            <h2>Curated</h2>
            <p>A selection of handmade jewels, Swiss made watches of haute horlogerie and unique objects.</p>
            <div className="curatedPics">
                {/* klassen vergeben und die bilder je nach anforderung anpassen ! */}
                <img className="goldUhr" src={goldUhr} alt="" /> 
                <img className="diamantRing" src={diamantRing} alt="" />
                <img className="raumDuft" src={raumDuft} alt="" />
            </div>
        </div>

        
     );
}
 
export default Curated;