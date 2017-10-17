import React, { PropTypes as T } from 'react'
import classnames from 'classnames'
// import Map, { Marker } from 'google-maps-react'

import styles from './styles.module.css'

// My code -- Sean
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 37.775, lng: -122.419 }}
  >
  {console.log(props)}
  {props.children.places.map(place => {
      return <Marker 
                name={place.name}
                place={place}
                onClick={place.onMarkerClick.bind(this)}
                position={place.location}
              />

    })
  }
  </GoogleMap>
));

/*
  renderMarkers() {
    console.log('renderMarkers', this);
    if (!this.props.children.places) { return null; }
    return this.props.children.places.map(place =>{
      return <Marker key={place.id}
                name={place.name}
                place={place}
                position={place.location}
              />
    })
  }
 */

export class MapComponent extends React.Component {
  render() {
    return (
      <div className={styles.map}>
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDU0QabU3g9r9pEsun426MLgRAs5dADg1Q&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        >
        {this.props.children}
        </MapWithAMarker>
      </div>
    )
  }
}

/*
 
 */

/*
  renderChildren() {
    const {children} = this.props;
    // ...
  }
  renderMarkers() {
    if (!this.props.places) { return null; }
    return this.props.places.map(place =>{
      return <Marker key={place.id}
                name={place.id}
                position={place.geometry.location}
                onClick={this.props.onMarkerClick.bind(this)}
                position={place.geometry.location}
              />
    })
  }

      <Map google={this.props.google}
            className={styles.map}>
        {this.renderMarkers()}
      </Map>
 */


export default MapComponent
