import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(apiData => apiData.main.temp);
    const pressures = cityData.list.map(apiData => apiData.main.pressure / 68.95);
    const humidities = cityData.list.map(apiData => apiData.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="black" /></td>
        <td><Chart data={pressures} color="green" /></td>
        <td><Chart data={humidities} color="blue" /></td>
      </tr>
    );
  }

  render() {
    return  (
      <table className="table table-hover">
        <thead> 
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (psi)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);