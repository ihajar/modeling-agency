/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"

// import { useStaticQuery, graphql } from "gatsby"
import {TweenMax, TimelineMax, Power3} from 'gsap';
import "../style/main.scss";




function Layout() {
  // document.addEventListener("DOMContentLoaded", function(event){
  //   window.addEventListener("load", function(e){
  //     document.body.style.display= "block";
  
  //     let tl = new TimelineMax()
     
  //     tl.staggerFrom('section', 2, {
  //       opacity: 0,
  //       scale: .5,
  //       ease: Power3.easeOut
  //     }, 0.2)
  
  //     tl.staggerFrom('h1, h2', .5, {
  //       opacity: 0,
  //       y: -40,
  //       ease: Power3.easeInOut
  //     }, 0.2, "-=2")
  
  //     tl.staggerFrom('.anim-panel', 1, {
  //       opacity: 0,
  //       y: -40,
  //       ease: Power3.easeInOut
  //     }, 0.2, "-=1.5")
    
  
  //   }, false)
  // });
  
  let tl = new TimelineMax()

  useEffect(() => {
    // sections variables
    // const section1 = setions.firstElementChild;
    // const section2 = sections.lastElementChild;


    // TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    tl.staggerFrom('section', 2, {
      opacity: 0,
      scale: .5,
      ease: Power3.easeOut
    }, 0.2)

    tl.staggerFrom('h1, h2', .5, {
      opacity: 0,
      y: -40,
      ease: Power3.easeInOut
    }, 0.2, "-=2")

    tl.staggerFrom('.anim-panel', 1, {
      opacity: 0,
      y: -40,
      ease: Power3.easeInOut
    }, 0.2, "-=1.5")

  })
 
  return (
    <body>
      <header>
        <a href="" class="logo">CatWalk</a>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="wrapper">
        <section className="hero">
          <div className="inner">
            <div className="clipper">
              <h1>Be discovered</h1>
            </div>

            <div className="anim-panel">
              <p className="subtitle">By the world's largest brands in the model industry. </p>
              <a href="#" className="read-btn primary">Register Now</a>
            </div>
          </div>      
        </section>

        <section className="sidebar">
          <div className="inner">
            <div className="clipper">
              <h2>About</h2>
            </div>
            <div className="anim-panel">
              <p>infor about the modeling agency</p>
              <a href="" class="read-btn">Reach out</a>
            </div>
          </div>
        </section>

        <section className="subscribe">
        <div className="inner">
          <div className="clipper">
            <h2>Subscribe</h2>
          </div>
          <div className="anim-panel">
            <p>subscribe to our newsletter of our latest digital fashion shows.</p>
            <input  type="text" name="email" placeholder="Your Email ..." />
            <button className="cta">Subscribe</button>
          </div>
        </div>

      </section>
      </div>
   
    </body>
  )
}



export default Layout;
