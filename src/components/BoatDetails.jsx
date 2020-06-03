import React from "react";
import heart from "../images/heart.png";
import stars from "../images/stars.png";
import check from "../images/check-material.png";
import flash from "../images/flash-on-material.png";
import viewDetails from "../images/s.png";
import help from "../images/help-material.png";
class BoatDetails extends React.Component {
  render() {
    return (
      <div className="boat-detail">
        <div className="boat-summary-first">
          <div className="name-city">
            <div className="-centered- name">
              <div style={{ "height": "20px", "font-weight": 'bold' }}>
                <span>Jeannau Sun Odyssey 45.2</span> <span style={{ "font-weight": 'normal', "letter-spacing": "0.27px" }}>2001</span>
              </div>
              <div className="country-city">Split, Croatia</div>
            </div>
            <div className="-centered-" style={{ flex: "1" }}>
              <img
                id="heart"
                alt="heart"
                src={heart}
                style={{ padding: "8px" }}
              ></img>
            </div>
          </div>
          <div style={{ flex: "2", color: "#de6449", padding: "0 8px" }}>
            <span className="hot-text -centered-">HOT</span>
            <div className="boat-detail-status -centered-">
              <strong>69 views</strong> in the last 24 hours
            </div>
          </div>
        </div>
        <div className="boat-summary-second">
          <div className="boat-text-field">
            <div className="-centered-">
              <div className="numeric-details">12.04m</div>
              <div className="inner-text-field">LENGTH</div>
            </div>
          </div>
          <div className="boat-text-field">
            <div className="-centered-">
              <div className="numeric-details">4</div>
              <div className="inner-text-field">CABINS</div>
            </div>
          </div>
          <div className="boat-text-field">
            <div className="-centered-">
              <div className="numeric-details">10</div>
              <div className="inner-text-field">GUESTS</div>
            </div>
          </div>
          <div className="boat-text-field bigger-field">
            <div className="-centered-">
              <img src={stars} alt="stars" />
              <div className="inner-text-field">3 REVIEWS</div>
            </div>
          </div>
        </div>
        <div className="boat-summary-third">
          <div className="extra-details">
            <div className="extra-detail-item">
              <span className='properties'>
                <img src={check} alt="check" /> Sicher
              </span>
              <span className='properties'>
                <img src={check} alt="check" /> Luxury
              </span>
            </div>
            <div className="extra-detail-item">
              <span className="field-label">Sail Type</span>
              <span className="field-attr">Rolling Mainsail</span>
            </div>
            <div className="extra-detail-item">
              <span className="field-label">Free Extras</span>
              <span className="field-attr">
                AirCon, WiFi, Very Long Extra Description
              </span>
            </div>
          </div>
          <div className="booking-price">
            <div id="price">
              <span className="from-section">From </span>
              <strong> €1,083.00</strong>
              <span className="weekly-section"> weekly</span>
              <img src={help} className="help-section" alt="help" />
            </div>
            <div id="book">
              <div>
                <img style={{ marginRight: "8px" }} src={flash} alt="flash" />
                <span className="direct-booking">DIRECT BOOKING</span>
              </div>
              <img className='view-details' src={viewDetails} alt="viewDetails" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoatDetails;
