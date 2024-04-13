import React from 'react';
import weatherSlice from './weatherSlice';
import { UseDispatch , useSelector } from 'react-redux';
import { RootState } from '../../store';

function Weather() {
  const weatherInfo = useSelector((state:RootState)=>state.weather);
  console.log(weatherInfo)
  return (<>
    <h2>weather info {weatherInfo[0].city_name}</h2>
  </>
  )
}

export default Weather