const API_KEY = "efb0fc86c241e968d94b20af3bf5b161";

export const fetchWeatherData = async (city_name: string) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=${API_KEY}`, { method: 'GET' })
    const data = await res.json();
    return data;
}