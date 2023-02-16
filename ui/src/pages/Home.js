import '../styles/Home.css';
import React, { useState, useRef, useEffect } from "react";

<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Lora"></link>
export function Home(props) {
      const [active, setActive] = useState(false);

      const contentRef = useRef(null);

      useEffect(() => {
        contentRef.current.style.maxHeight = active
          ? `${contentRef.current.scrollHeight}px`
          : "0px";
      }, [contentRef, active]);

      const toggleAccordion = () => {
        setActive(!active);
      };
  return (
    
    <div class="container">
      <div class="top-container">
        <div class="home-page-big-text">
         <h1 class="home-page-header">Expand Your <mark>Advertising</mark> <span><mark>Reach</mark> With Our Optimized</span> Solutions</h1>
        </div>
        <div class="big-text-caption">
          <span>We are not your usual digital marketing agency.</span>
          <span>We refuse to settle for the bare minmum.</span>
          <span>We will customize an optimization  marketing plan specifically for your thriving business.</span>
          <btn class="home-page-btn">
            lets talk teamwork
          </btn>
        </div>
      </div>
      <div class="middle-container">
        <div class="middle-text">
         <h2>services that will prove to be essential to your business</h2>
         <h3>Centra uses a comprehensive approach to marketing. We will present solutions that can easily be integrated to your business with the expertise of our seasoned team, informed strategy, and advanced tools necessary for sustained success.</h3>
         <ul>
          <li><strong>Digital Advertisement Management</strong>: Spend less time managing your digital marketing content and efficiency increase your reach by outsourcing to our team of professionals. </li>
          <br/>
          <li><strong>Performance Data For Making Informed decisions</strong>: Entrusting us with the management of your media campaigns will yield valuable user insights for future marketing strategies.</li>
          <br/>
          <li><strong>Comprehensive Assessment For Successful Campaigns</strong>: After working with us we will be able to provide our clients with use ful user feedback as to which campaigns we most effective in producing the desired result. </li> 
         </ul>
         <btn class="contact-us-btn">
            get my free marketing strategy
        </btn>
        </div>
        <div class="picture-middle">
            <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt=""></img>
        </div>
      </div>
      <h2>We are pleased to offer services on major platforms</h2>

      <div class="bottom-container">
        <div class="card" id="card-1">
          <div class="card-content">
            <h2>Google</h2>
            <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
            <p>Being the largest internet search provider in the world Google is a platform that will ensure that anyone can have access to your business' online presence. Allow our team of experts to handle a custom PPC strategy that will help you reach your goals.</p>           
            <ul>
              <li>Using targeted marketing to grow you a loyal audience</li>
              <li>Leave campaign management to the experts</li>
              <li>Any budget can work to grow your business</li>
              <li>See faster results with Google SEO</li>
              <li>Use CPC, CPM, or CPA strategies to build a brand</li>
            </ul>
          </div>
        </div>
        <div class="card" id="card-1">
          <div class="card-content">
            <h2>Facebook</h2>
            <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
            <p>Facebook has established itself as a leading marketing platform, with over 2.7 billion active users, making it a formidable advertising network suitable for various business types.</p>           
            <ul>
              <li>Maximize your content marketing strategy with Facebooks' amazing CPC</li>
              <li>Facebook offers unmatched analytics allowing you to fine tune your content</li>
              <li>With Facebooks' advanced tageting abilites we can go directly to your audience</li>
              <li>Outcompete organic reach with our teams' Facebook optimized models</li>
            </ul>
          </div>
        </div>
        <div class="card" id="card-1">
          <div class="card-content">
            <h2>Instagram</h2>
            <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
            <p>Instagram ads can be the first step for many businesses to get into the world of social media marketing. 
You don’t have to be an ad expert or have a technical background when using Instagram advertising. Luckily our experts do and are here to assist you and your business in any way.</p>           
            <ul>
              <li>Gain access to another 2.5 billion users when beginning adversiting on instagram</li>
              <li>A key advantage that instagram has over other platforms are shorts and </li>
              <li>Lookalike and interest based prospecting to make data-driven decisions that goes after a strategic group of individuals that may be interested in your brand.</li>
            </ul>
          </div>
        </div>
        {/* <div class="card" id="card-1">
          <div class="card-content">
            <h2>Linkedin</h2>
              <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" width="150" alt=""></img>
              <p>text</p>
            <ul>
              <li>text</li>
              <li>text</li>
              <li>text</li>
            </ul>
          </div>
        </div> */}
      </div>
        <div class="faq">
          
          <h2>You have questions? We have answers.</h2>
          <button class="accordion" onClick={toggleAccordion}>Will you take a look at my account before I get started?</button>
          <div class="panel">
            
            {/* <fa-plus
                  className={active ? `question-icon rotate` : `question-icon`}
                /> */}
                <i class="fa fa-plus" aria-hidden="true" ></i>
                <div ref={contentRef} classname={active ? `answer answer-divider` : `answer`}>
                  <p>Yes! We would be happy to perform a free audit of your accounts and marketing material to see if our services might work for you. At Centra we believe in adding value in any way we can.</p>
                </div>
          </div>

          <button class="accordion">How long are your contracts?</button>
          <div class="panel">
                <span>Our contracts start at six months. We also offer eight months and one year spans. We prove our value each and every day and we aim to build long lasting partnerships that way.</span>
          </div>

          <button class="accordion">How much money do I need to spend on ads?</button>
          <div class="panel">
            <p>We recommend a minimum of $8,000 per platform. This will allow our team to confidently curate a custom digital marketing strategy that will integrate seamlessly with Meta and Google alorithms. Anything under these minimums will leave holes in key sectors that are vital to our performace and optimization models.</p>
          </div>
          <button class="accordion">Who does the work on my accounts?</button>
          <div class="panel">
            <p>All of our accounts here at Centra are managed and optimized by our team of seasoned marketing experts. Each of our team memebers has extensive exprience in digital marketing services and we look forward to assisting you in your endevors.</p>
          </div>
          <button class="accordion">Do I own the ads or do you keep them?</button>
          <div class="panel">
            <p>You will always maintain full ownership of all accounts, ads, and any other related marketing material. We help set up and manage your accounts once you have authorized us to do so. You will always keep everything.</p>
          </div>
          <button class="accordion">Do you offer creative services?</button>
          <div class="panel">
            <p>Centra is proud to be partnered with international creative agencies and we would be happy to provide a variety of options based on our clients needs. To be clear, Centra istself does not specialize in the creative aspect of digital marketing, as we prefer to focus on management and optimization of the ads themselves.</p>
          </div>
          <button class="accordion">How do I get started?</button>
          <div class="panel">
            <p>Just fill out a contact form by clicking the button below or by selecting 'Contact Us' from the menu. We look forward to speaking wtih you!</p>
          </div>
        </div>
        <div class="work-with-us">
          <h1>Work With Us.</h1>
          <btn class="contact-now-btn">
              Contact Us
          </btn>
        </div>
    </div>
    
  );
  
}
