import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveTechnologyItems } from './actions/asynchronousActions';
import './App.css';

import TechnologyCardList from './components/TechnologyCardList';
import TechnologyTable from './components/TechnologyTable';

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

        <h1>React Redux Example</h1>

        {loadingData
          ? <div>Loading Data</div>
          : <div className="row">
              <div className="col-sm border">

                <h2>Grid View</h2>
                <TechnologyCardList />

              </div>
              <div className="col-sm border">

                <h2>List View</h2>
                <TechnologyTable />

              </div>
            </div>
        }

      </div>
    );
  }
}

export default connect()(App);
