import { Link } from "react-router-dom";

export function RightNav(props) {
  return (
    <div id="right-bar">
      <Link class="right-bar-link" to={`/services`}>
        <div class="right-bar-div">
          <h1 class="right-bar-name">Services</h1>
        </div>
      </Link>
      <Link class="right-bar-link" to={`/about`}>
        <div class="right-bar-div">
          <h1 class="right-bar-name">About Us</h1>
        </div>
      </Link>
      <Link class="right-bar-link" to={`/whowehelp`}>
        <div class="right-bar-div">
          <h1 class="right-bar-name">Who We Help</h1>
        </div>
      </Link>
      <Link class="free-consultation"  to={`/contact`}>
          <h1 class="right-bar-name" id="right-bar-free-button-text">free consultation</h1>
      </Link>
    </div>
);
}
