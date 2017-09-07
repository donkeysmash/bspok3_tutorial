import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ completed, text }) => (
  <li>
    {text}
    {completed? <p>completed</p> : <p>not completed</p>}
  </li>
);



Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;






