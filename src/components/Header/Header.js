import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={"topbar"}>
        <Link to="/"><h1>Yelp</h1></Link>
        <section>
          Fullstack.io
        </section>
      </div>
    )
  }
}

export default Header
