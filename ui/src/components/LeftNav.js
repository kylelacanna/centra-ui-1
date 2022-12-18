import { Link } from "react-router-dom";
export function LeftNav(props) {
  return (
    <Link class="left-bar-link" to={`/`}>
      <div class="left-bar-div">
        <h1>Centra Marketing Co.</h1>
      </div>
    </Link>
  );
}
