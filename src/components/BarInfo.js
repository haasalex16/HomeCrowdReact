import React from 'react';
import PropTypes from 'prop-types';

function BarInfo(props) {
  return (
    <div>
      INFO
    </div>
  );
}

BarInfo.propTypes = {
  bar: PropTypes.object.isRequired,
};

export default BarInfo;
