import React, { Component } from 'react';
import './App.css';
import TodoList from './events-exercise/TodoList';
import NewTodoForm from './forms-exercise/NewTodoForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <NewTodoForm />
      </div>
    );
  }
}

/*
Events part 2
import TodoList from './events-exercise/TodoList';
export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}
*/
/*
Events part 1
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    };
  }
  toggleOn = e => {
    this.setState({ disabled: !this.state.disabled });
  };
  handleLink = e => {
    if (this.state.disabled) e.preventDefault();
  };
  render() {
    let links = this.props.links.map((link, index) => (
      <CustomLink
        key={index}
        href={link.href}
        text={link.text}
        handleClick={this.handleLink}
      />
    ));
    return (
      <div>
        {links}
        <button onClick={this.toggleOn}>
          {this.state.disabled ? 'Click to enable' : 'Click to disable'}
        </button>
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      href: 'https://www.rithmschool.com',
      text: 'Rithm School'
    },
    {
      href: 'https://facebook.github.io/react/',
      text: 'React Docs'
    },
    {
      href: 'https://www.codewars.com/dashboard',
      text: 'CodeWars'
    }
  ]
};
*/

/*
STATE EXERCISE
-----------------------------------------------------
export default class App extends Component {
  constructor(props) {
    super(props);

    // set default state
    const boxes = [];
    const numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        id: i,
        color: this.getRandomColor()
      });
    }
    this.state = { boxes };

    this.handleBoxClick = this.handleBoxClick.bind(this); // method bind
  }

  handleBoxClick(e) {
    const newBoxes = this.state.boxes.map(box => {
      // only change color for the specific one box
      if (box.id === e.target.id) {
        box.color = this.getRandomColor();
      }
      return box;
    });

    this.setState({ boxes: newBoxes });
  }

  getRandomColor() {
    // select a random index from the props.colors
    const colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        color={box.color}
        handleClick={this.handleBoxClick}
      />
    ));
    return <div className="App">{boxes}</div>;
  }
}

App.defaultProps = {
  allColors: [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua'
  ]
};
*/
