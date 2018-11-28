import React, { Component } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends Component {
  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoItems = todos.map(todo => {
      return (
        <TodoListItem todo={todo} key={todo.id} receiveTodo={receiveTodo} />
      );
    });

    console.log(todoItems);
    return (
      <div>
        <ul className="todo-list">{todoItems}</ul>
        <TodoForm receiveTodo={receiveTodo} />
        <button onClick={removeTodo} />
      </div>
    );
  }
}

export default TodoList;
