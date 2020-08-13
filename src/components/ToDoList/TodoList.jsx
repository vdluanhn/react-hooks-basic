import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};
function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClickItem(item) {
    if (onTodoClick) onTodoClick(item);
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          style={{
            height: 40,
            backgroundColor: "yellow",
            margin: 5,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "center",
            alignContent: "center",
          }}
          key={todo.id}
          onClick={() => handleClickItem(todo)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
