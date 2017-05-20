import React from 'react'
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h2 className="main-title">WeatherApp with Redux</h2>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}
