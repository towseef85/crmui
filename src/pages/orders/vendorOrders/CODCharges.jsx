import React from 'react';
import AppControls from '@crema/core/AppControls';
import PropTypes from 'prop-types';

export default function CODCharges({showCODChargers}) {
  const {AppInputControl} = AppControls;
  return (
    <>
      {showCODChargers === 1 && (
        <>
          <AppInputControl
            min={2}
            label='COD Charge'
            name='codCharges'
            required={showCODChargers === 1}
          />
          <AppInputControl
            min={2}
            label='Order Amount'
            name='orderAmount'
            required={showCODChargers === 1}
          />
        </>
      )}
    </>
  );
}
CODCharges.propTypes = {
  showCODChargers: PropTypes.any,
};
