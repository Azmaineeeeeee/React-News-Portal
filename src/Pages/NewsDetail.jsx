
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import {useParams} from "react-router-dom"

const NewsDetail = () => {
    const {id} = useParams()
   
   
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="flex gap-6 mt-6">
                <div className="w-3/4">
                <h2 className="text-md font-bold">News Portal Details</h2>
                <div>
                   
                    <p>{id}</p>
                    
                   
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