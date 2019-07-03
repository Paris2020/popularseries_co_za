import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component{

  state = {
    series: [
      {
        name: "Freeze Frame Dance Crew",
        logo: "(url: ./src/logo.svg)"
      },
      {
        name: "Havock Crew",
        logo: "(url: ./src/logo.svg)"
      },
      {
        name: "Creed Dance Crew",
        logo: "(url: ./src/logo.svg)"
      },
      {
        name: "Vintage Crew",
        logo: "(url: ./src/logo.svg)"
      },
      {
        name: "Untimitive Dance Crew",
        logo: "(url: ./src/logo.svg)"
      },
      {
        name: "Basic Black Dance Crew",
        logo: "(url: ./src/logo.svg)"
      }

    ]
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
        <SeriesList list={this.state.series} />
      </div>
    )
  }
}

export default Series;
