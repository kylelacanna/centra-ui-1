import '../styles/Home.css';

export function Home(props) {
  return (
    <div class="container">
      <div class="top-container">
        <div class="home-page-left-top">
         <p>this is where rotataing intro text will go</p>
        </div>
        <div class="home-page-right-top">
          <p>this is where intro paragraph text will go</p>
        </div>
      </div>
      <div class="middle-container">
        <div class="home-page-left-middle">
         <p>basic info</p>
        </div>
        <div class="home-page-right-middle">
          <p>paired graphic with info</p>
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
