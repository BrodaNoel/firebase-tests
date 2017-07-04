import React from 'react';
import PropTypes from 'prop-types';

class Options extends React.Component {
  static propTypes = {
    changeRoute: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="Options">
        <button onClick={() => this.props.changeRoute('LoginWithTwitter')}>Login With Twitter</button>
      </div>
    );
  }
}

export default Options;
