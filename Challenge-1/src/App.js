import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Question from './Question/Question';

class App extends Component{

  state = {
    question: "What is your Tech-stack?",
    answer: "Python",
  };

  reveal = (event) => {
    this.setState({question: this.state.answer});
  };

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>30 Days of React</h2>
      
      <Question question={this.state.question} click={this.reveal} /></header>
    </div>
  );
  }
}

export default App;
