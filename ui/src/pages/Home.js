import '../styles/Home.css';
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto"></link>
export function Home(props) {
  return (
    
    <div class="container">
      <div class="top-container">
        <div class="home-page-big-text">
         <h1>expand your <mark>advertising</mark> <span><mark>Reach</mark> with our optimized</span> solutions</h1>
        </div>
        <div class="big-text-caption">
          <span>We are not your usual digital marketing agency.</span>
          <span>We refuse to settle for the bare minmum.</span>
          <span>We will customize a optimization plan specifically for your thriving business</span>
          <btn class="home-page-btn">
            lets talk teamwork
          </btn>
        </div>
      </div>
      <div class="middle-container">
        <div class="middle-text">
         <h2>A service that will prove to be essential to your business</h2>
         <span>text</span>
         <ul>
          <li><strong>Digital Advertisement Management</strong>: Spend less time managing your digital marketing content and efficiency increase your reach by outsourcing to our team of professionals. </li>
          <br/>
          <li><strong>Performance Data For Making Informed decisions</strong>: Entrusting us with the management of your media campaigns will yield valuable user insights for future marketing strategies.</li>
          <br/>
          <li><strong>Comprehensive Assessment For Successful Campaigns</strong> :convincing text</li>
         </ul>
         <btn class="contact-us-btn">
            get my free marketing strategy
        </btn>
        </div>
        <div class="picture-middle">
            <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt=""></img>
        </div>
      </div>
      <div class="bottom-container">
        <div class="home-page-left-bottom">
         <p>final convincer</p>
        </div>
        <div class="home-page-right-bottom">
          <p>another grpahic</p>
        </div>
      </div>
      <div class="work-with-us">
        <h1>Work With Us.</h1>
        <btn class="contact-us-btn">
            Contact Us
        </btn>
      </div>
    </div>
    
  );
}
