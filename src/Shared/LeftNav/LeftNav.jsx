import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
           <h2 className="text-2xl">All Categories</h2> 
           {
            categories.map(categories => <NavLink to = {`/category/${categories.id}`} key ={categories.id} className="block ml-4 p-2 text-md font-normal">{categories.name}</NavLink>)
           }
        </div>
    );
};

export default LeftNav;