import React, { Component } from 'react';

import styles from './index.scss';

class App extends Component {
  render() {
    return (
      <p className={`text ${styles.text}`}>The universe is a big place, perhaps the biggest.</p>
    )
  }
}

export default App;
