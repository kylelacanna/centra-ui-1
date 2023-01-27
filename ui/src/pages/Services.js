import '../styles/Services.css';

export function Services(props) {
    return (
        <div class="parent-container">
            <div class="top-container">
                <h1>Ecommerce Marketing Services Tailored for Profit Growth</h1>
                <caption>Centra Marketing is an ecommerce focused Marketing Agency that specialize in crafting effective campaigns for maximum impact, with a focus on driving business growth and increasing revenue. </caption>
                <btn class="contact-us-btn">
                    Get My Free Ecommerce Marketing Strategy
                </btn>
            </div>
            <div class="middle-container">
                <div class="lead-gen-desc">
                    <p>Ad Management</p>
                    <p>Ad Optimization</p>
                    <p>User Feedback</p>
                </div>
            </div>
            <div class="bottom-container">
                <div class="home-page-left-bottom">
                    <p>palceholder</p>
                </div>
                <div class="home-page-right-bottom">
                    <p>placeholder</p>
                </div>
             </div>

             <div id="services-cards">
                <div class="card" id="card-1">
                    <div class="card-content">
                        <h2>Ad Management</h2>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>

                        <p>what our team will do</p>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
                <div class="card" id="card-1">
                    <div class="card-content">
                        <h2>Ad Optimization</h2>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
                        <p>
                            Our expert team will 
                        </p>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
                <div class="card" id="card-1">
                    <div class="card-content">
                        <h2>User Feedback</h2>                        
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
                        <p>
                            Our expert team will 
                        </p>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    );
}