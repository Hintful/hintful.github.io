import React, { useState, useEffect } from 'react';
import ProjectElement from './ProjectElement';
import { motion } from 'framer-motion';

const NUM_MAIN_PROJECT = 3; // number of projects shown before collapsable menu

const ProjectView = () => {

  const [expandProjectMenu, setExpandProjectMenu] = useState(false);

  const toggleExpandProject = () => {
    setExpandProjectMenu(!expandProjectMenu);
  }

  const projects = [
    // #1
    {
      img: "./img/project/todo-list.png",
      title: "To-do List",
      date: "Feb, 2021",
      githubLink: "https://github.com/Hintful/TodoList",
      desc: "A React-based application that keeps track of user's To-do List, where user can interactively add or remove various tasks. Supports saving via local storage.",
      tags: ['React','JavaScript','CSS','HTML'],
      demoLink: "https://kurtchoi.dev/TodoList"
    },

    {
      img: "./img/project/pomo-timer.png",
      title: "Pomo Timer",
      date: "Feb, 2021",
      githubLink: "https://github.com/Hintful/pomo-timer",
      desc: "A React/JavaScript-based timer application that is designed for the usage of Pomodoro technique.",
      tags: ['React','JavaScript', 'SCSS', 'HTML'],
      demoLink: "https://kurtchoi.dev/pomo-timer"
    },
    // #2
    {
      img: "./img/project/game_of_ur_ai.png",
      title: "The Royal Game of Ur AI",
      date: "Dec, 2020",
      githubLink: "https://github.com/Hintful/game-of-ur-genetic-algorithm",
      desc: "A collaborative project on developing an AI agent that can play the oldest known board game in history, The Royal Game of Ur, using Genetic Algorithm approach with standard crossover and mutation functions.",
      tags: ['Python', 'Artificial Intelligence'],
      demoLink: ""
    },
    {
      img: "./img/project/calc_js.png",
      title: "calc.js",
      date: "Feb, 2021",
      githubLink: "https://github.com/Hintful/calc.js",
      desc: "A simple React/JavaScript-based calculator application. The expression evalulation follows the formula logic, where the order of operations is conserved.",
      tags: ['React','JavaScript','SCSS','HTML'],
      demoLink: "https://kurtchoi.dev/calc.js"
    },
    {
      img: "./img/project/reactpad.png",
      title: "ReactPad",
      date: "Feb, 2021",
      githubLink: "https://github.com/Hintful/ReactPad",
      desc: "A React-based application that mimics the functionality of a simple 3x3 beatpad. Project has made use of various React event handlers to allow these functionalities.",
      tags: ['React', 'JavaScript', 'SCSS', 'HTML'],
      demoLink: "https://kurtchoi.dev/ReactPad"
    },
    {
      img: "./img/project/viewer_md.png",
      title: "viewer.md",
      date: "Feb, 2021",
      githubLink: "https://github.com/Hintful/viewer.md",
      desc: "A simple React-based Markdown viewer - Markdown sanitized with DOMPurify and parsed with Marked.js.",
      tags: ['React', 'JavaScript', 'SCSS', 'HTML'],
      demoLink: "https://kurtchoi.dev/viewer.md"
    },
    {
      img: "./img/project/random_quote_generator.png",
      title: "Random Quote Generator",
      date: "Feb, 2021",
      githubLink: "https://github.com/Hintful/random-quote-generator",
      desc: "A simple React-based that generates random quotes. A JSON file containing various quotes is fetched via fetch() API, and parsed to be stored internally.",
      tags: ['React','JavaScript', 'CSS','jQuery','HTML'],
      demoLink: "https://kurtchoi.dev/random-quote-generator"
    }
  ]
  return (  
    <div className="project-container">
      <div className="project-view">
        { projects.slice(0, NUM_MAIN_PROJECT).map(project => (
          <ProjectElement project={project} />
        )) }
      </div>
      
      { !expandProjectMenu ? 
        <div className="project-expand-button" onClick={() => toggleExpandProject()}>
          View more projects &nbsp;<i class="fas fa-caret-down fa-lg"></i>
        </div>
        :
        <div className="project-expand-button" onClick={() => toggleExpandProject()}>
          Fold menu &nbsp;<i class="fas fa-caret-up fa-lg"></i>
        </div>
      }

      { /* projects under collapsable menu */ }
      { expandProjectMenu && 
        <motion.div className="project-view"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1.5
            }
          }}
          exit={{
            opacity: 0
          }}
        >
          { projects.slice(NUM_MAIN_PROJECT, projects.length).map(project => (
            <ProjectElement project={project} />
          ))}
        </motion.div>
      }
    </div>    
  );
}
 
export default ProjectView;