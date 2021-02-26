import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ProjectView from './ProjectView';
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

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div className="projects page"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 style={{ color: theme.isDarkTheme ? theme.darkTheme.sub : theme.lightTheme.sub }}>
        <i class="fas fa-code emphasis"></i>&nbsp;Projects
      </h2>

      <ProjectView />
    </motion.div>
  );
}

export default Projects;