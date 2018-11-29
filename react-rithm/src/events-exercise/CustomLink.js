import React from 'react';

const CustomLink = props => {
  return (
    <div>
      <a href={props.href} target="_blank" onClick={props.handleClick}>
        {props.text}
      </a>
    </div>
  );
};

export default CustomLink;
