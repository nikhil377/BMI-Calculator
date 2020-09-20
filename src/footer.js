import React from 'react'
import Bmi from "./bmi.jpg"

function Footer(props) {
    console.log(props);
    
    return (
        <div>
          
              <img src={Bmi} 
              alt={'bmi chart'}
              className="col-xs-5"
              />
              {props.levelCheck.length>0 ?
               <h3 className="level-check-title">You are {props.levelCheck}</h3>: null}
        </div>
      
    )
}

export default Footer
