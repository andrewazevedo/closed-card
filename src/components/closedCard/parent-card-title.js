import React from 'react';

// quando o cardParentName for vazio renderizar nada.

const ParentCardTitle = ({ cardParentName }) => {
  if (cardParentName.length === 0) {
    return null;
  }
  return (
    <div className="pp-parent-card-title">
      <ul>
        {cardParentName.map((name, index) => {
          return (
            <li key={index}>
              <span className="pp-trigger-subtasks-sm pp-ico-bold-arrow-right"></span>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default ParentCardTitle;
