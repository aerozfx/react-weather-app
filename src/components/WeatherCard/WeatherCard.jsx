import { useState, useRef, useEffect } from "react";
import "./WeatherCard.css"
import { formatDay, formatHour, getWeatherStatus } from "../../utils/utils"
import {images} from "../../assets/images"
import { svg } from "../../assets/svg";

const WeatherCard = ({weatherDataDay, city, temperature}) => {
  let [index, setIndex] = useState(0)
  let circleRef = useRef(null)
  let image = getWeatherStatus(weatherDataDay[index])

  useEffect(() => {
    updateWeatherDisplay(index)
  }, [index])

  const nextWeatherCard = () => {
    let newIndex = index === weatherDataDay.length - 1 ? 0 : index + 1 
    setIndex(newIndex)

  }
  const prevWeatherCard = () => {
    let newIndex = index === 0 ? weatherDataDay.length - 1 : index - 1 
    setIndex(newIndex)
  }

  const updateWeatherDisplay = (index) => {
    let circleIndicator = circleRef.current
    let circle = circleIndicator.querySelectorAll(".circle")
    circle.forEach(item => item.classList.remove("active"))
    circle[index].classList.toggle("active")

  }
  return (
    <>
    <article className="weather-card">
      <h2 className="date">{formatDay(weatherDataDay[0].dt_txt)}</h2>
      <section className="weather-current-status-image" style={{backgroundImage: `url(${images[image].image})`}}>
        <p className="weather-current-city">{city.name}</p>
        <p className="weather-current-temp min-temp">Min: {temperature.min}</p>
        <p className="weather-current-temp max-temp">Max: {temperature.max}</p>
      </section>
      <section className="weather-slider">
      <img src={"./svg/back-svgrepo-com.svg"} className="btn back" alt="" onClick={prevWeatherCard}/>
        <section className="weather-info">
          <article className="weather-data-card">
                  <img src={svg[image].icon} className="weather-current-status-svg"/>
                  <p className="weather-current-status-temp">{weatherDataDay[index].main.temp}ºC</p>
                  <p className="weather-current-status-time">{formatHour(weatherDataDay[index].dt_txt)}</p>
          </article>
        </section>
        <img src={"./svg/back-svgrepo-com.svg"} className="btn forward" alt="" onClick={nextWeatherCard} />
        <section className="weather-data-state" ref={circleRef}>
          {
            weatherDataDay.map((_, i) =>
              ( 
                <div key={i} className="circle"></div>
              )
            )
          }
        </section>
      </section>
    </article>

    </>
  );
};

export default WeatherCard;
