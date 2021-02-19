/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga';

const Certificate = ({certificate}) => {
  return (  
    <motion.div data-tip={certificate.date} data-place="left" className="certificate-item"
      whileHover={{
        x: 10
      }}
    >
      <i class="far fa-star emphasis"></i> &nbsp;{certificate.name}
      <span class="certificate-description">(from &nbsp;<i class="fab fa-free-code-camp" id="freecodecamp-icon"></i> freeCodeCamp.org)</span>
      <div class="certificate-link">
        <a href={certificate.link} target="_blank"
          onClick={() => {
            ReactGA.event({
              category: 'Click Event',
              action: 'Clicked ' + certificate.name + ' Link'
            });
          }}
        >
          <i class="fas fa-external-link-alt emphasis"></i>
        </a>
      </div>
    </motion.div>
  );
}
 
export default Certificate;