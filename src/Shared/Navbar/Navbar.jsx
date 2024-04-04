import { useContext } from "react";
import userDefault from "../../assets/assets/user.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
  const {logOut,user} = useContext(AuthContext)
  const navLink = (
    <>
      <li>
        <Link to = '/'>Home</Link>
      </li>
      <li>
      <Link to = '/about'>About</Link>
      </li>
      <li>
      <Link to = '/career'>Career</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden border-1 border-slate-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="flex gap-2 navbar-end">
        <div className="w-10 object-cover">
          <img
            className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src={userDefault}
          />
        </div>
        <div>
          {
            user ? <Link onClick={logOut} className="btn bg-slate-900 text-white rounded-md p-2 w-[100px]">
            LogOut
          </Link> : <Link to = '/login' className="btn bg-slate-900 text-white rounded-md p-2 w-[100px]">
            Login
          </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
