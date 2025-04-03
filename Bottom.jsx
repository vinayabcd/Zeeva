import { Link } from 'react-router-dom';
import 'tailwindcss';
// import './Bottom.css';
function Bottom(){
    return(
        <div >
          <div className='h-auto w-full flex flex-col md:flex-row justify-between bg-blue-200 mt-auto pt-3'>
            <div className="p-2.5 md:w-1/3">
              <p className='text-sm  md:text-xl lg:text-2xl'>
                <b>About Us</b>
              </p>
              <p className='text-sm font-serif  md:text-xl lg:text-2xl'>
                We are a team passionate professionals dedicated to delivering high-quality Products and services to our customers.
                Our company was founded with the mission to make a meaningful impact in the industry by providing innovative solutions.
              </p>
            </div>
            <div className="md:w-1/6 p-2.5">
              <p className='text-sm md:text-xl lg:text-2xl'>
                <b>QuickLink</b>
              </p>
              <ul>
                <li><Link to="/about" className='text-sm md:text-xl'>About</Link></li>
                <li><Link to="/" className='text-sm md:text-xl'>Home</Link></li>
                <li><Link to="/services" className='text-sm md:text-xl'>Services</Link></li>
                <li><Link to="/contact" className='text-sm md:text-xl'>Contact</Link></li>
              </ul>
            </div>
            <div className="md:w-1/6 p-2.5">
            <p className='text-sm md:text-xl lg:text-2xl'>
             <b> Follow Us</b>
            </p>
              <ul>
                <li><a href="https://facebook.com" className='text-sm md:text-xl'>Facebook</a></li>
                <li><a href="https://instagram.com" className='text-sm md:text-xl'>Instagram</a></li>
                <li><a href="https://linkedin.com" className='text-sm md:text-xl'>Linkedin</a></li>
              </ul>
            </div>
            <div className="md:w-1/3 p-2.5">
              <p className='text-sm md:text-xl lg:text-2xl'><b>Contact Us</b></p>
              {/* <p className='text-sm md:text-xl'>📍 Zeeva Fire Solutions,vijayawada,AndhraPradesh</p> */}
              <p className='text-sm md:text-xl'>📞 +1 234 567 890</p>
              <p className='text-sm md:text-xl'>✉️ support@zeevafire.com</p>
            </div>

            
          </div>
          <div className="text-sm md:text-xl bg-black text-white text-center">
          <p>© 2025 Zeeva Fire Solutions. All Rights Reserved.</p>

          </div>
        </div>
    )
}
export default Bottom;