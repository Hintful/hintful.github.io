/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { motion } from 'framer-motion';

const SkillElement = ({skill}) => {
  return (  
    <motion.div class="skill-element"
      drag
      dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
      dragElastic={0.5}
      whileHover={{
        scale: 1.2,
        transition: {
          type: "tween",
          duration: 0.5,
          yoyo: Infinity
        }
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