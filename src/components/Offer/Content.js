import React, { Component } from 'react';
import Rating from 'react-rating';
import Button from '@material-ui/core/Button';
import Loader from '../Loader';
import {connect} from 'react-redux';
import Icon from '@material-ui/core/Icon';
import Moment from 'react-moment';
import ru from 'moment/locale/ru';
import Grid from '@material-ui/core/Grid';

class Content extends Component {

  render () {
    const {content , price} = this.props;
    return (
      <div className='offer__box'>
        <Grid container spacing={24}>
          <Grid item md={4}>
            <figure className='offer__img'>
              <img src={content.images[0]} alt="room" />
            </figure>
            <div className='offer_rating'>
              <Rating
                emptySymbol='fa fa-star-o fa-lg'
                fullSymbol='fa fa-star fa-lg'
                initialRating={content.rating}
                readonly
              />
            </div>
          </Grid>
          <Grid item md={8} >
            <p className='offer__address'>{content.full_address}</p>
            <p>{content.description}</p>
            <div className='offer__info'>
              <p className='offer__rooms'>
                <Icon className='fa fas fa-home' color="primary"></Icon>
                <span className='offer__rooms_text'>{content.total_rooms} комнаты</span>
              </p>
              <p className='offer__date'>
                <Icon className='fa fas fa-calendar' color="primary"></Icon>
                <span className='offer__date_text'>
                  <Moment lang={ru} format="D MMM YYYY, dddd" withTitle>
                    {content.public_date}
                  </Moment>
                </span>

              </p>
            </div>
            <Button variant="outlined" size="medium" color="primary" className='btn_loding'>
              {this.props.filters.isLoading ? <Loader/> : price}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect((state) => ({
  filters: state.filters
}))(Content)
