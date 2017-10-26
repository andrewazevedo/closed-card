import React from 'react';

const CardBadges = ({ warnings }) => {
  if (warnings.length === 0) {
    return null;
  }
  
  return (
    <div className="pp-cards-badges">
      {warnings.map((warn, index) => {
        if (warn.type === 'LATE') {
          return <label key={index} className="pp-badges-warning">{warn.type}</label>;
        } else {
          return <label key={index} className="pp-badges-danger">{warn.type}</label>;
        }
      })}
    </div>
  );
}

export default CardBadges;
