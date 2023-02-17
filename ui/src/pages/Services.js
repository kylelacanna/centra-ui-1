import '../styles/Services.css';

export function Services(props) {
    return (
        <div class="parent-container">
            <div class="services-top-container">
                <h1><mark>Ecommerce</mark> Marketing Services<br/> Centered for <mark>Profit Growth</mark></h1>
                <caption>Centra Marketing is an ecommerce focused Marketing Agency that specializes in crafting effective campaigns for maximum impact, with a speacialty in driving business growth and increasing revenue. </caption>
                <btn class="contact-now-btn">
                    Get My Free Ecommerce Marketing Strategy
                </btn>
            </div>
            <div class="services-middle-container">
                <div class="all-unique-text-container">
                    <h2>No Two Brands are Indentical</h2>
                    <div class="all-unique-text">
                        We understand that digital marketing can be a complicated space. That's why we're here to help. Our team consists of experts who have the knowledge and skills necessary to help you tackle the unique challenges that your company faces. Taking a comprehensive approach to digital marketing, considering your target audience, competition, and industry trends to develop a strategy that is tailored to your unique needs. Schedule a call today to see if we are the right fit to support your business growth and expansion goals!
                    </div>
                        <br/>
                    <h2>Discover How Big Your Audience Can Be</h2>
                    <div class="discover-text">
                        Unlock the full potential of your online advertising efforts with our digital ad optimization models. After meeting with us, we will develop strategies that will help you reach your target audience with precision, resulting in increased engagement and business growth. Partner with us to drive measurable results and achieve your marketing objectives.
                    </div>
                </div>
            </div>
            <div class="bottom-container-header">
                <h1> What We Can <mark>Provide</mark> To Your <mark>Business</mark></h1>
            </div>
             <div id="services-cards">
                
                <div class="card" id="card-1">
                    <div class="card-content">
                        <h2>Ad Management and Optimization</h2>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
                        <p>Leave your social media advertising in the hands of our professional team, who will take care of posting giving you the freedom to focus on other areas of your business.</p>           
                        <ul>
                            <li>Content marketing strategy planning and execution</li>
                            <li>Custom marketing plan for increased visibility, search rankings and real organic traffic</li>
                            <li>Ongoing content marketing campaign tracking and monitoring</li>
                            <li>marketing research and analysis of your competitors</li>
                            <li>ROI measurements and constant optimization</li>
                        </ul>
                    </div>
                </div>
                <div class="card" id="card-1">
                    <div class="card-content">
                        <h2>Google PPC</h2>
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
                        <p>
                            You can Entrust our Google Premier Partner marketing experts to construct a custom PPC campaign, such as a Google ads strategy, to accomplish your business objectives.
                        </p>
                        <ul>
                            <li>Ensure modern advertising strategies and optimization patterns provided through Google</li>
                            <li>Grow a long-term, loyal audience with a targeted marketing approach</li>
                            <li>Providing metrics that will prove to be insigtful in helping build comprehensive reports</li>
                            <li>We can help you avoid serious and costly mistakes with help from our team</li>
                        </ul>
                    </div>
                </div>
                <div class="card" id="card-1">
                    <div class="card-content">
                        <h2>User Feedback</h2>                        
                        <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
                        <p>
                        By outsourcing your advertising needs to our team of professionals, we can provide valuable feedback data that will enable your marketing department to create content that resonates with your target audience, ultimately saving you time and resources on research. 
                        </p>
                        <ul>
                            <li>By working with us we will be able to assist you and your business in choosing the correct marketing direction to go in by analyzing data points</li>
                            <li>User interaction data is crucial to all major companies, let us implement this service to yours as well</li>
                            <li>Learn what your customers like to see so that you can produce more of it!</li>
                            <li>Finally figure out why one campaign works and another does not.</li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    );
}