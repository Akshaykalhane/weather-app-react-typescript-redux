import {  useSelector } from 'react-redux';
import { RootState } from '../../store';
import  WeatherUI from './WeatherUI';
import './weather.css';

function WeatherDisplay() {
  const data = useSelector((state:RootState)=>state.weatherData)
  console.log(data,'weather data')
  return (
    <div className='main-container'>
        <WeatherUI />
    </div>
  
  )
}

export default WeatherDisplay;