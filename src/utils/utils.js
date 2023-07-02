export const splitWeatherByDate = (data) => {
  let days = getDays(data);
  return days.map((day) => {
    return data.filter((ele) => day === formatDay(ele["dt_txt"]));
  });
};

export const getDays = (data) => {
  let days = data.map((ele) => {
    return formatDay(ele["dt_txt"]);
  });
  return [...new Set(days)];
};

export const formatDay = (str) => {
  return str.split(" ")[0];
};

export const formatHour = (str) => {
  return str.split(" ")[1].split(":").slice(0, 2).join(":");
};

export const getWeatherStatus = (data) => data.weather[0].main.toLowerCase();
export const getTemperature = (data) => {
  let days = splitWeatherByDate(data);
  return days.map((day) => {
    let temps = {};
    temps.min = day.map((item) => item.main.temp_min);
    temps.max = day.map((item) => item.main.temp_max);
    return { min: Math.min(...temps.min), max: Math.max(...temps.max) };
  });
};
