import React, { Component } from 'react';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'Hubert', age: 23 },
        { id: '2', name: 'Winford', age: 22 }
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  // state = {
  //   persons: [
  //     { id: '1', name: 'Hubert', age: 23 },
  //     { id: '2', name: 'Winford', age: 22 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }
    //Cockpit component and pass down props
    return (
      <div className={styles.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
