import React from "react"
import './weather.css'
import SearchForm from "../searchForm/searchForm"
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import logo from '../../assets/reshot-icon-weather-N54XZDLUEH.svg';
import ErrorUi from "./errorUi";
import City_UI from "./city_UI";
import { useDispatch } from "react-redux";
import { addCity } from "../../redux/slices/getWeatherSlice";

const WeatherUI: React.FC = () => {
    const data = useSelector((state: RootState) => state.weatherData);
    const dispatchAction = useDispatch();
    const sunrise = new Date(data.weatherData.sys.sunrise*1000).toLocaleTimeString('en-US');
    const sunset= new Date(data.weatherData.sys.sunset*1000).toLocaleTimeString('en-US');
    
    return (
        <>
            <div className="weather-detail-container">
                <header className="weather-header">
                    <img src={logo} className="logo" alt="logo" />
                    <SearchForm />
                </header>
                {data.weatherData.name !== '' &&
                    <>
                        <div className="weather-info-container">
                            <p className="temp-current">{data.weatherData.main.temp.toFixed()} °F</p>
                            <p className="weather-status">
                                {data.weatherData.weather[0].description}
                                <img src={`http://openweathermap.org/img/w/${data.weatherData.weather[0].icon}.png`}  />
                            </p>
                            <p className="city_name">
                            <img src={`https://flagsapi.com/${data.weatherData.sys.country}/shiny/64.png`} width='20px' />
                                {data.weatherData.name},{data.weatherData.sys.country}
                            </p>
                            <button className="add-city-btn" onClick={() => dispatchAction(addCity(data.weatherData))} >add city +</button>
                            <p className="city-status">{data.city_status}</p>
                        </div>

                        <div className="weather-extra-info">
                            <div className="weather-extra-box">
                                <img src="images/icons8-wind-100.png" alt="" />
                                <p>{data.weatherData.wind.speed}</p>
                                <p>Wind</p>
                            </div>
                            <div className="weather-extra-box">
                                <img src="images/icons8-wind-direction-64.png" alt="" />
                                <p>{weatherDirection(230)}</p>
                                <p>wind direction</p>
                            </div>
                            <div className="weather-extra-box">
                                <img src="images/humidity.png" alt="" />
                                <p>{data.weatherData.main.humidity}</p>
                                <p>Humidity</p>
                            </div>
                            <div className="weather-extra-box">
                                <img src="images/visibility.png" alt="" />
                                <p>{data.weatherData.visibility}</p>
                                <p>Visibility</p>
                            </div>
                            <div className="weather-extra-box">
                                <img src="images/sunrise.png" alt="" />
                                <p>{sunrise}</p>
                                <p>Sunrise</p>
                            </div>
                            <div className="weather-extra-box">
                                <img src="images/sunset.png" alt="" />
                                <p>{sunset}</p>
                                <p>Sunset</p>
                            </div>
                        </div>
                    </>
                }
                {data.weatherData.name == '' && data.isError == '' && <ErrorUi errorMsg="Your Personalized Weather Forecast Starts Here" />}
                {data.isError && <ErrorUi errorMsg={data.isError} />}

            </div >
            {data.city_data.length > 0 ?
                <City_UI /> :
                <div className="city-container">
                    <div className="city-list">
                        <p>No Cities Added Yet</p>
                    </div>
                </div>
            }
        </>
    )
}

export default WeatherUI;

function weatherDirection(degree: number) {
    degree = Math.floor(degree / 22.5)
    return Array(
        'N',
        'NE',
        'NE',
        'E',
        'E',
        'SE',
        'SE',
        'S',
        'S',
        'SW',
        'SW',
        'W',
        'W',
        'NW',
        'NW',
        'N'
    )[degree];
}