import React from 'react';

const CardUsers = ({ assignee }) => {
  if (assignee.length === 0) {
    return null;
  }

  return (
    <div className="pp-card-users">
      <div className="pp-tooltip-left" data-title={assignee[0].name}>
        <img className="pp-round" src={assignee[0].photo} alt="user"/>
      </div>
      <span className="pp-more">+{assignee.length - 1}</span>
    </div>
  );
}

export default CardUsers;
