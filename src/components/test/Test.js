import React, { Component } from 'react'

class Test extends Component {

  componentDidMount() {
    console.log('ComponentDidMount...');
  }

  componentWillMount() {
    console.log('componentWillMount...');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate...');
  }

  componentWillReceiveProps( nextProps, nextState ) {
    console.log('componentWillRecieveProps...');
  }

  static getDerivedStateFromprops( nextProps, prevState ) {
    
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test;