

import React, { useRef, useEffect, useState} from "react"
import gsap from 'gsap';
import {Link} from 'gatsby';
import Form from './form'
import "../style/main.scss";




function Home() {
  

  let app = useRef(null)
  // let section = useRef(null)
  // let content = useRef(null)
  
  const [tl] = useState(gsap.timeline({ delay: 0.8 }))
  
  // let tl = new TimelineMax()

  useEffect(() => {

    tl.from(app, 0, {
      css: {visibility: "visible"},
    })
    
    tl.staggerFrom('section', 2, {
      opacity: 0,
      scale: .5,
      ease: "power3.easeOut"
    }, 0.2)

    tl.staggerFrom('h1, h2', .5, {
      opacity: 0,
      y: -40,
      ease:  "power3.easeOut"
    }, 0.2, "-=2")

    tl.staggerFrom('.anim-panel', 1, {
      opacity: 0,
      y: -40,
      ease:  "power3.easeOut"
    }, 0.2, "-=1.5")

  })
 
  return (
    <body ref={el => (app = el)}>
      <header>
        <a href="" className="logo">CatWalk</a>
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
        <section className="hero" >
          <div className="inner">
            <div className="clipper">
              <h1>Be discovered</h1>
            </div>

            <div className="anim-panel">
              <p className="subtitle">By the world's largest brands in the model industry. </p>
              <a href="/register" className="read-btn primary" >
                Register Now
              </a>
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



export default Home;
