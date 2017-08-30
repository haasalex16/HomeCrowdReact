import React from 'react';
import PropTypes from 'prop-types';

function Bar(props) {
  return (
    <div key={props.bar.id} className='bar-card'>
      <h1 className='title'>
        <p className='bar-name'>{props.bar.name}</p>
        <p className='address'>{props.bar.address}</p>
      </h1>
      <p className='bar-info-container'>
        i
      </p>
    </div>
  );
}

Bar.propTypes = {
  bar: PropTypes.object.isRequired,
};

export default Bar;
