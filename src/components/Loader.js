import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

class Loader extends Component {

  render() {

    return (
      <div className='loader'>
        <LinearProgress />
      </div>
    );
  }
}

export default Loader
