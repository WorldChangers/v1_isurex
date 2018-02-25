import React from 'react'

const styles = {
    display:'flex',
    flex:1,
    // position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2
}


const Loader = () => (
    <div className="animated"  style={styles}>
    <div className="col-lg-12" style={{marginTop:'20%'}}>
      <div className="card-block">
         <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
    </div>
  </div>
  </div>
)

export default Loader