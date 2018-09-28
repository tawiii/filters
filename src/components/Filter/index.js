
import React, { Component } from 'react';
import Currency from './Currency';
import Rooms from './Rooms';
import Price from './Price';
import Stars from './Stars';


class Filter extends Component {
  render () {
    return (
      <div className='filter'>
        <Currency />
        <Rooms />
        <Price />
        <Stars />
      </div>
    );
  }
}

export default Filter;
