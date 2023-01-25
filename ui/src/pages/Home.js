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
          <span>line 1</span>
          <span>line 2</span>
          <span>line 3</span>
          <btn class="home-page-btn">
            lets talk teamwork
          </btn>
        </div>
      </div>
      <div class="middle-container">
        <div class="middle-text">
         basic info
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
    </div>
    
  );
}
