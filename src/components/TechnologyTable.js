import React, { Component } from 'react';
import { connect } from 'react-redux';

import TechnologyTableRow from './TechnologyTableRow';

class TechnologyTable extends Component {

  render() {

    const { technologyItems } = this.props;

    return (
      <table className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Summary</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>

          {Object.keys(technologyItems).map(key => {
            const technologyItem = technologyItems[key];

            return (
              <TechnologyTableRow key={key} technologyItem={technologyItem} />
            );
          })}

        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ technologyItems }) {
  return {
    technologyItems
  };
}

export default connect(mapStateToProps)(TechnologyTable);

