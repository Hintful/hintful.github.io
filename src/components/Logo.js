import React from 'react';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga';

const variants = {
  hidden: {
    opacity: 0
  },
  visible: i => ({
    opacity: 1,
    // y: [0, -10, 0],
    transition: {
      delay: 0.5 + 0.1 * i,
      duration: 0.7,
    }
  }),
  hover: {
    color: "skyblue",
    y: -10,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut"
    }
  }
}

const Logo = () => {
  const logoString = [..."< kurtchoi.dev />"];
  
  return (  
    <div className="logo">
      <h2
        onMouseEnter={() => {
          ReactGA.event({
            category: 'Hover Event',
            action: 'Hovered Logo text'
          });
        }}
      >
        { logoString.map((c,i) =>
          <motion.div style={{ display: "inline-block" }}
          custom={i} initial="hidden" animate="visible" 
          whileHover="hover"
          variants={variants}>{c}</motion.div> 
        )}
      </h2>
    </div>
  );
}
 
export default Logo;