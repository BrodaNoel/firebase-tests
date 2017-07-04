import React, { Component } from 'react';
import LoginWithTwitter from 'containers/LoginWithTwitter';
import KeepSync from 'containers/KeepSync';
import Options from 'containers/Options';
import './App.css';

class App extends Component {
  state = {
    route: 'Options'
  };

  changeRoute = route => {
    this.setState({ route });
  }

  render() {
    return (
      <div className="App">
        <h1>Firebase testing app</h1>

        <div className="content">
          {
            (route => {
              switch (route) {
                case 'KeepSync':
                  return <KeepSync changeRoute={this.changeRoute}></KeepSync>;
                case 'LoginWithTwitter':
                  return <LoginWithTwitter changeRoute={this.changeRoute}></LoginWithTwitter>;
                case 'Options':
                default:
                  return <Options changeRoute={this.changeRoute}></Options>;
              }
            })(this.state.route)
          }
        </div>
      </div>
    );
  }
}

export default App;
