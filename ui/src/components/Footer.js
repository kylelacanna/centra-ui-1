import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";
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
            <div class="social-container">
                <a href="https://www.youtube.com" className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com" className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                 <a href="https://www.linkedin.com" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
                <a href="https://www.twitter.com" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
            </div>            
        </div>
    );
}