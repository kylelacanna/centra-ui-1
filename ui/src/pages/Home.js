import '../styles/Home.css';
import React, { useState, useRef, useEffect } from "react";
import centra from "../images/centra-C-no-background.png";



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
        <img src={centra}/>
        <div class="home-page-big-text">
         <h1 class="home-page-header">Expand Your <mark>Advertising</mark> <span><mark>Reach</mark> With Our Optimized</span> Solutions</h1>
        </div>
        <div class="big-text-caption">
          <span>We are not your usual digital marketing agency.</span>
          <span>We refuse to settle for the bare minmum.</span>
          <span>We will customize an optimization  marketing plan specifically for your thriving business.</span>
          <button class="home-page-btn">
            lets talk teamwork
          </button>
        </div>
      </div>
      <div class="we-are-centra-container">
        <div class="left-side-we-are-centra">
        <div class="we-are-centra-text-container">
          <div class="header-container-we-are-centra">
            <h2>WE ARE</h2>
            <h1><mark>CENTRA</mark></h1>
          </div>
          <h3 class="we-are-centra-caption">
           We assist business owners scale their already successful endevors by maximixing their marketing dollars and getting thier campaigns in front of the new loyal cusotmers we will find for you.
          </h3>
          <p class="we-are-centra-caption-2">
              We work with brands to help expand their online presence and imporve their overall revanue throught optimized management of Meta and Google ads. If you are looking to offload your marketing efforts to exprienced experts to create an all-inclusive marketing enviorment built for scale? We are here to help.
          </p>
          <button class="we-are-centra-btn">Learn More</button>
        </div>
        </div>
        <div class="right-side-we-are-centra">
          <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg"></img>

          <img src="https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_960_720.jpg" alt=""></img>
        </div>

      </div>
      <div class="middle-container">
        <div class="middle-text">
         <h2><mark>services</mark> that will prove to be <mark>essential</mark> to your business</h2>
         <span>Centra uses a comprehensive approach to marketing. presenting solutions that can easily be integrated to your business with the expertise of our team we can help achieve sustained success for you.</span>
         <ul>
          <li><strong>Digital Advertisement Management</strong>: Spend less time managing your digital marketing content and efficiency increase your reach by outsourcing to our team of professionals. </li>
          <br/>
          <li><strong>Performance Data For Making Informed decisions</strong>: Entrusting us with the management of your media campaigns will yield valuable user insights for future marketing strategies.</li>
          <br/>
          <li><strong>Comprehensive Assessment For Successful Campaigns</strong>: After working with us we will be able to provide our clients with use ful user feedback as to which campaigns we most effective in producing the desired result. </li> 
         </ul>
         <button class="free-strat-btn">
            get my free marketing strategy
        </button>
        </div>
        <div class="picture-middle">
            <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg" alt=""></img>
        </div>
      </div>
      <h2 class="icon-header"><mark>Highlighting</mark> our values, goals, and <mark >our objectives</mark></h2>
                <div class="icons">
                    <div class="icon">
                        <img src="https://img.freepik.com/free-vector/woman-men-teamwork-marketing-corporate_24877-54763.jpg?w=1380&t=st=1677256723~exp=1677257323~hmac=553105051525505ceb94c052691f0d2d445aeba154fe88a869cf6319f6ae870d" alt=""></img>
                        <h1>Our Values</h1>
                        <span>Our team values ongoing learning and development as a key driver of our success. This approach allows us to stay current and relevant in our field, and to tackle new challenges with confidence.</span>
                    </div>
                    <div class="icon">
                        <img src="https://img.freepik.com/premium-vector/goal-success-arrow-sign-business-aim-symbol-target-goal-line-icon_183665-673.jpg?w=1380" alt=""></img>
                        <h1>Setting Goals</h1> 
                        <span>At Centra, we believe that setting ambitious goals is essential to driving progress and fostering a culture of creativity and excellence. By setting clear, challenging objectives and working together as a team to achieve them.</span>
                    </div>
                    <div class="icon">
                        <img src="https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?w=826&t=st=1677455184~exp=1677455784~hmac=cc0d63c0af1f5be476f710cb60b5bba39cc252f2791b13e62a95e8e775569b89" alt=""></img>
                        <h1>Grow Your Business</h1>
                        <span>At Centra, our team employs a data-driven approach to help you understand your audience, and to identify the strategies that will be most effective in helping your business grow.</span>
                    </div>
                </div>
        <div class="faq">
          <h2>You Have <mark class="white">Questions?</mark> We Have <mark class="white">Answers</mark></h2>
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
          <h1>YOUR AUDIENCE IS LOOKING FOR YOU RIGHT NOW. DON’T WAIT.</h1>
          <button class="contact-now-btn">
              Contact Us
          </button>
        </div>
    </div>
    
  );
  
}
