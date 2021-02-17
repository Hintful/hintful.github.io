import React from 'react';
import { motion } from 'framer-motion';
import ProjectView from './ProjectView';

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

const Projects = () => {
  return (  
    <motion.div className="projects page"
      variants={variants} 
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2><i class="fas fa-code emphasis"></i>&nbsp;Projects </h2>

      <ProjectView />
    </motion.div>
  );
}
 
export default Projects;