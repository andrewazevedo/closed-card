import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClosedCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    warnings: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    subtitles: PropTypes.array.isRequired,
    createdTime: PropTypes.string.isRequired,
    updatedTime: PropTypes.string.isRequired,
    currentTime: PropTypes.string.isRequired,
    assignee: PropTypes.array.isRequired,
    cardParentName: PropTypes.array.isRequired,
  };

  render() {
    const { title, labels, warnings, image, subtitles, createdTime, updatedTime, currentTime, assignee, cardParentName } = this.props;

    return (
      <div className="pp-card-wrap">
        <div className="pp-card" draggable="true">
          <div className="pp-card-header">
            <div className="pp-header-elements">
              <div className="pp-card-label">
                {labels.map((label, index) => {
                  return(
                    <span key={index} className="pp-tooltip" data-title={label.title} style={{ background: label.backgroundColor }} />
                  )
                })}
              </div>
              <div className="pp-cards-badges">
                {warnings.map((warn, index) => {
                  if (warn.type === 'LATE') {
                    return <label key={index} className="pp-badges-warning">{warn.type}</label>;
                  } else {
                    return <label key={index} className="pp-badges-danger">{warn.type}</label>;
                  }
                })}
              </div>
            </div>
          </div>
          <div className="pp-card-content">
            <span className=" pp-trigger-subtasks pp-ico-bold-arrow-right"></span>
            <p>{title}</p>
            <div className="pp-card-subtitles">
              <span> <img src={image} alt="center" /> </span>
              {subtitles.map((sub, index) => <span key={index}>{sub}</span>)}
              <div className="pp-card-footer">
                <div className="pp-footer-stats">
                  <span className="pp-tooltip-top" data-title={createdTime + ' this Pipe'}>
                    <i className="pp-color-warning pp-ico-time"></i>
                    <span>{createdTime}</span>
                  </span>
                  <span className="pp-tooltip-top" data-title={currentTime + ' in this Phase'}>
                    <i className="pp-color-success pp-ico-phase"></i>
                    <span>{currentTime}</span>
                  </span>
                  <span className="pp-tooltip-top" data-title={'Last updated ' + updatedTime + ' ago'}>
                    <i className="pp-color-info pp-ico-refresh"></i>
                    <span>{updatedTime}</span>
                  </span>
                </div>
                <div className="pp-card-users">
                  <div className="pp-tooltip-left" data-title={assignee[0].name}>
                    <img className="pp-round" src={assignee[0].photo} alt="user"/>
                  </div>
                  {assignee[1] ? <span className="pp-more">+1</span> : null}
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default ClosedCard;
