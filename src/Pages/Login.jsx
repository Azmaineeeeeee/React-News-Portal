import { useContext } from "react";

import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation,useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
    const {signInUser} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signInUser(email,password)
        .then(res => {
          console.log(res.user);
         navigate(location?.state? location.state : '/')
        })

        .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar></Navbar>
           
            <div className="hero flex justify-center mt-20">
  <div>

    <div className="card shadow-2xl w-full md:w-96">
      <form onSubmit={handleLogin} className="card-body">
      <h2 className="text-center font-bold text-xl mb-4">Login Your Account</h2>
            <hr />
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md font-bold">Email Address</span>
          </label>
          <input type="email" name="email" placeholder="enter your email address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md font-bold">Password</span>
          </label>
          <input type="password" name = "password" placeholder="your password here" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-slate-800 text-white">Login</button>
        </div>
        <h2 className="text-center text-sm p-4 font-medium">Do not have an Account? <Link to = '/register' className = 'text-red-800 font-bold'>Register</Link></h2>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;