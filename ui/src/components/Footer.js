import { Link } from "react-router-dom";

import "../styles/Footer.css";
export function Footer(props) {
    return (
        <div class="footer-div">
            <div class="footer-page-links">
                <Link class="footer-link" to={`/`}>
                    <div class="footer-link-div">
                        <h4>Home</h4>
                    </div>
                </Link>
                <Link class="footer-link" to={`/services`}>
                    <div class="footer-link-div">
                        <h4>Services</h4>
                    </div>
                </Link>
                <Link class="footer-link" to={`/about`}>
                    <div class="footer-link-div">
                        <h4>About Us</h4>
                    </div>
                </Link>
                <Link class="footer-link" to={`/contact`}>
                    <div class="footer-link-div">
                        <h4>Contact Us</h4>
                    </div>
                </Link>
            </div>           
        </div>
    );
}
