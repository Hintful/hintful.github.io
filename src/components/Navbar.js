import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// motion variants
const listVariants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5
    }
  },
  hover: {
    x: 5,
    rotate: 5,
    // textShadow: "0px 0px 15px rgb(85,206,235)",
    transition: {
      duration: 0.2
    }
  }
}

const menuItemVariants = {
  hidden: {
    x: 20,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  hover: {
    // color: "skyblue",
    x: 5,
  }
}

const Navbar = () => {
  
  const [homeTextVisible, setHomeTextVisible] = useState(false);
  const [aboutTextVisible, setAboutTextVisible] = useState(false);
  const [projectsTextVisible, setProjectsTextVisible] = useState(false);
  const [skillsTextVisible, setSkillsTextVisible] = useState(false);
  const [contactTextVisible, setContactTextVisible] = useState(false);
  const showText = [homeTextVisible, aboutTextVisible, projectsTextVisible,
                    skillsTextVisible, contactTextVisible];

  const links = [
    { page: "Home", url: "/", icon: "fas fa-home", link: "#", labelVisible: homeTextVisible, toggleLabel: setHomeTextVisible },
    { page: "About", url: "/about",  icon: "fas fa-user", link: "#", labelVisible: aboutTextVisible, toggleLabel: setAboutTextVisible },
    { page: "Projects", url: '/projects', icon: "far fa-eye", link: "#", labelVisible: projectsTextVisible, toggleLabel: setProjectsTextVisible },
    { page: "Skills", url: '/skills', icon: "fas fa-star", link: "#", labelVisible: skillsTextVisible, toggleLabel: setSkillsTextVisible },
    { page: "Contact", url: "/contact", icon: "fas fa-envelope", link: "#", labelVisible: contactTextVisible, toggleLabel: setContactTextVisible }
  ]

  const toggleLabel = (visible, setVisible) => {
    setVisible(!visible);
  }

  return (  
    <div class="navbar">
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        { links.map((link, i) => (
          <motion.li
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={menuItemVariants}
          >
            {/* <a href={link.link}> */}
            <Link to={link.url}>
              <motion.div className="menu-container" onMouseEnter={() => toggleLabel(link.labelVisible, link.toggleLabel)} onMouseLeave={() => toggleLabel(link.labelVisible, link.toggleLabel)}
                whileHover="hover"
                variants={menuItemVariants}
              >
                {showText[i] && <span className="menu-label">{link.page}</span>}
                 <i class={link.icon}></i>
              </motion.div>
            {/* </a> */}
            </Link>
          </motion.li>
        ))}
      
      </motion.ul>
    </div>
  );
}
 
export default Navbar;