
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
        <div>

            <nav className="flex justify-between items-center ">

                <Logo></Logo>

            <ul className="flex gap-5">
                <li>

                <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold text-[20px] underline" : ""
                            }
                        >
                            Home
                        </NavLink>



                </li>

                <li>

                <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold text-[20px] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>



                </li>

                <li>

                <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold text-[20px] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>



                </li>
            </ul>

            </nav>

            



            
        </div>
    );
};

export default Navbar;