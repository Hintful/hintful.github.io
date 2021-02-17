import React, { useEffect } from 'react';
import DateTag from './tags/DateTag';
import GHTag from './tags/GHTag';
import { motion } from 'framer-motion';
import SkillTag from './tags/SkillTag';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectElement = ({project}) => {
  
  return (  
    <div className="project-element">
      <div className="project-img">
        <motion.img src={require(`${project.img}`).default}
          whileHover={{
            scale: 1.2,
            transition: {
              type: 'spring',
              bounce: 0.6
            }
          }}
        />
      </div>
      <div className="project-info">
        <div className="project-info-top">
          <div className="project-title">
            <span className="emphasis"><i class="fas fa-chevron-right"></i></span>
            <motion.div classname="title" style={{ display: 'inline-block', paddingLeft: 10 }}
              animate={{
                x: 10
              }}
              transition={{
                x: {
                  duration: 2,
                  type: "tween",
                  yoyo: Infinity
                },
              }}
            > {project.title}</motion.div>
          </div>
        </div>
        <div className="project-info-second">
          <DateTag date={project.date} />
          <GHTag link={project.githubLink} />
        </div>
        <hr/>
        <div className="project-description">
          {project.desc}
        </div>
        <div className="project-tags">
          { project.tags.map(tag => (
            <SkillTag skill={tag}/>
          )) }
        </div>
        <div className="project-demo">
            <AwesomeButton
              type="primary"
              size="large"
              href={project.demoLink}
              target="_blank"
              ripple="true"
            >
              <i class="fas fa-play"></i>&nbsp;Live Demo
            </AwesomeButton>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectElement;