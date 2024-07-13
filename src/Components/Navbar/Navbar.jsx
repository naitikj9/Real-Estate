import { useState } from 'react';
import "./Navbar.scss"

function NavBar(){

    const[open,setOpen]= useState(false)
    
    return(
        <nav>
        <div className="left">
        <a href="#" className="logo">
            <img src="./logo.png" alt="logo" /> 
            <span>Jain Real-Estate</span>
        </a>

        {/* nav links */}
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contacts</a>
        <a href="#">Partners</a>

        {/* sign in and sign up */}
        </div>
        <div className="right">
            <a href="#" className="sign">Sign In</a>
            <a href="#" className="sign">Sign Up</a>
        
        {/* menu  */}
             
                <div className="menu_icon" >
                    <img src="./menu.png" 
                    alt="menu" 
                    onClick={() => setOpen((prev) => !prev )} />
                </div>
                <div className= {open ? "menu_items active" : "menu_items" }>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                    <a href="#">Partners</a> 
                    <a href="#">Sign In</a>
                    <a href="#">Sign Up</a> 
                </div>
            </div>
        </nav>
    )
}
export default NavBar