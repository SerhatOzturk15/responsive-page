import React from "react"
import boatPhoto from "../images/boat-image@2x.png";
class BoatImage extends React.Component{


    render(){

        return (
          <div className="boat-image-container">
            <div className="recommendation-area">ZIZOO RECOMMENDED</div>
            <img id="boat-image" src={boatPhoto} alt="boat-photo"></img>
          </div>
        );
    }
}

export default BoatImage