import React, {Component} from "react"
import BoatImage from "./BoatImage"
import BoatDetails from "./BoatDetails"
class BoatView extends React.Component{


    render(){

        return (
          <div className="boat-container">
            <BoatImage />
            <BoatDetails />
          </div>
        );
    }
}

export default BoatView