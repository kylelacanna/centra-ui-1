import { Link } from "react-router-dom";

export function RightNav(props) {
  return (
    <div id="right-bar">
      <Link class="right-bar-link" to={`/services`}>
        <div class="right-bar-div">
          Services
        </div>
      </Link>
      <Link class="right-bar-link" to={`/about`}>
        <div class="right-bar-div">
          About Us
        </div>
      </Link>
      <Link class="right-bar-link" to={`/contact`}>
        <div class="right-bar-div">
          Contact Us
        </div>
      </Link>
    </div>
);
}
