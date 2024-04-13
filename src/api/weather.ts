const API_KEY = import.meta.env.VITE_KEY;

export const fetchWeatherData = async (city_name: string) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=${API_KEY}`, { method: 'GET' })
    const data = await res.json();
    return data;
}