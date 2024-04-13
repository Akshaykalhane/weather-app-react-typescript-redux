import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function City_UI() {
    const data = useSelector((state: RootState) => state.weatherData.city_data);
    return (<>
        <div className="city-container">
            <div className="city-list">
                {data.length > 0 && data.map((item) => {
                    return (
                        <div className="city-box" key={item.id}>
                            <p>{item.name} ,{item.sys.country}</p>
                            <p>{item.weather[0].main} 
                                <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}  /></p>
                            <p>{item.main.temp.toFixed()}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    </>
    )
}

export default City_UI