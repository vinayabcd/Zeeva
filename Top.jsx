import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Loginmodel from './Loginmodel';

// import './h.css';
function Header(){
        const [isLoginOpen,setIsLoginOpen]=useState(false);
        const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className='w-full max-w-fit overflow-auto '>
        <div className='fixed top-0 left-0 w-full h-[70px] p-2 flex flex-row flex-nowrap justify-between shadow-md z-10 bg-cyan-200'>
            <div className='text-center text-red-500 md-2xl'>
                <h1 className=' hover:cursor-pointer font-lg '><strong>ZEEVA</strong></h1>
            </div>
            <div className="md:hidden pl-40 pt-2.5">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            <div className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-orange-200 md:bg-transparent p-4 md:flex gap-5 text-lg items-center transition-transform 
                    ${menuOpen ? "block" : "hidden md:flex"}`}>
                <Link to="/" className='block py-2 text-black hover:font-bold hover:translate-y-1 transition-transform duration-100'style={{ textDecoration: "none" }}>Home</Link>
                <Link to="/about" className='block py-2 text-black  hover:font-bold hover:translate-y-1 transition-transform duration-100'style={{ textDecoration: "none" }}>About</Link>
                <Link to="/services" className='block py-2 text-black hover:font-bold hover:translate-y-1 transition-transform duration-100'style={{ textDecoration: "none" }}>Services</Link>
                <Link to="/contact" className='block py-2 text-black hover:font-bold hover:translate-y-1 transition-transform duration-100'style={{ textDecoration: "none" }}>Contact</Link>
                <Link to="/products" className='block py-2 text-black hover:font-bold hover:translate-y-1 transition-transform duration-100'style={{ textDecoration: "none" }}>Products</Link>

            </div>

            <div className=' text-green-600 text-lg mt-2 text-center'>
                <h3 className='font-[cursive] hidden md:block text-green-600 text-sm md:text-xs lg:xl'>
                    Glow With Lights Not With Flames
                </h3>
            </div>
            <div className='button' >
                <button  className='hidden md:block bg-red-500 text-white text-sm md:text-lg px-4 py-2 rounded hover:bg-red-600'onClick={()=>setIsLoginOpen(true)}>
                    Login</button>
            </div>
            <Loginmodel isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} title="Login">
                    <form className="login-form">
                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email" required /><br/>
                        
                        <label>Password:</label>
                        <input type="password" placeholder="Enter your password" required /><br/>
                        
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </Loginmodel>
        </div>
        </div>
        
    )
}
export default Header;