import Header from '../organism/header/index.js';
import HeroSection from '../organism/heroSection/index.js';
import Wood from "./wood.png";
import "./style.css";


export default function errorTemplate(){
    return(
        <div style={{backgroundImage:`url(${Wood})`}} className="errorTemplate" >
            <div style={{backgroundColor: `rgba(34, 32, 33, 0.65)`}}>
            <Header></Header>
            <HeroSection></HeroSection>
            </div>
        </div>
    );
}