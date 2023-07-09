import React from 'react'
import photo2 from '../assets/photo2.jpg'
import { motion } from 'framer-motion'


export default function Last() {
  return (
    <motion.div className='last-container'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.75,ease:"easeOut"}}>
      <div className="d-flex section  ">
        <div className="first-section py-1 px-1 ">
          <div className=" d-flex address  ">
            <div >
            <p>DORA STUDIO</p>
            <p>71 LEONARD ST</p>
            <p>LONDON</p>
            <p>EC2A 4QS</p>
            </div>
            <div className='pe-2'>
              <p>BRAND CATEGORIES OUR</p>
              <p>PHOTOGRAPHERS</p>
              <p>SPECIALISE IN</p>
            </div>
          </div>

          <div className='py-4 text-center tt'>
            <h1>CONTACT</h1>
          </div>
        <div className='con'>
          <p>HELLO@DORASTUDIO.COM</p>
          <p>IG: DORA_STUDIO</p>
          <p>TIK TOCK: DORA_STUDIO</p>
        </div>
        
        </div>
        

        <div className="second-section">
          <img src={photo2} alt="" />
        </div>
      </div>
    </motion.div>
  )
}
