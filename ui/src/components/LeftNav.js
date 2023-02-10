import { Link } from "react-router-dom";
export function LeftNav(props) {
  return (
    <Link class="left-bar-link" to={`/`}>
      <div class="left-bar-div">
        <img src="../assests/logo_mockup_bird.png" height="40px"/>
        <img src="../assests/possible_centra_logo.png"/>        
      </div>
    </Link>
  );
}
