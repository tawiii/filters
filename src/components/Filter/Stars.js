import React, { Component } from 'react';
import Rating from 'react-rating';
import {connect} from 'react-redux';
import {getStars} from '../../AC';


class Stars extends Component {
  render () {
    return (
      <div>
        <h2>Рейтинг</h2>
          <Rating
            emptySymbol="fa fa-star-o fa-lg"
            fullSymbol="fa fa-star fa-lg"
            onChange={(rate) => this.props.getStars(rate)}
          />
      </div>
    );
  }
}

export default connect(null, {getStars})(Stars)
