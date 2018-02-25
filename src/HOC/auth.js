import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default (Component) => {
  class Authentication extends PureComponent {
    componentWillMount() {
      if (!this.props.auth.authenticated) {
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth.authenticated) {
        this.props.history.push('/login');
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => state;
  return withRouter(connect(mapStateToProps)(Authentication));
};
