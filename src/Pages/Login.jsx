import { useEffect, useRef } from "react";

import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../FireBase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      console.log(res.user);
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then((res) => {
      console.log(res.user);
      navigate(location?.state ? location.state : "/");
    })
    .catch(error => console.log(error))
  }
 
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // .catch(error => console.error(error))
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="hero flex justify-center mt-20">
        <div>
          <div className="card shadow-2xl w-full md:w-96">
            <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-center font-bold text-xl mb-4">
                Login Your Account
              </h2>
              <hr />
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md font-bold">
                    Email Address
                  </span>
                </label>
                <input
                  ref={inputRef}
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-slate-800 text-white">Login</button>
              </div>
              <h2 className="text-center text-sm p-4 font-medium">
                Do not have an Account?{" "}
                <Link to="/register" className="text-red-800 font-bold">
                  Register
                </Link>
              </h2>
            </form>
            <div className="flex justify-center gap-4">
              <h2
                onClick={() => handleGoogleSignIn()}
                className="mb-6 text-2xl border-2 border-black border-opacity-50 p-1 rounded-md hover:scale-125 hover:border-opacity-90"
              >
                <FcGoogle />
              </h2>
              <h2 onClick={() => {handleGithubSignIn()}} className="mb-6 text-2xl border-2 border-black border-opacity-50 p-1 rounded-md hover:scale-125 hover:border-opacity-90">
                <SiGithub />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
