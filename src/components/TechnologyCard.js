import React, { Component } from 'react';

class TechnologyCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Vue.js</h5>
          <h6 className="card-subtitle mb-2 text-muted">The Progressive JavaScript Framework</h6>
          <p className="card-text">
            Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
          </p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">Select Item</a>
        </div>
      </div>
    )
  }
}
