import React , {Component} from 'react';
import Intro from '../Intro';
import Series from '../../containers/Series';
import 'whatwg-fetch';
import './App.css';

class App extends Component{

  /* State Object - A JS Object to which your component reacts and renders
      whatever is needed
  */
  state = {
    series: []
  }

  componentDidMount(){
    /* const series = ["Vikings","Game Of Thrones"];

        - setTimeOut() takes 2 arguments here, a function and delay
          setTimeout(() => {

        - setState - tells React that this component and it's children need to be
          rendered with the updated state.

         - Assign the state ojb to the series array
         - Send out a request to the API WHENEVER OUR App component renders

            this.setState({ series: series});
        }, 2000);
    */

    /* Fetch - return the json from the response obj
      - allows you to chain then() methods i.e what we're returning in the first
        then() will go the next then()

    */
    fetch('http://api.tvmaze.com/search/shows/?q=vikings')
    .then((response) => response.json)
    .then(json => this.setState({ series: json }))



  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all your favourite series"/>
        <Series/>
      </div>
    );
  }
}

export default App;
