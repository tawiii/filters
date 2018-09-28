import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import {connect} from 'react-redux';
import {getPrice} from '../../AC';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  filterInput: {
    width: '45%',
  },
};

class Price extends Component {

  state = {
    from: '',
    before: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    }, () => this.props.getPrice(this.state));
  };

  componentDidMount() {
    this.props.getPrice(this.state);
  }

  render () {
    const { classes } = this.props;
    return (
      <div className="price">
        <h2>Цена</h2>
        <div className="price__field">
          <Input
            placeholder="От"
            value={this.state.from}
            onChange={this.handleChange('from')}
            className={classes.filterInput}
          />
          <Input
            placeholder="До"
            value={this.state.before}
            onChange={this.handleChange('before')}
            className={classes.filterInput}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, {getPrice})(withStyles(styles)(Price))
