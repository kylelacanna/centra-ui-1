import { Link } from "react-router-dom";
import logo from "../images/logo_c.png";

export function LeftNav(props) {
  return (
    <Link class="left-bar-link" to={`/`}>
        <div class="logo">
          <img src={logo} alt="logo" style={{ width: 80, height: 80, paddingRight:10}}/>
        </div>
        <h1>Centra Marketing</h1>
    </Link>
    
  );
}
