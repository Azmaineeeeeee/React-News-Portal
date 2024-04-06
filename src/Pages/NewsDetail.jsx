
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import {Link, useParams} from "react-router-dom"
import {
    
    useLoaderData
  } from "react-router-dom";

const NewsDetail = () => {
   const singleNews = useLoaderData();
    const {id} = useParams()
    const news  = singleNews.find(news => news._id == id)
   
   
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="flex gap-6 mt-6">
                <div className="w-3/4">
                <h2 className="text-md font-bold">News Portal Details</h2>
                <div className="space-y-3 flex flex-col">
                   
                    <img className="rounded-xl p-2" src = {news.image_url}></img>
                    <h1 className="text-md font-bold">{news.title}</h1>
                    <p className="text-sm">{news.details}</p>
                <Link to = '/'><button className="btn flex-grow bg-red-500 text-white">All news in this page</button></Link>
                    
                   
                </div>
                
                </div>
                <div className="w-1/4">
                <RightNav></RightNav>
                </div>
                
            </div>
        </div>
    );
};

export default NewsDetail;