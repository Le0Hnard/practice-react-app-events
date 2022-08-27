import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import ThemeButton from './components/ThemeButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Ready",
      counter: 0,
      theme: "secondary"
    }
  }

  selectTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
      message: `Theme: ${newTheme}`
    });
  }

  handleEvent = (event, newTheme) => {
    console.log("handleEvent method invoked");
    // this.setState({ message: `Event: ${event.type}` });

    // if(event.type === "mousedown") {
    //   this.setState({ message: `Down` });
    // } else {
    //   this.setState({ message: `Up` });
    // }

    this.setState({ 
      counter: this.state.counter + 1,
      theme: newTheme 
    }, () => this.setState({ message: `${event.type}: ${this.state.counter}` }));
  }

  handleClick = (event) => {
    console.log(`App: Type: ${event.type}`
      + `Target: ${event.target.tagName}`
      + `CurrentTarget: ${event.currentTarget.tagName}`);
  }

  toggleCheckBox = (event) => {
    if(this.state.counter === 0) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="m-2" onClick={ this.handleClick }>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" onClick={ this.toggleCheckBox } />
          <label>This is a checkbox</label>
        </div>
        <div className={ `h4 bg-${this.state.theme} text-white text-center p-2` }>
          { this.state.message }
        </div>
        <div className="text-center" onClick={ this.handleClick }>
          {/* <button className="btn btn-primary" onMouseDown={ this.handleEvent } onMouseUp={ this.handleEvent }>Click Me</button> */}
          {/* <button className="btn btn-primary" onClick={ (e) => this.handleEvent(e, "primary") }>Normal</button>
          <button className="btn btn-danger m-1" onClick={ (e) => this.handleEvent(e, "danger") }>Danger</button> */}
          <ThemeButton theme="primary" callback={ this.selectTheme } />
          <ThemeButton theme="danger" callback={ this.selectTheme } />
        </div>
      </div>
    );
  }
}
