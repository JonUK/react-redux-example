import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleSelection } from '../actions/technologyItems';

class TechnologyTableRow extends Component {

  render() {

    const { technologyItem, toggleSelection } = this.props;
    let className = '';

    if (technologyItem.isSelected) {
      className = 'table-primary';
    }

    return(
      <tr className={className}>
        <td>{ technologyItem.name }</td>
        <td>{ technologyItem.summary }</td>
        <td>
          <a href="#" onClick={() => toggleSelection(technologyItem.id)}>
            Toggle Selection
          </a>
        </td>
      </tr>
    );
  }
}

TechnologyTableRow.propTypes = {
  technologyItem: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    toggleSelection: (id) => dispatch(toggleSelection(id))
  };
}

export default connect(null, mapDispatchToProps)(TechnologyTableRow);
