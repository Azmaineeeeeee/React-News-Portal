import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
const HomeContent = ({news}) => {
    return (
        <div className="space-y-2 p-2  border-slate-300 mb-6 bg-white shadow-lg">
           <div className="flex justify-between bg-slate-200 items-center p-2 rounded-md">
           <div className="flex gap-2  items-center">
                <div>
                <img src={news.author.img} className="w-[40px] object-cover rounded-full"></img>
                </div>
                <div className="flex flex-col">
                     <span className="text-sm font-bold">{news.author.name}</span>
                     <span className="text-sm">{news.author.published_date}</span>
                </div>
            </div>
            <div className="flex gap-2">
            <CiBookmark className="text-lg" />
            <CiShare2 className="text-lg" />
            </div>
           </div>
           
           <h1 className="text-sm font-bold">{news.title}</h1>

           <img src = {news.image_url} className="w-full h-44 object-fit p-2"></img>

          




{
    news.details.length > 200 ? (
        <p className="text-sm">
            {news.details.slice(0, 200)}{" "}
            <Link
                to={`/news/${news._id}`}
                className="text-red-500 font-bold"
            >
                Read More...
            </Link>
        </p>
    ) : (
        <p className="text-sm">{news.details}</p>
    )
}

          

        </div>
    );
};

export default HomeContent;