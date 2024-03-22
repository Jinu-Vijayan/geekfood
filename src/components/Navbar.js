import './Navbar.css'
import geekfoodsIcon from "../assets/images/geekfoodsIcon.svg"
import Button from "./Button.js"
import menu from '../assets/icons/menu-svgrepo-com.svg'
import { Link } from 'react-router-dom'

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
                        <li><Link to='/'className='link-tags'>Home</Link></li>
                        <li><Link to='/quotes' className='link-tags'>Quote</Link></li>
                        <li><Link to='/restraunts' className='link-tags'>Resturants</Link></li>
                        <li><Link to='/foods' className='link-tags'>Food</Link></li>
                        <li><Link to='/contact' className='link-tags'>Contacts</Link></li>
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