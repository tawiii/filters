import React, { Component } from 'react';
import {loadData} from '../../AC';
import {connect} from 'react-redux';
import Content from './Content';
import Loader from '../Loader';



class ContentList extends Component {
  state = {
    contents: []
  }

  filterContents = [];
  content = [];

  componentDidMount() {
    this.props.loadData()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      contents: nextProps.dataInfo.data
    });
  }

  getFilterData = (contents, filters) => {
    this.getFilterRooms(contents, filters);
    this.getFilterPrice(filters);
    this.getFilterRating(filters);
    this.getContent(filters);
  }

  getFilterRooms = (contents, filters) => {
    this.filterContents = contents.filter(item => {
      return filters.stateRooms['all'] ? true : filters.stateRooms[item.total_rooms];
    })
  }

  getPrice = (price, filters) => {
    return filters.statePrice.before ?
     filters.statePrice.before >= price && filters.statePrice.from <= price :
     filters.statePrice.from <= price;
  }

  getFilterPrice = (filters) => {
    this.filterContents = this.filterContents.filter(item => {
      if (filters.currencyValue === 1) {
        let price = Math.round(item.price / filters.dataExchange['0'].buy);
        let filterPrice = this.getPrice(price, filters);
        return filterPrice ? item.currentPrice = price + ' usd' : false;
      } else if (filters.currencyValue === 2) {
        let price = Math.round(item.price / filters.dataExchange['1'].buy);
        let filterPrice = this.getPrice(price, filters);
        return filterPrice ? item.currentPrice = price + ' eur' : false;
      } else {
        let price = item.price;
        let filterPrice = this.getPrice(price, filters);
        return filterPrice ? item.currentPrice = price + ' uah' : false;
      }
    })
  }

  getFilterRating = (filters) => {
    this.filterContents = this.filterContents.filter(item => {
      return filters.rate ? item.rating === filters.rate : true;
    })
  }

  getContent = (filters) => {
    this.content = this.filterContents.map(item => {
      return <li key={item.id} className='offer__item'>
        <Content content = {item} price = {item.currentPrice} />
      </li>
    })
  }

  render () {
    const {contents} = this.state;
    const {filters, dataInfo} = this.props;
    this.getFilterData(contents, filters);
    if (dataInfo.isLoading) return <Loader/>
    return (
      <ul>
        {this.content}
      </ul>
    );
  }
}

export default connect((state) => ({
  dataInfo: state.data,
  filters: state.filters
}), {loadData})(ContentList)
