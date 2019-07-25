import React, { Component } from 'react';
import { connect } from 'react-redux';

import TechnologyCard from './TechnologyCard';

class TechnologyCardList extends Component {

  render() {

    const { technologyItems } = this.props;

    return (
      <div>
        <h2>Grid View</h2>

        <div className="grid-container">

          {Object.keys(technologyItems).map(key => {
            const technologyItem = technologyItems[key];

            return (
              <div key={key} className="grid-item">
                <TechnologyCard technologyItem={technologyItem} />
              </div>
            );
          })}

        </div>
      </div>
    );
  }
}

function mapStateToProps({ technologyItems }) {
  return {
    technologyItems
  };
}

export default connect(mapStateToProps)(TechnologyCardList);
