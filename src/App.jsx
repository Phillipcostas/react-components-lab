import './Weather.css';

import WeatherForecast from './Components/WeatherForecasts/Weather.jsx';


const App = () => {
  const WeatherForecasts = [
    {
      day: 'Mon',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];
  
  return (
    <>
   

  <section>
    
  <div className="weather">
 
     

        {WeatherForecasts.map((Weather) => (
          <WeatherForecast
            key={Weather.id}
            Weather={Weather}
          />
        ))}
      <h2>  Day of the Week</h2>
      <img src="" alt="" />

      <p><span>conditions:</span>current weather conditions</p>

      <p><span>time: </span>time of day</p>

      </div>

      </section>



</>

)}

        

export default App;



