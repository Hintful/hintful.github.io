import React, { useEffect } from 'react';
import ProjectElement from './ProjectElement';


const ProjectView = () => {

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
      img: "./img/project/calc_js.png",
      title: "calc.js",
      date: "Feb, 2021",
      githubLink: "https://github.com/Hintful/calc.js",
      desc: "A simple React/JavaScript-based calculator application. The expression evalulation follows the formula logic, where the order of operations is conserved.",
      tags: ['React','JavaScript','SCSS','HTML'],
      demoLink: "https://kurtchoi.dev/calc.js"
    },
    // #3
    {
      img: "./img/project/reactpad.png",
      title: "ReactPad",
      date: "Feb, 2021",
      githubLink: "https://github.com/Hintful/ReactPad",
      desc: "A React-based application that mimics the functionality of a simple 3x3 beatpad. Project has made use of various React event handlers to allow these functionalities.",
      tags: ['React', 'JavaScript', 'SCSS', 'HTML'],
      demoLink: "https://kurtchoi.dev/ReactPad"
    }
  ]
  return (  
    <div className="project-view">
      { projects.map(project => (
        <ProjectElement project={project} />
      )) }
    </div>
  );
}
 
export default ProjectView;