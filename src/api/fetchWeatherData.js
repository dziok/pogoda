import axios from 'axios';
const api = {
    key: "01aa1a04234168e2ee4f8b064559a6af",
    base: "https://api.openweathermap.org/data/2.5/"
}
export const fetchWeatherData = async (city) => {
    return axios.get(`${api.base}forecast?id=${city}&appid=${api.key}`)
}

