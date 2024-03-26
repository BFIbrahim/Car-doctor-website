import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className="w-20" src="https://i.postimg.cc/j5TMf2Vt/logo.jpg" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Service</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <MdOutlineShoppingBag className="size-5 text-gray-600" />
                    <img className="w-4" src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="" />
                    <button className="border border-[#FF3811] bg-white btn text-[#FF3811] hover:bg-[#FF3811] hover:text-white ">Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;