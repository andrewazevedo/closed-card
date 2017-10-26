import React from 'react';

const FooterStats = ({ times }) => {
  if (times.length === 0) {
    return null;
  }

  return (
    <div className="pp-footer-stats">
      {times.map((time, index) => {
        if (time.type === 'createdTime') {
          return (
            <span key={index} className="pp-tooltip-top" data-title={time.value + ' this Pipe'}>
              <i className="pp-color-warning pp-ico-time"></i>
              <span>{time.value}</span>
            </span>
          )
        } else if (time.type === 'currentTime') {
          return (
            <span key={index} className="pp-tooltip-top" data-title={time.value + ' in this Phase'}>
              <i className="pp-color-success pp-ico-phase"></i>
              <span>{time.value}</span>
            </span>
          )
        } else {
          return (
            <span key={index} className="pp-tooltip-top" data-title={time.value + ' this Pipe'}>
              <i className="pp-color-info pp-ico-refresh"></i>
              <span>{time.value}</span>
            </span>
          )
        }
      })}
    </div>
  );
}

export default FooterStats;
