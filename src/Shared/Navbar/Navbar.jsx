
import userDefault from "../../assets/assets/user.png"
const Navbar = () => {
    const navLink = 
        <>
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Career</a></li>
        </>
    
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden border-1 border-slate-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLink}
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="flex gap-2 navbar-end">
  <div className="w-10 object-cover">
          <img className="rounded-full" alt="Tailwind CSS Navbar component" src={userDefault}/>
        </div>
  <div>
    <a className="btn bg-slate-900 text-white rounded-md p-2 w-[100px]">Login</a>
  </div>
  </div>
</div>
    );
};

export default Navbar;