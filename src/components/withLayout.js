import React from 'react';
import { Navbar } from 'components';

function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Navbar />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
}

export default withLayout;
