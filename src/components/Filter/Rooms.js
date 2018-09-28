import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux';
import {getRooms} from '../../AC';


class Rooms extends Component {

  state = {
    all: true,
    1: false,
    2: false,
    3: false,
  };


  handleChange = name => event => {
    if (name === 'all') {
      this.setState({
        all: true,
        1: false,
        2: false,
        3: false,
      }, () => this.props.getRooms(this.state));
    } else {
      this.setState({
        [name]: event.target.checked,
        all: false
      }, () => this.props.getRooms(this.state));
    }
  };

  componentDidMount() {
    this.props.getRooms(this.state);
  }

  render () {
    return (
      <div className='rooms'>
        <h2>Количество комнат</h2>
        <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={this.state.all} onChange={this.handleChange('all')} value="all" />
              }
              label="Все"
            />
            <FormControlLabel
              control={
                <Checkbox checked={this.state['1']} onChange={this.handleChange('1')} value="1" />
              }
              label="1 комната"
            />
            <FormControlLabel
              control={
                <Checkbox checked={this.state['2']} onChange={this.handleChange('2')} value="2" />
              }
              label="2 комнаты"
            />
            <FormControlLabel
              control={
                <Checkbox checked={this.state['3']} onChange={this.handleChange('3')} value="3" />
              }
              label="3 комнаты"
            />
          </FormGroup>
      </div>
    );
  }
}

export default connect(null, {getRooms})(Rooms)
