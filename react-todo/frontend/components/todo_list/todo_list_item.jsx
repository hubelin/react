import React, { Component } from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      detail: false
    };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = {
      ...this.props.todo,
      done: !this.props.todo.done
    };
    this.props.receiveTodo(toggledTodo);
  }
  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }
  render() {
    const { todo } = this.props;
    const { title, done } = todo;
    let detail;
    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo} />;
    }
    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3>
            <a onClick={this.toggleDetail}>{title}</a>
          </h3>
          <button
            className={done ? 'done' : 'undone'}
            onClick={this.toggleTodo}
          >
            {done ? 'Undo' : 'Done'}
          </button>
        </div>
        {detail}
      </li>
    );
  }
}
export default TodoListItem;
