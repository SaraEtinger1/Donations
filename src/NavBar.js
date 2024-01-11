import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (<nav>
        <ul className="ul">           
            <li><Link to="all" className="li"><span>כל התרומות </span></Link></li>
            <li><Link to="add" className="li"><span>הוספת תרומה</span></Link></li>
        </ul>
    </nav>  );
}
 
export default NavBar;
