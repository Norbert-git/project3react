import React from 'react';
import './ToolCard.scss'

const ToolCard = (props) => {
  return (
    <div className="ToolCard">
    <ul>

      <li>{ props.name }</li>
      </ul>
    </div>
  );
}

export default ToolCard;
