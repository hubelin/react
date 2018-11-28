import React, { Component } from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    };
  }
  render() {
    const { todo } = this.props;
    return (
      <li>
        {todo.title}
        <button>button</button>
      </li>
    );
  }
}
export default TodoListItem;
