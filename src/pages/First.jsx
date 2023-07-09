import React from 'react'
import poster from '../assets/poster.jpg'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'

export default function First() {
  let {scrollYProgress} = useScroll();
  let y = useTransform( scrollYProgress, [0,1], ["0%","100%"])
  return (
    <motion.div className='first-container'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,ease:"easeOut"}}>
      <motion.header
       className='d-flex justify-content-between'
       
      >
        <h1>DORA</h1>
        <p><strong>EXPLORE</strong></p>
        <h1>STUDIO</h1>
      </motion.header>

      <div className='first-image'>
        <motion.img src={poster} alt="" 
        initial={{
          borderRadius:"100%"
        }}
        whileInView={{
          borderRadius:"0"

        }}
        transition={{
          duration:1,
          type: "smooth",
        }}/>
      </div>

      <div className="socials d-flex justify-content-between">
        <div className='d-flex flex-start'>
          <h6 className='pe-1'>INSTAGRAM</h6>
          <h6 className='ps-1'>TICKTOK</h6>
        </div>
        <div>
          <h6>CONTACT</h6>
        </div>

      </div>

    </motion.div>
  )
}
