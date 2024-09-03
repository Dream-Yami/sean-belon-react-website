import React, {useState} from "react";
import { Button } from "./Button";
import "../css/Navbar.css"

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <>
            <nav className="Navbar">
                <div className="Navbar-Container">
                    <a href='/' className='Navbar-logo'>
                        Sean's LZ
                    </a>
                    <div className="Menu-Icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'Nav-Menu Active' : 'Nav-Menu'}>
                        <li className="Nav-Item">
                            <a href='/' className='Nav-Link' onClick={closeMobileMenu}> Home </a>
                        </li>
                        <li className="Nav-Item">
                            <a href='/#About' className='Nav-Link' onClick={closeMobileMenu}> About </a>
                        </li>
                        <li className="Nav-Item">
                            <a href='/#Projects' className='Nav-Link' onClick={closeMobileMenu}> Projects </a>
                        </li>
                        <li className="Nav-Item">
                            <a href='/#Skills' className='Nav-Link' onClick={closeMobileMenu}> Skills </a>
                        </li>
                        <li className="Nav-Item">
                            <a href='/#Contacts' className='Nav-Link' onClick={closeMobileMenu}> Contacts </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar