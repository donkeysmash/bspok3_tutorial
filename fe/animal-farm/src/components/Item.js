import PropTypes from 'prop-types';
import React from 'react';


const Item = ({ name, age }) => (
  <li>
    {name} {age}
  </li>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Item;
