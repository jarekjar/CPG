import React, { Component } from 'react';
import logo from './logo.svg';
import './react-default.css';
import Axios from 'axios';
class ReactDefault extends Component {

  state = {
    test: ""
  }

  componentDidMount(){
    Axios.get('./api/test')
      .then(res => {
        const test = res.data;
        this.setState({ test })
      })
      .catch(err => {
        const test = "Could not connect to API.";
        this.setState({ test })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test  <code>React</code> App for CRL. 
            Welcome to the Catalog Page Generator.
            Check the status code below.
            <br/>{ this.state.test }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default ReactDefault;
