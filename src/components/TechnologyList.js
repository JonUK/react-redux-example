import React, { Component } from 'react';
import { connect } from 'react-redux';

class TechnologyCardList extends Component {

  render() {

    const { technologyItems } = this.props;

    return (
      <ul>
        {Object.keys(technologyItems).map(key => {
          const technologyItem = technologyItems[key];

          return (
            <li key={key}>
              <span className={technologyItem.isSelected ? 'font-weight-bold' : ''}>
                { technologyItem.name }
              </span>
              - { technologyItem.summary }
            </li>
          );
        })}
      </ul>

    );
  }
}

function mapStateToProps({ technologyItems }) {
  return {
    technologyItems
  };
}

export default connect(mapStateToProps)(TechnologyCardList);
