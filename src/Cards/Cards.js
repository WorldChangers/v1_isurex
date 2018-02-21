import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div style={{paddingTop:10}} className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                Derrick Mwiti
                <label className="switch switch-sm switch-text switch-info float-right mb-0">
                  <input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </div>
              <div className="card-block card-header" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Type</em>
                <em>Car Number</em>
                <em>Purpose</em>
              </div>
              <div className="card-block" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Comprehensive</em>
                <em>GT 152 W</em>
                <em>Private</em>
              </div>
              <div className="card-block card-header" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Year</em>
                <em>Claim</em>
                <em>Paid</em>
              </div>
              <div className="card-block" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>2012</em>
                <em>Car Crush</em>
                <em>Yes</em>
              </div>
              <button className='btn btn-primary'>View More</button>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                George Osodo
                <label className="switch switch-sm switch-text switch-info float-right mb-0">
                  <input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </div>
              <div className="card-block card-header" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Type</em>
                <em>Car Number</em>
                <em>Purpose</em>
              </div>
              <div className="card-block" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Third Party</em>
                <em>GT 152 W</em>
                <em>Commercial</em>
              </div>
              <div className="card-block card-header" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Year</em>
                <em>Claim</em>
                <em>Paid</em>
              </div>
              <div className="card-block" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>2012</em>
                <em>Car Crush</em>
                <em>Yes</em>
              </div>
              <button className='btn btn-primary'>View More</button>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                Terrence Owusu
                <label className="switch switch-sm switch-text switch-info float-right mb-0">
                  <input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </div>
              <div className="card-block card-header" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Type</em>
                <em>Car Number</em>
                <em>Purpose</em>
              </div>
              <div className="card-block" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Comprehensive</em>
                <em>GT 152 W</em>
                <em>Private</em>
              </div>
              <div className="card-block card-header" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>Year</em>
                <em>Claim</em>
                <em>Paid</em>
              </div>
              <div className="card-block" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <em>1900</em>
                <em>Car Accidents</em>
                <em>No</em>
              </div>
              <button className='btn btn-primary'>View More</button>
            </div>
          </div>
        </div>   
      </div>

    )
  }
}

export default Cards;
