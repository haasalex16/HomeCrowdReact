import React from 'react';
import PropTypes from 'prop-types';

function BarInfo(props) {
  return (
    <div className={props.barInfoActive ? 'bar-info active' : 'bar-info'}>
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
          (props.barInfo.teams || []).map((team) => {
            return (
              <img className='bar-info-team-icon' src={team.iconUrl} alt={team.name} />
            );
          })
        }
      </span>
    </div>
  );
}

BarInfo.propTypes = {
  bar: PropTypes.object.isRequired,
};

export default BarInfo;
