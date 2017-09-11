import PropTypes from 'prop-types';
import React from 'react';

const Donkey = ({ name, age }) => (
  <li>
    {name} {age}
  </li>
);

Donkey.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Donkey;
