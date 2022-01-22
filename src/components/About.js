import React, { useContext } from 'react';
import { motion } from 'framer-motion'
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import toast, { Toaster } from 'react-hot-toast';
import ReactGA from 'react-ga';
import cv from "./doc/cv.pdf";
import { ThemeContext } from '../contexts/ThemeContext';

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
  const { theme } = useContext(ThemeContext);
  return (  
    <motion.div className="about page"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        color: theme.isDarkTheme ? theme.darkTheme.sub : theme.lightTheme.sub
      }}
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
      <span className="emphasis strong"><strong>New Grad Software Engineer</strong></span> located in <span className="emphasis strong">Toronto, ON, Canada</span>!</p>
      <p>I have graduated from <span className="emphasis strong">University of Waterloo</span> with a <span className="emphasis strong">Bachelor's Degree in Computer Science</span> in June, 2021.</p>
      <p>I'm currently working as a <span className="emphasis strong">Software Development Engineer</span> at <span className="emphasis strong">Amazon</span>. Feel free to reach out to me!</p>
      <br/>
      
      <div className="cv-button-div">
        <a href={cv} target="_blank" rel="noreferrer">
          <AwesomeButton 
            type= {theme.isDarkTheme ? "gplus" : "primary"}
            size="large"
            onPress={() => {
              ReactGA.event({
                category: 'Click Event',
                action: 'Clicked CV Button in About tab'
              });
              // notifyCVUnavailable();
              // setTimeout(notifyContact, 1500);
            }}
            ripple
          >
            <i class="fas fa-file-alt"></i>&nbsp;&nbsp;Curriculum Vitae
          </AwesomeButton>
        </a>
        <Toaster />
      </div>
    </motion.div>
  );
}
 
export default About;