import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Breaking = () => {
  return (
    <div className="flex bg-slate-100 p-2">
      <button className="bg-red-600 btn text-white">Breaking News</button>
      <Marquee pauseOnHover="true">
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default Breaking;
