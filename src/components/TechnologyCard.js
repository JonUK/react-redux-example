import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleSelection } from '../actions/technologyItems';

class TechnologyCard extends Component {

  render() {

    const { technologyItem, toggleSelection } = this.props;
    let className = 'card full-height';

    if (technologyItem.isSelected) {
      className += ' border-primary';
    }

    return (
      <div className={className}>
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
          <a href="#" onClick={() => toggleSelection(technologyItem.id)} className="card-link">
            Toggle Selection
          </a>
        </div>
      </div>
    );
  }
}

TechnologyCard.propTypes = {
  technologyItem: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    toggleSelection: (id) => dispatch(toggleSelection(id))
  };
}

export default connect(null, mapDispatchToProps)(TechnologyCard);
