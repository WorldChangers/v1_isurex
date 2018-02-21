import React from 'react';


const styles = {
  container: {
    marginLeft: '5%',
    marginRight: '5%',
  },
};

const Container = ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
);


export default Container;
