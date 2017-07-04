import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-firebase';

class KeepSync extends React.Component {
  static propTypes = {
    changeRoute: PropTypes.func.isRequired
  };

  goBack = () => {
    this.props.changeRoute('Options');
  };

  render() {
    return (
      <div className="KeepSync">
        <h2>Keep on Sync</h2>
        <div>
          We are keeping on sync the var: {'{ counter }'} that is present in firebase realtime database.
        </div>

        <div>
          This is the value: { this.props.counter || 'Loading...' }
        </div>

        <div>
          <button onClick={() => this.props.increment(this.props.counter + 1)}>Increment Value</button>
          <button onClick={this.goBack}>Go Back</button>
        </div>
      </div>
    );
  }
}

KeepSync = connect((props, ref) => ({
  counter: 'counter',
  increment: newValue => ref('counter').set(newValue)
}))(KeepSync);

export default KeepSync;
