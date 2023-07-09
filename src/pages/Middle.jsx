import React from 'react'
import photo1 from '../assets/photo1.webp'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.webp'
import photo4 from '../assets/photo4.jpg'
import poster from '../assets/poster.jpg'
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'

 

export default function Middle() {

  let {scrollYProgress} = useScroll();
  let y = useTransform( scrollYProgress, [0,1], ["0%","100%"])
 const [width ,setwidth] = useState(0);
 const Carousel = useRef(null);
 useEffect(() => {
   
   setwidth(Carousel.current.scrollWidth - Carousel.current.offsetWith)
 
   
 }, [])
 
 
  return (
   <>
     <motion.div className='second-container' 
     initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.75,ease:"easeOut"}}>
       <motion.header className=' d-flex justify-content-between'
       initial={{
        y:-100
      }}
      whileInView={{
        y:1
      }}
      transition={{
        duration:1.3,
        type:"spring",
        damping:20
        
      }}
       >
        <h1>DORA</h1>
        <p className=''><strong>PROJECTS</strong></p>
        <h1>STUDIO</h1>
      </motion.header>

      <div className='scond-text px-5 '>
        <p className='text-center text-white py-5'>
          MAKE YOUR BRAND STYLISH AND ON-TREND WITH STUNRNING VISUALS BY BOOKING WITH OUR TALENTED CONTENT CREATORS
        </p>
      </div>

      < >
        <motion.div ref={Carousel} className='carousel my-4 h-100 w-100' >
          <motion.div className="first-set inner-carousel d-flex"
           drag= "x"
           
           draggable

            dragConstraints={{right:0 ,left:-550}}
           
            transition={{
              type:"tween",
              damping:20,
              stiffness:150,
              
              
            }}
          >
            <motion.img src={photo1}alt="" 
              draggable
            />
            <motion.img src={photo2}alt="" 
              draggable

            />
            <motion.img src={photo3}alt="" 
              draggable

            />
            <motion.img src={photo4}alt="" 
               draggable

           
            />
            <motion.img src={poster}alt="" 
               draggable

            

            />

          </motion.div>

        </motion.div>
    
      </>
    </motion.div>
   
   </>
  )
}
