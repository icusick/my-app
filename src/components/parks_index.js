import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPark } from '../actions/index';
import { bindActionCreators } from 'redux';



class ParksIndex extends Component {
  renderParksList() {
    return this.props.parks.map((park) => {
      return (
          <li key={park.name}>
            <Link to={`/parks/${park.name}`} onClick={() => this.props.selectPark(park)}>
              {park.name}
            </Link>
          </li>
        )
    })
  }


  render() {
    return (
      <div className="App">
        <h2>National Parks At-a-Glance</h2>
        <ul>
          {this.renderParksList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    parks: state.parks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPark: selectPark}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ParksIndex);


