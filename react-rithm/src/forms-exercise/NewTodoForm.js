import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  }
  handleChange = e => {
    this.setState(([e.target.name] = e.target.value));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      title: '',
      description: ''
    });
  };
  render() {
    return <div />;
  }
}

export default NewTodoForm;
