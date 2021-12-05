import React, { Component } from 'react';
import Section from './Сomponents/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Section></Section>
      </div>
    );
  }
}

export default App;
