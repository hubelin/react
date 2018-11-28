import React, { Component } from 'react';

class TodoDetailView extends Component {
  render() {
    const { todo, removeTodo } = this.props;
    return (
      <div>
        <button onClick={removeTodo}>removeTodo</button>
      </div>
    );
  }
}

export default TodoDetailView;
