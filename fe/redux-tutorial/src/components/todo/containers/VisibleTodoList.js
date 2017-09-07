import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = null;


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


export default VisibleTodoList;
