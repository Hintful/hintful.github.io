import React from 'react';
import { motion } from 'framer-motion'
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import toast, { Toaster } from 'react-hot-toast';

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

const notifyCVUnavailable = () => toast("Sorry, CV is not yet available.", {
  icon: '😢',
  duration: 5000
});

const notifyContact = () => toast("Please contact me directly. Thank you!", {
  icon: '😊',
  duration: 7000
})

const About = () => {
  return (  
    <motion.div className="about page"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2><i class="fas fa-code emphasis"></i>&nbsp;About </h2>
      <br/>
      <p>My name is <span className="emphasis"><strong>Kurt Choi</strong></span>, and I'm a &nbsp;
      <motion.div className="grad-emoji" style={{ display: "inline-block" }}
        animate={{
          y: [-3,-15,-3,-15,-3],
          transition: {
            type: "spring",
            repeat: Infinity,
            repeatDelay: 3
          }
        }}
      >🎓</motion.div>&nbsp;
      <span className="emphasis strong"><strong>New Grad Developer</strong></span>!</p>
      <p>I have studied and <span classname="emphasis strong">completed all degree requirements</span> in <span className="emphasis strong">University of Waterloo</span> as of December, 2020,
      and will be receiving <span className="emphasis strong">Bachelor's Degree in Computer Science</span> in June, 2021!</p>
      <p>My current field of interest is <span className="emphasis strong">Front End Web Development</span>, which I've been learning enthusiastically since late January of 2021.
      However, I'm still keen on learning more about <span className="emphasis strong">Software Engineering</span> as well!</p>
      <br/>
      
      <div className="cv-button-div">
        <AwesomeButton 
          type="primary"
          href=""
          size="large"
          // target="_blank"
          onPress={() => {
            notifyCVUnavailable();
            setTimeout(notifyContact, 1500);
          }}
          ripple
        >
          <i class="fas fa-file-alt"></i>&nbsp;&nbsp;Curriculum Vitae
        </AwesomeButton>
        <Toaster />
      </div>
    </motion.div>
  );
}
 
export default About;