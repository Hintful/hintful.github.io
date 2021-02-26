/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga';
import { ThemeContext } from '../../contexts/ThemeContext';

const GHTag = ({link, project}) => {
  const { theme } = useContext(ThemeContext);
  const githubClass = theme.isDarkTheme ? "project-github project-github-dark" : "project-github project-github-light";

  return (
    <a className="github-link" href={link} target="_blank"
      onClick={() => {
        ReactGA.event({
          category: 'Click Event',
          action: 'Clicked on ' + project + ' GitHub link'
        });
      }}
    >
      <div className={githubClass}>
       <i class="fab fa-github"></i> GitHub
      </div>
    </a>
  );
}
 
export default GHTag;