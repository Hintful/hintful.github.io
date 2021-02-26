import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const SkillTag = ({skill}) => {
  const { theme } = useContext(ThemeContext);
  const projectTagClass = theme.isDarkTheme ? "project-tag project-tag-dark" : "project-tag project-tag-light";
  return (  
    <div className={projectTagClass}>
      {skill}
    </div>
  );
}
 
export default SkillTag;