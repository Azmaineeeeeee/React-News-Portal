import { useLoaderData } from "react-router-dom";
import Breaking from "../Components/Breaking";
import HomeContent from "../Components/HomeContent/HomeContent";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
const Home = () => {

  const newsData = useLoaderData()
  
  return (
    <div className="space-y-4">
      <Header></Header>
      <Breaking></Breaking>
      <Navbar></Navbar>
      <div className="flex md:flex-row flex-col gap-2">
        <div className="lg:w-1/4 w-full">
          <LeftNav></LeftNav>
        </div>
        {/* <div className="md:flex"> */}
        <div className="w-1/3">
          <h2 className="text-lg font-bold">News Portal Home</h2>
           <div>
           {
            newsData.map(singleNews =>  <HomeContent key = {singleNews._id} news = {singleNews}></HomeContent>)
           }
           </div>
        </div>
        <div className="md:w-1/4 w-1/3 mx-auto">
          <RightNav></RightNav>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
