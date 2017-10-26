import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardLabels from './card-labels';
import CardBadges from './card-badges';
import FooterStats from './footer-stats';
import CardUsers from './card-users';
import ParentCardTitle from './parent-card-title';

class ClosedCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    warnings: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    subtitles: PropTypes.array.isRequired,
    times: PropTypes.array.isRequired,
    assignee: PropTypes.array.isRequired,
    cardParentName: PropTypes.array.isRequired,
  };

  render() {
    const { title, labels, warnings, image, subtitles, times, assignee, cardParentName } = this.props;

    return (
      <div className="pp-card-wrap">
        <div className="pp-card" draggable="true">
          <div className="pp-card-header">
            <div className="pp-header-elements">
              <CardLabels labels={labels} />
              <CardBadges warnings={warnings} />
            </div>
          </div>
          <div className="pp-card-content">
            <span className=" pp-trigger-subtasks pp-ico-bold-arrow-right"></span>
            <p>{title}</p>
            <div className="pp-card-subtitles">
              <span> <img src={image} alt="center" /> </span>
              {subtitles.map((sub, index) => <span key={index}>{sub}</span>)}
              <div className="pp-card-footer">
                <FooterStats
                  times={times}
                />
                <CardUsers assignee={assignee} />
              </div>
            </div>
            <ParentCardTitle cardParentName={cardParentName} />
          </div>
        </div>
      </div>
    );
  }
}

export default ClosedCard;
