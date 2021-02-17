/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { motion } from 'framer-motion';

const GHTag = ({link}) => {
  return (
    <a className="github-link" href={link} target="_blank">
      <div className="project-github">
       <i class="fab fa-github"></i> GitHub
      </div>
    </a>
  );
}
 
export default GHTag;