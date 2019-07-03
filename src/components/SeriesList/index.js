import React from 'react';
import './index.css';

const SeriesList = (props) => {

  return (
    <div>
      <ul className="seriesList">
        {props.list.map(series => (
          //key={props.series.getElementId('series')}
          <li>{series.name}</li>
        ))}
      </ul>
    </div>
  )

}

export default SeriesList;
