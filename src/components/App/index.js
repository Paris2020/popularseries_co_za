import React , {Component} from 'react';
import Intro from '../Intro';
import './App.css';

class App extends Component{

  /* State Object - A JS Object to which your component reacts and renders
      whatever is needed
  */
  state = {
    series: []
  }

  componentDidMount(){
    const series = ["Vikings","Game Of Thrones"];

    /* setTimeOut() takes 2 arguments here, a function and delay */
    setTimeout(() => {

      /* setState - tells React that this component and it's children need to be
         rendered with the updated state.

         - Assign the state ojb to the series array
      */
      this.setState({ series: series});
    }, 2000);


  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all your favourite series"/>
        <p>The length of the state is: {this.state.series.length}</p>
      </div>
    );
  }
}

export default App;
