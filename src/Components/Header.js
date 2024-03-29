import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li id = "home">Home</li> 
                    <li id = "About">About Us</li>
                    <li id = "contact">Contact Us</li>
                    <li id = "cart">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;