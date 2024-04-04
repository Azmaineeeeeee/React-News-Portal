import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    console.log(email, password, name);
    createUser(email,password)
    .then(res => console.log(res.user))
    .catch(error => console.log(error))
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="hero flex justify-center mt-10">
        <div>
          <div className="card shadow-2xl w-full md:w-96">
            <form onSubmit={handleRegister} className="card-body">
              <h2 className="text-center font-bold text-xl mb-4">
                Register Your Account
              </h2>
              <hr />
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md font-bold">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md font-bold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="enter your photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md font-bold">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="your password here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex flex-row gap-2 justify-start item">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="text-sm"
                  required
                />
                <span className="text-sm font-bold">
                  Accept Terms and Conditions
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-slate-800 text-white">
                  Register
                </button>
              </div>
              <h2 className="text-center  text-sm p-4 font-medium">
                Already have an Account?{" "}
                <Link to="/login" className="text-blue-800 font-bold">
                  Login
                </Link>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
