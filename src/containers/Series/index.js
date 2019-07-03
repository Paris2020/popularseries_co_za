import React, {Component} from 'react';

class Series extends Component{

  state = {
    series: []
  }

  componentDidMount(){

    fetch('http://api.tvmaze.com/search/shows/?q=vikings')
    .then((response) => response.json)
    .then(json => this.setState({ series: json }))

  }

  render(){
    return (
      <div>
        <p>The length of the state is: {this.state.series.length}</p>
      </div>
    )
  }
}

export default Series;
