import { Link } from "react-router-dom";
import logo from "../images/logo_c.png";

export function LeftNav(props) {
  return (
    <Link class="left-bar-link" to={`/`}>
      <div class="left-bar-div">
        <div class="logo">
          <img src={logo} alt="logo" style={{ width: 60, height: 60, paddingRight:10}}/>
        </div>
      </div>
    </Link>
  );
}
