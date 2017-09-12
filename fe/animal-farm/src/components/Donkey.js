import PropTypes from 'prop-types';
import React from 'react';

const Donkey = ({ name, age }) => (
  <li>
    {name} {age}
  </li>
);

Donkey.propTypes = {
  age: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Donkey;
