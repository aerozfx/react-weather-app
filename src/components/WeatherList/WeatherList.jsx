import React from "react";
import WeatherCard from "../WeatherCard"
import "./WeatherList.css"
import { splitWeatherByDate, getTemperature } from "../../utils/utils";

const WeatherList = ({data}) => {
  let {list, city} = data
  const formattedData = splitWeatherByDate(list)
  const temperature = getTemperature(list)
  return (
    <>
    <section className="weather-section">
        {formattedData.map((ele, i) => {
          return (
            <WeatherCard key={i} weatherDataDay={ele} city={city} temperature={temperature[i]}/>)
        })}
      </section>
    </>
  );
};

export default WeatherList;
