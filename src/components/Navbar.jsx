import { Link } from "react-router-dom";

const Navbar = (props)=> {

    function runJs(){
        let mobileMenus = document.getElementById("menus");
    
        mobileMenus.classList.toggle("hidden");
    };
    
    return (
    <nav className="px-4 py-2 justify-between bg-blue-700 flex flex-col lg:flex-row">
        <div className="flex justify-between mx-2 md:mx-6">
            <div className="logo font-semibold py-1 text-blue-200 md:text-white">
                <Link to="/">Gyann Era</Link>
            </div>
            <div className="toggle lg:hide" id="toggle" onClick={runJs}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <ul className="block hidden lg:flex" id="menus">
            <Link to="/"><li className="menu">Home</li></Link>
            <Link to="/about"><li className="menu">About Us</li></Link>
            <Link to="/contact"><li className="menu">Contact</li></Link>
            {(props.browseCourses) ? (<a href="#category"><li className="menu">Browse Courses <i className="fas fa-caret-down"></i></li></a>) : <></>}
            <Link to="/blog"><li className="menu">Blog</li></Link>
            <div className="flex justify-around my-3 md:mt-1 md:my-0 md:mx-2">
                <Link to="/login"><li className="mx-3 md:mx-1"><button className="btn">Login</button></li></Link>
                <li className="mx-3 md:mx-1"><button className="btn">Signup</button></li>
            </div>
        </ul>
    </nav>
    );
};

export default Navbar;