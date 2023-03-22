import { Link } from "react-router-dom";
import logo from "../images/logo_c.png";

export function LeftNav(props) {
  return (
    <Link class="left-bar-link" to={`/`}>
        <img id="logo" src={logo} alt="logo" />
        <h1 id="left-bar-logo-name">Centra Marketing</h1>
    </Link>
  );
}
