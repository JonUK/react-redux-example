import React, { Component } from 'react';
import { connect } from 'react-redux';

class TechnologyCardList extends Component {

  render() {

    const { selectedItems } = this.props;

    return (
      <ul>
        {selectedItems.map(technologyItem => (
          <li key={technologyItem.id}>
            <span className={technologyItem.isSelected ? 'font-weight-bold' : ''}>
              { technologyItem.name }
            </span>
            - { technologyItem.summary }
          </li>
        ))}
      </ul>

    );
  }
}

function mapStateToProps({ technologyItems }) {
  const selectedItems = Object.keys(technologyItems)
    .map(key => technologyItems[key])
    .filter(technologyItem => technologyItem.isSelected);

  return {
    selectedItems
  };
}

export default connect(mapStateToProps)(TechnologyCardList);
