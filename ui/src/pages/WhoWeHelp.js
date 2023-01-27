import "../styles/WhoWeHelp.css";

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
                        <span>blah blah blah</span>
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt=""></img>
                        <h1>Setting Goals</h1> 
                        <span>blah blah blah</span>
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt=""></img>
                        <h1>Grow Your Business</h1>
                        <span>blah blah blah</span>
                    </div>
                </div>
                <div class="steps-backdrop">
                    <h1>Our Recipe For Growth</h1>
                    <div class="steps">
                        <div class="steps-list">
                            stesps
                        </div>
                        <div class="steps-text">
                            <span>text goes here</span>
                            <btn class="home-page-btn">
                                lets talk teamwork
                            </btn>
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