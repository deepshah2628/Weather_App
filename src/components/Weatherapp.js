import React,{useState,useEffect} from 'react';
import './css/style.css';

const Weatherapp = () =>{
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Ahmedabad")
    useEffect(() => {
      const fetchApi = async ()=>{
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=11d2db6dd30ffd316d3a22a3908d96d7`;
          const response = await fetch(url);
        //   console.log(response); 
          const resJson = await response.json();
          setCity(resJson.main);
        //   console.log(resJson);
      }
      fetchApi();
    },[search])
    
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField"
                    onChange={(event)=>{setSearch(event.target.value)

                    }}
                    />
                </div>   
           {!city ? (
               <p>No data found</p>
           ) : (
               <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">{city.temp}°Cel</h1>
            <h3 className="tempmin_max">min:{city.temp_min} max:{city.temp_max}</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
        
           )}
    </div>
           
        </>
    )

}
export default Weatherapp;