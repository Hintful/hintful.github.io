/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga';

const SkillElement = ({skill, size}) => {
  return (  
    <motion.div class="skill-element" style={{width: size, height: size}}
      drag
      dragConstraints={{ left: -700, right: 700, top: -700, bottom: 700 }}
      dragElastic={0.5}
      whileHover={{
        scale: 1.2,
        transition: {
          type: "tween",
          duration: 0.5,
          yoyo: Infinity
        }
      }}
      onMouseDown={() => {
        ReactGA.event({
          category: 'Click Event',
          action: 'Clicked on ' + skill.name + ' Skill Grid'
        });
      }}
    >
      <div class="skill-img">
        <img src={require(`${skill.img}`).default} />
      </div>
      <div class="skill-name">
        {skill.name}
      </div>
    </motion.div>
  );
}
 
export default SkillElement;