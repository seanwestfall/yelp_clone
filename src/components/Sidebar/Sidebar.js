import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

import Listing from '../Listing/Listing'

/*
 * Search:
 * Zip to LAT and LONG
 * http://api.zippopotam.us/us/90210
 * Google Places API
 * https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=[LATITUDE],[LONGITUDE]&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCnP53_zohI3AKPY9qL7ntfk8Uiyx32EFA
 */

export class Sidebar extends React.Component {
  render() {
    return (
      <div className={"sidebar"}>
        <input type="text" className={"search"} placeholder={"Search"} />
        <div className={"heading"}>
          <h1>{this.props.title}</h1>
          <Listing 
            places={this.props.places}
          />
        </div>
      </div>
    )
  }
}

export default Sidebar
