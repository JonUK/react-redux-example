import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TechnologyCard extends Component {

  render() {

    const { technologyItem } = this.props;

    return (
      <div className="card full-height">
        <div className="card-body">
          <h5 className="card-title">
            { technologyItem.name }
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            { technologyItem.subtitle }
          </h6>
          <p className="card-text">
            { technologyItem.summary }
          </p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">Select Item</a>
        </div>
      </div>
    );
  }
}

TechnologyCard.propTypes = {
  technologyItem: PropTypes.object.isRequired
};

export default TechnologyCard;
