import WeatherList from "./components/WeatherList"
import './App.css'
import { useEffect, useState } from "react"

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState("")
  useEffect(() => {
    if(city === ""){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async pos => {
          let {latitude: lat, longitude:lon} = pos.coords
          let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
          let response = await res.json()
          setData(response)
        })
      }
    } else{
      const getCoords = async (city) => {
        let res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`)
        let response = await res.json()
        let {lat, lon} = response[0]
        return {lat,lon}
      }
      const getWeatherData = async () => {
        let {lat, lon} = await getCoords(city)
        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
        let response = await res.json()
        return response
      }  
  
      getWeatherData().then(res => setData(res))
    } 

  }, [city])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let form = Object.fromEntries(new FormData(e.target))
    let {city} = form
    setCity(city)
  }
  return (
    <main>
      <h2 className="title">Weather forecast app</h2>
      <form action="" className="form" onSubmit={handleSubmit}>
        <p>Introduce la ciudad que quieres buscar:</p>
        <input type="text" name="city"  placeholder="Madrid, Barcelona, Melón..."/>
        <button className="send-form">Buscar</button>
      </form>
      {data ? <WeatherList data={data}/> : <p>Cargando...</p>}
    </main>
  )
}

export default App
