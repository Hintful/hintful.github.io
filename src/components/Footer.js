/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import ReactGA from 'react-ga';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      staggerChildren: 0.5
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1.5
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3
    }
  }
}

const Footer = () => {
  return (
    <motion.div className="footer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactTooltip place="top" type="dark" effect="solid"/>
      <a href="https://github.com/Hintful" target="_blank"
        onClick={() => {
          ReactGA.event({
            category: 'Click Event',
            action: 'Clicked Footer GitHub button'
          });
        }}
      >
        <div className="contact-info">
          <p data-tip="GitHub"><i class="fab fa-github-square fa-2x"></i></p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/kurt-c-a75a2a102/" target="_blank"
        onClick={() => {
          ReactGA.event({
            category: 'Click Event',
            action: 'Clicked Footer LinkedIn button'
          });
        }}
      >
        <div className="contact-info">
          <p data-tip="LinkedIn"><i class="fab fa-linkedin fa-2x"></i></p>
        </div>
      </a>
      <a href="https://instagram.com/hx.rim" target="_blank"
        onClick={() => {
          ReactGA.event({
            category: 'Click Event',
            action: 'Clicked Footer Instagram button'
          });
        }}
      >
        <div className="contact-info">
          <p data-tip="Instagram"><i class="fab fa-instagram-square fa-2x"></i></p>
        </div>
      </a>
    </motion.div>
  );
}
 
export default Footer;