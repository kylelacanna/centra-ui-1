import { Link } from "react-router-dom";

export function RightNav(props) {
  return (
    <div id="right-bar">
      <Link class="right-bar-link" to={`/services`}>
        <div class="right-bar-div">
          <h1>Services</h1>
        </div>
      </Link>
      <Link class="right-bar-link" to={`/about`}>
        <div class="right-bar-div">
          <h1>About Us</h1>
        </div>
      </Link>
      <Link class="right-bar-link" to={`/contact`}>
        <div class="right-bar-div">
          <h1>Contact Us</h1>
        </div>
      </Link>
    </div>
);
}
