import React, { Component } from 'react';
import Filter from './Filter';
import Offer from './Offer';
import './style.css';
import store from '../store';
import {Provider} from 'react-redux';
import { MuiThemeProvider} from '@material-ui/core/styles';
import muiTheme from './theme';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Provider store={store}>
            <div className='wrap'>
              <Grid container spacing={24}>
                <Grid item md={4}>
                  <Filter />
                </Grid>
                <Grid item md={8}>
                  <Offer />
                </Grid>
              </Grid>
            </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
