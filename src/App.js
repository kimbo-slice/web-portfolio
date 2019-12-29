import React, { Component } from 'react';
import './App.css';
import IntroImage from './components/introImage'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		<div id="colorlib-main">
			<IntroImage></IntroImage>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;