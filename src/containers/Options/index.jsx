import React from 'react';
import PropTypes from 'prop-types';

class Options extends React.Component {
  static propTypes = {
    changeRoute: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="Options">
        <h2>You choice</h2>

        <div>
          <button onClick={() => this.props.changeRoute('LoginWithTwitter')}>Login With Twitter</button>
        </div>
      </div>
    );
  }
}

export default Options;
