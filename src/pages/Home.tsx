import { HomeBar } from "../components/homeBar";
import "./Home.css"
import Image1 from "../assets/stock_image_balada.jpeg"


const Home = () => {
    return(
    <>
        <HomeBar/>
        <div className="sideDivA">
            <div className="subDiv">
                <h1>Se divirta a qualquer hora e lugar</h1>
                <p>A <b>Rolez</b> tem eventos e festas disponiveis para todos os públicos! Participe ou organize seu próprio evento agora mesmo.</p>
            </div>
            <div className="imageDiv">
                <img src={Image1} className="image"></img>
            </div>
            
        </div>
    </>
    )
};

export default Home;