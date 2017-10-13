import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

import Listing from '../Listing/Listing'

export class Sidebar extends React.Component {
  render() {
    return (
      <div className={"sidebar"}>
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
