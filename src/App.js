import * as React from "react";
import "./styles.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default class App extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
    lng: 5,
    lat: 34,
    zoom: 2
    };
    }

  componentDidMount() {
      const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
      });
      }

  render() {
    
    return (
      <>
      rr
      
      <div className='mapContainer' ref={el => this.mapContainer = el}></div>
      </>
    )
  }
  
   
}
