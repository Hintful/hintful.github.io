import React from 'react';

const DateTag = ({date}) => {
  return (  
    <div className="project-date">
      <i class="far fa-calendar-alt"></i> {date}
    </div>
  );
}
 
export default DateTag;