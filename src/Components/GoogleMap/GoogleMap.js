import React, { Component } from "react";
import "./GoogleMap.css";

class GoogleMap extends Component {
  // calling renderMap()
  componentDidMount() {
    this.renderMap();
  }

  // define renderMap()
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCbdzGNPtA__FFN6QHQt-ZboFNdM4QD4bA&callback=initMap&libraries=&v=weekly"
    );
    // calling initMap()
    window.initMap = this.initMap;
  };

  // define initMap()
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      // center: { lat: 23.746466, lng: 90.376015 },
      center: { lat: 23.82235, lng: 90.365417 },
      zoom: 14,
    });
  };

  render() {
    return (
      <div>
        <main>
          <div id="map"></div>
        </main>
      </div>
    );
  }
}

// making <script> tag
const loadScript = (url) => {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
};

export default GoogleMap;

// ----------------------------------------------------------------------------------
//  Top and Bottom both code are correct for loading google map using API
// ----------------------------------------------------------------------------------

// export default GoogleMap;
// import React, { Component } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import "./GoogleMap.css";

// export class GoogleMap extends Component {
//   render() {
//     return (
//       <div id="map">
//         <Map
//           google={window.google}
//           initialCenter={{
//             lat: 23.746466,
//             lng: 90.376015,
//           }}
//           zoom={15}
//         >
//           <Marker onClick={this.onMarkerClick} name={"Current location"} />

//           <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCbdzGNPtA__FFN6QHQt-ZboFNdM4QD4bA",
// })(GoogleMap);
