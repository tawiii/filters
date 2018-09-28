import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {getCurrency} from '../../AC';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tab: {
    minWidth: '33.33%',
  },
};

class Currency extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value }, () => this.props.getCurrency(this.state.value));
  };


  render () {
    const { classes } = this.props;
    return (
      <div className='currency'>
        <h2 className='currency__title'>Валюта</h2>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="uah" className={classes.tab}/>
          <Tab label="usd" className={classes.tab}/>
          <Tab label="eur" className={classes.tab}/>
        </Tabs>
      </div>
    )
  }
}

export default connect(null, {getCurrency})(withStyles(styles)(Currency))
