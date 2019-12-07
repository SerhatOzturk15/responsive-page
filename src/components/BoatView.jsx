import React, {Component} from "react"
import BoatImage from "./BoatImage"
import BoatDetails from "./BoatDetails"
class BoatView extends React.Component{


    render(){

        return     <React.Fragment>
        <div className="boat-container">
        <BoatImage/>
        <BoatDetails/>
        </div>
      </React.Fragment>
    }
}

export default BoatView