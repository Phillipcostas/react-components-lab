

const WeatherForecast = ({ Weather }) => {
    return (
      <div className="weather">

  <h2>{Weather.day}</h2>

  <img src="" alt="" />

  <p><span>{Weather.conditions} </span></p>

  <p><span>time: </span>{Weather.time}</p>

</div>
    
     
  
    );
  };
  

  

export default WeatherForecast;