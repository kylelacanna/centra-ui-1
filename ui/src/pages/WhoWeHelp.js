import "../styles/WhoWeHelp.css";
// import { Modal } from "../components/Modal.js";

export function WhoWeHelp(props){
    return (
        <div>
            <div class="ecommerce-shout-out">
                <h1>dedicated to <mark>helping businesses</mark> with <br/>an online presence <mark>expand</mark> their reach</h1>
            </div>
            <div class="container-who-we-help">
               <h2><mark class="white">Highlighting</mark> our values, goals, and <mark class="white">our objectives</mark></h2>
                <div class="icons">
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt=""></img>
                        <h1>Our Values</h1>
                        <span>Our team values ongoing learning and development as a key driver of our success. This approach allows us to stay current and relevant in our field, and to tackle new challenges with confidence.</span>
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt=""></img>
                        <h1>Setting Goals</h1> 
                        <span>At Centra, we believe that setting ambitious goals is essential to driving progress and fostering a culture of creativity and excellence. By setting clear, challenging objectives and working together as a team to achieve them.</span>
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt=""></img>
                        <h1>Grow Your Business</h1>
                        <span>At Centra, our team employs a data-driven approach to help you understand your audience, and to identify the strategies that will be most effective in helping your business grow.</span>
                    </div>
                </div>
                <div class="steps-backdrop">
                    <h1>Our Recipe For Growth</h1>
                    <div class="steps">
                        <div class="steps-list">
                            <ul>
                                <a>Friendly Chat</a>
                                <a>Team Discussion</a>
                                <a>Strategy Talk</a>
                                <a>Full Rollout</a>
                                <a>Optimization and Growth</a>
                            </ul>
                        </div>
                        <div class="steps-text">
                            <span>text goes here</span>
                            {/* <btn onClick={()=> setShow(true)} class="home-page-btn">
                                lets talk teamwork
                            </btn>
                            <Modal onClose={() => setShow(false)} show={show}/> */}
                        </div>
                    </div>
                    
                </div>
                
                <div class="work-with-us">
                    <h1>Work With Us.</h1>
                    <btn class="contact-us-btn">
                        Contact Us
                    </btn>
                </div>
            </div>
        </div>
    );
}