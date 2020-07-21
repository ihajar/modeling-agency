import React, { useRef, useEffect, useState} from  'react';
import gsap from 'gsap';
import '../style/main.scss'


function Form() {
    let dash = useRef(null)
    const [tl] = useState(gsap.timeline({ delay: 0.8 }))
    useEffect(() => {

        tl.from(dash, 0, {
          css: {visibility: "visible"},
        })
        
        tl.staggerFrom('.right', 2, {
          opacity: 0,
          scale: .5,
          ease: "power3.easeOut"
        }, 0.2)
    
        tl.staggerFrom('.left', .5, {
          opacity: 0,
          scale: .5,
          ease:  "power3.easeOut"
        }, 0.2, "-=2")
    
        // tl.staggerFrom('form', 1, {
        //   opacity: 0,
        //   scale: .5,
        //   ease:  "power3.easeOut"
        // }, 0.2, "-=1.5")
    
      })

        return (
            <div className="section-form" ref={el => (dash = el)}>
                

                <div className="container">
                    <div className="inner-form">
                        <div className="left">
                            <a href="/" className="logo">CatWalk</a>
                        </div>
                        <div className="right">
                            <p className="input-text">We'll get in touch with you</p>
                            <form method="post" action="https://www.flexyform.com/f/420e3c97bc7e422a37fcf2968db599762602e723" enctype="multipart/form-data">
                                <div className="name-input">
                                    <input type="text" name="fullname" placeholder="Full Name" required  />
                                </div>
                                <div className="email-input">
                                    <input type="email" name="email" placeholder="Email" required  />
                                </div>
                                
                                <div className="attachment">
                                    <p>
                                    <label className="input-text">Add your image/ video </label>
                                    <input type="file" name="attached"/>
                                    </p>
                                </div>
                                <button className="ftn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                    
                    

          
        );
    
}


export default Form;