import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveTechnologyItems } from './actions/asynchronousActions';
import './App.css';

import TechnologyCardList from './components/TechnologyCardList';
import TechnologyTable from './components/TechnologyTable';
import TechnologyList from './components/TechnologyList';

class App extends Component {

  state = {
    loadingData: true
  };

  async componentDidMount() {
    await this.props.dispatch(handleReceiveTechnologyItems());
    this.setState({ loadingData: false });
  }

  render() {

    const { loadingData } = this.state;

    return (
      <div className="container-fluid">

        <h1 className="mt-2 mb-4">React Redux Example</h1>

        {loadingData
          ? <div>Loading Data</div>
          : <div className="row">
              <div className="col-sm mr-2">

                <h2>Grid View</h2>
                <TechnologyCardList />

              </div>
              <div className="col-sm ml-2">

                <h2>Table View</h2>
                <TechnologyTable />

                <h2>HTML List</h2>
                <TechnologyList />

              </div>
            </div>
        }

      </div>
    );
  }
}

export default connect()(App);
