import logo from "../../assets/assets/logo.png"
import moment from "moment";

const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center space-y-2">
                <img src={logo}></img>
                <h4 className="text-sm text-gray-400">Journalism without bias and favour.</h4>
                <p className="text-md">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;