import './Navbar.css'
import geekfoodsIcon from "../assets/images/geekfoodsIcon.svg"
import Button from "./Button.js"
import menu from '../assets/icons/menu-svgrepo-com.svg'

function Navbar(){
    return(
        <>
            <nav id='navbar'>
                <div className='menu-icon'>
                    <img src={menu}/>
                </div>
                <div>
                    <img src = {geekfoodsIcon}></img>
                    <p>GeekFoods</p>
                </div>
                <div>
                    <ul id="nav-links">
                        <li>Home</li>
                        <li>Quote</li>
                        <li>Resturants</li>
                        <li>Foods</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div>
                    <Button borderRadius = "5px" padding = " 0.625rem" backgroundColor = "blue" color = "#ffffff">Get Started</Button>
                </div>
            </nav>
        </>
    )
};

export default Navbar;