import PropTypes from 'prop-types';
import React from 'react';
import Donkey from './Donkey'


const DonkeyList = ({ donkeys }) => (
  <ul>
    {donkeys.map(donkey => 
      <Donkey
        key={donkey.id}
        {...donkey}
      />
    )}
  </ul>
);

DonkeyList.propTypes = {
  
};

export default DonkeyList;
