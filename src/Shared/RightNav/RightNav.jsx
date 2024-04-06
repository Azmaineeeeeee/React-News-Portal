import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import image1 from "../../assets/assets/qZone1.png"
import image2 from "../../assets/assets/qZone2.png"
import image3 from "../../assets/assets/qZone3.png"

import { auth } from "../../FireBase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation,useNavigate } from 'react-router-dom';

const RightNav = () => {
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation()
  const navigate = useNavigate()
 

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(res => {
      console.log(res.user)
      navigate(location?.state ? location.state : '/')

    })
  }
  return (
    <div>
     <div className="mb-4">
     <h2 className="text-lg font-bold mb-2">Login With</h2>
      <button onClick={() => handleGoogleSignIn()} className="btn border-blue-500 border-2 text-blue-700 mb-2 w-[250px] bg-white">
        <FaGoogle />
        Login with Google
      </button>
      <button className="btn  border-2 text-slate-700 mb-2 w-[250px] border-slate-800 bg-white">
        <FaGithub className="text-lg" />
        Login with Github
      </button>
     </div>

     <div className="mb-4">
     <h2 className="text-lg font-bold mb-2">Find Us On</h2>
     <a href=""><div className="flex items-center gap-2 text-blue-800 border-2 border-slate-100 bg-white p-2 rounded-t-lg">
        <FaFacebookF/>
        Facebook
        </div></a>
     <a href=""><div className="flex items-center gap-2 text-sky-500 border-x-2 p-2 border-slate-100 bg-white">
        <FaTwitter/>
        Twitter
        </div></a>
     <a href=""><div className="flex items-center gap-2 border-2 p-2 rounded-b-lg text-pink-500 border-slate-100 bg-white">
        <FaInstagram/>
        Instagram
        </div></a>

     </div>

     <div className="mb-4">
     <h2 className="text-lg font-bold mb-2">Query Zone</h2>

     <div className="space-y-4 bg-slate-200 p-4 rounded-lg">
    <img src={image1} className="bg-white shadow-lg rounded-md"></img>
    <img src={image2} className="bg-white shadow-lg rounded-md"></img>
    <img src={image3} className="bg-white shadow-lg rounded-md"></img>
     </div>
     
     </div>
    </div>
  );
};

export default RightNav;
