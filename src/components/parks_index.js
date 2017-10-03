import React, { Component } from 'react';
import { connect } from 'react-redux';




class ParksIndex extends Component {
  renderParksList() {
    return this.props.parks.map((park) => {
      return (
          <li key={park.name}>
            {park.name}
          </li>
        )
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
         <h2>National Parks At-A-Glance</h2>
        </div>
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

export default connect(mapStateToProps)(ParksIndex);


