import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from "typewriter-effect";

const variants = {
  hidden: {
    y: -50,
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      delay: 1,
      when: "beforeChildren"
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 1.2,
      ease: 'easeInOut'
    }
  }
}

const Home = () => {
  
  return (  
    <motion.div className="home"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <motion.div className="intro-text"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        Hi&nbsp;
        <motion.div className="hi-emoji" style={{ display: "inline-block" }}
          animate={{ 
            rotate: [0,30,0,30,0], 
            transition: { 
              type: "spring", 
              repeat: Infinity, 
              repeatDelay: 3 
            } }}
        >👋</motion.div><br/>
        My name is <span style={{color: 'skyblue'}}>Kurt</span>!
        <motion.div className="typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          
          <Typewriter 
            // set typewriter options
            options={{
              autoStart: true,
              loop: true
            }}

            // set onInit
            onInit={(typewriter) => {typewriter
              // typewriter actions
              .pauseFor(2000)
              .typeString("I'm a <span style='color: skyblue'>Software Engineer</span>!")
              .pauseFor(1500)
              .deleteChars(18)
              .pauseFor(500)
              .typeString("<span style='color: skyblue'>Web Developer</span>!")
              .pauseFor(1500)
              .deleteChars(17)
              .pauseFor(500)
              .typeString("an <span style='color: skyblue'> Avid Learner</span>!")
              .pauseFor(1500)
              .deleteAll()
              .start();
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
 
export default Home;