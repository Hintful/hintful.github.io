import React from 'react';
import { motion } from 'framer-motion';
import SkillElement from './SkillElement';
import ReactTooltip from 'react-tooltip';
import Certificate from './Certificate';

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
const Skills = () => {
  const skillsArray = [
    { name: "Python", img: "./img/icon/python.svg" },
    { name: "JavaScript", img: "./img/icon/js.svg" },
    { name: "C", img: "./img/icon/c.svg" },
    { name: "C++", img: "./img/icon/cpp.svg" },
    { name: "Java", img: "./img/icon/java.svg" },
    { name: "CSS3", img: "./img/icon/css3.svg" },
    { name: "Sass", img: "./img/icon/sass.svg" },
    { name: "HTML5", img: "./img/icon/html5.svg" },
    { name: "React.js", img: "./img/icon/react.png" },
    { name: "Bootstrap", img: "./img/icon/bootstrap.svg" },
    { name: "jQuery", img: "./img/icon/jquery.svg" },
    { name: "Firebase", img: "./img/icon/firebase.svg" },
    { name: "SQL", img: "./img/icon/sql.svg" },
    { name: "Scheme", img: "./img/icon/scheme.svg" },
    { name: "Git", img: "./img/icon/git.png" },
    { name: "Linux", img: "./img/icon/linux.svg" },
    { name: "Bash", img: "./img/icon/bash.svg" },
    { name: "Framer Motion", img: "./img/icon/framer-motion.svg" },
    { name: "LaTeX", img: "./img/icon/latex.svg" },
    { name: "Photoshop", img: "./img/icon/photoshop.svg" },
    { name: "Word", img: "./img/icon/msword.svg" },
    { name: "Excel", img: "./img/icon/msexcel.svg" }
  ]

  const certificateArray = [{ 
    name: "Responsive Web Design Certification", 
    link: "https://www.freecodecamp.org/certification/hintful/responsive-web-design",
    date: "Jan 27th, 2021"
  }, {
    name: "JavaScript Algorithms and Data Structures Certification",
    link: "https://www.freecodecamp.org/certification/hintful/javascript-algorithms-and-data-structures",
    date: "Feb 3rd, 2021"
  }, {
    name: "Front End Libraries Certification",
    link: "https://www.freecodecamp.org/certification/hintful/front-end-libraries",
    date: "Feb 9th, 2021"
  }
  ]
  return (  
    <motion.div className="skills page"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ReactTooltip place="top" type="dark" effect="solid"/>
      <h2><i class="fas fa-code emphasis"></i>&nbsp;Skills and Certifications </h2>
      
        <div className="skills-content-container">
          <div className="skills-title title">
            <i class="fas fa-code emphasis"></i> Skills
          </div>
          <div className="skills-grid-desc">
            These tiles are <motion.div className="emphasis strong" style={{ display: 'inline-block' }}
              animate={{
                y: [0,-5,5,-5,5,0],
                transition: {
                  yoyo: Infinity,
                  repeatDelay: 3
                }
              }}
            >draggable</motion.div>!
          </div>
          <div className="skills-grid">
            { skillsArray.map(skill => (
              <SkillElement skill={skill} />
            ))}
          </div>

          <div className="skills-content-divider"></div>

          <div className="certificate-title title">
            <i class="fas fa-code emphasis"></i> Certifications
          </div>
          <div className="certificate-list">
            { certificateArray.map(certificate => (
              <Certificate certificate={certificate} />
            ))}
              {/* <Certificate certificate={{name: "Responsive Web Design Certification", link: "https://www.freecodecamp.org/certification/hintful/responsive-web-design", date: "Jan 27th, 2021"}}/> */}
          </div>
        </div>
      
    
    </motion.div>
  );
}
 
export default Skills;