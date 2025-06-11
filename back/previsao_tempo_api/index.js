require('dotenv').config()
const axios = require("axios")
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const openWeatherMapClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

const icons = {
    "01d": "sun",
    "01n": "sun",
    "02d": "cloud-sun",
    "02n": "cloud-sun",
    "03d": "cloud",
    "03n": "cloud",
    "04d": "cloud",
    "04n": "cloud",
    "09d": "cloud-showers-heavy",
    "09n": "cloud-showers-heavy",
    "10d": "cloud-sun-rain",
    "10n": "cloud-sun-rain",
    "11d": "cloud-bolt",
    "11n": "cloud-bolt",
    "13d": "snowflake",
    "13n": "snowflake",
    "50d": "water",
    "50n": "water",
}

app.get('/search', async (request, response) => {

    const result = await openWeatherMapClient.get('/forecast', {
        params: { 
            q: request.query.query,
            appid: process.env.API_KEY,
            units: "metric",
            lang: "pt_br"
        }
         
    }).catch((err) => {
        response.status(err.status).json({
            message: `Algo de errado ocorreu ao pesquisar a cidade: ${request.query.query}.`
        })
    })

    let responseData = [];
    const weatherData = result.data.list

    for(i = 4; i < weatherData.length; i+=8){

        responseData.push({
            temp_min: weatherData[i].main.temp_min,
            temp_max: weatherData[i].main.temp_max,
            humidity: weatherData[i].main.humidity,
            description: weatherData[i].weather[0].description,
            icon: icons[weatherData[i].weather[0].icon],
        })

    }

    response.json(responseData)

})

const port = 3001

app.listen(port, () => {
    console.log(`Server online: http://127.0.0.1:${port}`)
})