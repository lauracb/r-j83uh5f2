import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {chars: 0}
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.update.bind(this)}></textarea>
        <div className="counter">{this.state.chars}</div>
      </div>
    );
  }

  update(e){
    var input = e.target.value;
    this.setState({ chars: input.length});
  }
}

export default App;
