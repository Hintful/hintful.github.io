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

const notifyEmailCopySuccess = () => toast.success("E-mail has been copied to your clipboard!");

const Contact = () => {
  return (  
    <motion.div className="contact page"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2><i class="fas fa-code emphasis"></i>&nbsp;Contact </h2>

      <div className="contact-content-div">
        <span className="contact-desc">
          Please feel free to contact me anytime!
        </span>

        <div className="contact-box">
          <AwesomeButton
            type="secondary"
            size="medium"
            ripple
            onPress={() => {
              navigator.clipboard.writeText("choi.kurt3@gmail.com");
              notifyEmailCopySuccess();
            }}
          >
            <i class="far fa-envelope"></i>&nbsp;Copy E-mail
          </AwesomeButton>
          <AwesomeButton 
            type="linkedin"
            href="https://www.linkedin.com/in/kurt-c-a75a2a102/"
            size="medium"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>&nbsp;LinkedIn
          </AwesomeButton>
          <AwesomeButton 
            type="github"
            href="https://github.com/Hintful"
            size="medium"
            target="_blank"
          >
            <i class="fab fa-github"></i>&nbsp;GitHub
          </AwesomeButton>
          <AwesomeButton 
            type="instagram"
            href="https://instagram.com/hx.rim"
            size="medium"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>&nbsp;Instagram
          </AwesomeButton>
          <Toaster />
          
        </div>
      </div>
    </motion.div>
  );
}
 
export default Contact;