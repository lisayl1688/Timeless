import Curated from "../components/Curated/Curated";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import IndulgeInLuxury from "../components/indulgeInLuxury/IndulgeInLuxury";

const Home = () => {
    return ( 
        <>
            <Header/>
            <IndulgeInLuxury/>
            <Curated/>
            <Footer/>
        </>

     );
}
 
export default Home;