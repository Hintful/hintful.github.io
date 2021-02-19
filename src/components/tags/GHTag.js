/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga';

const GHTag = ({link, project}) => {
  return (
    <a className="github-link" href={link} target="_blank"
      onClick={() => {
        ReactGA.event({
          category: 'Click Event',
          action: 'Clicked on ' + project + ' GitHub link'
        });
      }}
    >
      <div className="project-github">
       <i class="fab fa-github"></i> GitHub
      </div>
    </a>
  );
}
 
export default GHTag;