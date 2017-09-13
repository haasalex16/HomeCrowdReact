import React from 'react';
import PropTypes from 'prop-types';

function BarInfo(props) {
  return (
    <div className={props.barInfoActive ? 'bar-info active' : 'bar-info'}>
      <span className='bar-info-text'>
        <p
          className='close-button'
          onClick={() => props.handleCloseClick()}
          role='presentation'
        >
          X
        </p>
        <p className='bar-info-name'>{props.barInfo.name}</p>
        <address>{props.barInfo.address}</address>
        <h1>{props.barInfo.phoneNumber}</h1>
        <span className='bar-info-teams-container'>
          {
            (props.barInfo.loyalties || []).map((loyalty) => {
              const groupElement = loyalty.group ? (
                <a
                  target='_blank'
                  className='bar-info-team-name'
                  href={loyalty.group.website}
                >
                  {loyalty.group.name}
                </a>
              ) : null;
              return (
                <span className='bar-info-team-container'>
                  <img className='bar-info-team-icon' src={loyalty.team.iconUrl} alt={loyalty.team.name} />
                  { groupElement }
                </span>
              );
            })
          }
        </span>
      </span>
    </div>
  );
}

BarInfo.propTypes = {
  bar: PropTypes.object.isRequired,
  barInfo: PropTypes.object.isRequired,
  barInfoActive: PropTypes.bool.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
};

export default BarInfo;
