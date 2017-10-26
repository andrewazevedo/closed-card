import React from 'react';

const CardLabels = ({ labels }) => {
  if (labels.length === 0) {
    return null;
  }
  
  return (
    <div className="pp-card-label">
      {labels.map((label, index) => {
        return (
          <span key={index} className="pp-tooltip" data-title={label.title} style={{ background: label.backgroundColor }} />
        )
      })}
    </div>
  );
}

export default CardLabels;
