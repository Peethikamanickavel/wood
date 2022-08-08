import Image from "../../../../core/atom/Image";
import "./style.css";
import Menu from '../../molecules/menu/index.js';
import logo from './logo.png';

export default function Header(props){
  
    return(
        <div className="navbar d-flex flex-row">
            <Image url={logo} imgDesign="logo" alter="Logo" ></Image>
            <div className="menu d-flex flex-row">
                <Menu ></Menu>
            </div>
        </div>
    );
}