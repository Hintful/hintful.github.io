import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

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
    x: 5,
  }
}

const Navbar = () => {
  
  const { theme } = useContext(ThemeContext);

  /* menu label states/functions */
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

  /* menu context states */
  const [menu, setMenu] = useState(0);
  const addEmphasis = " emphasis";

  return (  
    <div class="navbar">
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        
      >
        { links.map((link, i) => (
          <motion.li
            onClick={() => setMenu(i)} // for visual indication of current page on navbar
            onMouseEnter={() => toggleLabel(link.labelVisible, link.toggleLabel)} 
            onMouseLeave={() => toggleLabel(link.labelVisible, link.toggleLabel)}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={menuItemVariants}
            style={{
              color: theme.isDarkTheme ? theme.darkTheme.sub : theme.lightTheme.sub
            }}
          >
            <Link to={link.url}>
              <motion.div className="menu-container"

                whileHover="hover"
                variants={menuItemVariants}
              >
                {(showText[i] || menu === i) && <span className="menu-label emphasis">{link.page}</span>}
                {menu === i ? <i class={link.icon + addEmphasis}></i> : <i class={link.icon}></i>}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      
      </motion.ul>
    </div>
  );
}
 
export default Navbar;