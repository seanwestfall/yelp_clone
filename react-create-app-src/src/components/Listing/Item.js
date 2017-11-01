import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

import Rating from '../Rating/Rating';
import styles from './styles.module.css'

export class Item extends React.Component {
  render() {
    const {place} = this.props;
    return (
      <div
        className={"item"}>
          <h1 className={classnames(styles.title)}>{place.name}</h1>
          <span><Rating /></span>
      </div>
    )
  }
}

export default Item
