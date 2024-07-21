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
                <div className="container goldUhr">
                    <img src={goldUhr} alt="Goldene Uhr"/>
                    <div className="overlay">
                        <div>Humbolt</div>
                        <br />
                        <div className ="line"></div>
                        <br />
                        <a href="http://google.com">Discover More</a>
                    </div>

                </div>

                <div className="container diamantRing">
                    <img src={diamantRing} alt="Diamant Ring"/>
                    <div className="overlay">
                        <div>Rings</div>
                        <br />
                        <div className ="line"></div>
                        <br />
                        <a href="http://google.com">Discover More</a>
                    </div>
                </div>

                <div className="container raumDuft">
                    <img src={raumDuft} alt="Raumduft"/>
                    <div className="overlay">
                        <div>Locheber</div>
                        <div>Milano</div>
                        <br />
                        <div className ="line"></div>
                        <br />
                        <a href="http://google.com">Discover More</a>
                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default Curated;