import React from 'react';



const Weather = (props) => {
    return(
        <div className = "container text-light">
            <div className = "cards pt-5">
                <h1>{props.city}</h1>  
                <h5 className = "py-4">
                    <i className = {`wi ${props.weatherIcon} display-1 pt-3`}></i>
                </h5>  

                {props.temp_celsius ? (<h1 className = "py-3">{props.temp_celsius}&deg;c</h1>) : null }

                {/**show max and min Temp */}    
                {minmaxTemp(props.temp_min, props.temp_max)}
                {minmaxTemp(props.temp_min, props.temp_max) ? (<p>Min &emsp; &emsp; &emsp;&emsp; &emsp;&emsp; &emsp; Max</p>) : null}
                <h4 className="py-4">{props.description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max) {
    if(min && max) {
        return (
            <h3>
                <span className= "px-4">{min}&deg;</span>
                <span>&emsp;&emsp;&emsp;</span>
                <span className= "px-4">{max}&deg;</span>
            </h3>
        );
    }
}

export default Weather;