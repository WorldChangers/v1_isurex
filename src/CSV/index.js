import React, { Component } from 'react';
import LaddaButton, { CONTRACT_OVERLAY } from 'react-ladda';
import Dropzone from 'react-dropzone';
import axios from 'axios'
import { connect } from 'react-redux'
import Home from '../Home'
import csvJSON from './csvJSON'
import Show from './show'
import { createWithUpload } from '../actions/claim'

class CSV extends Component{

    state = {
        files: [],
        disabled: false,
        fraud: false,
        analyze: false,
        select: {},
        showReason: false,
        notFraud: false
    }

//    shouldComponentUpdate(pre, next){
//       if(pre !== next){
//           return true
//       }
//    }
//    componentWillReceiveProps(nextProps){
//        console.log('will receive', nextProps)
//    }

//    componentDidUpdate(){
//        if(this.state.analyze != this.state.analyze){
//         console.log('updated')
//        }
       
//     //    this.setState({analyze: true})
//     //   const time = setTimeout(() => {
//     //       this.setState({fraud: true})
//     //       this.setState({analyze: false})
//     //   },1000)
//    }
   
    onDrop = async (files) => {
        let res;
        var reader = new window.FileReader()
        reader.onload = async (e) => {
            let res = await csvJSON(reader.result)
            this.setState({files: res})
           
            setTimeout(() => {
              this.setState({analyze:true})
            }, 1000)
            setTimeout(() => {
                this.setState({fraud:true, analyze:false})
                setInterval(() => {
                    this.setState({fraud:false})
                    this.setState({fraud: true})
                }, 2000)
            }, 3000)
        }
        reader.readAsText(files[0]);

    }

    onAnalyze = async() => {
      this.setState({analyze: true})
      setTimeout(() => {
          this.setState({fraud: true})
          this.setState({analyze: false})
      },1000)
    }

    handleMessage = (file) => {
        setTimeout(() => {
         this. setState({select:file})
         this.setState({showReason: true})
        }, 100)
    }

    onSubmit = () => {
        this.props.createWithUpload(this.state.files, this.props.history)
        this.setState({disabled: true})
    }

    renderFiles = () => {
        return this.state.files.map((file, i) => {
            return (
                <Show 
                 key={i}
                 handleMessage={this.handleMessage}
                 file={file}
                 analyze={this.state.analyze}
                 fraud={this.state.fraud}
                />
            )
        })
    }

    handleCreate = () => {
        this.props.history.push('/claims')
    }

    resolveClaim = () => {
        this.setState({notFraud: true})
    }

    render(){
        const { select } = this.state
        if(this.state.showReason){
            return (
            <Home location={this.props.location}>
            <h2>Why this Claim is Fraud</h2>
            <div className='row'>
            <div className="col-sm-6 col-md-4" style={{marginTop:'3%'}}>
            <div className="card card-outline-danger">
            <div className="card-header">
                Fraud Claim
            </div>
                 <div className="card-block">
                 <p><strong>Type of Incidence:  {select['Type Incidence']}</strong> </p>
                     <p><strong>Date of Incidence: {select['Date Incident Occured']}</strong></p>
                     <p><strong>Person Driving:  {select['Person Driving']}</strong> </p>
                     <p><strong>Was the Claim Paid: {select['Has the Claim been Paid?']} </strong></p> 
                     <p><strong>Description: {select['Description']}</strong></p>
                     <p><strong>Where was it Reported:{select['Where was it reported ?']} </strong></p>
                 </div>
            </div>
            </div>
            <div className="col-sm-6 col-md-4" style={{marginTop:'3%'}}>
            <div className="card card-outline-danger">
            <div className="card-header">
                Reason's Why it is Fraud
            </div>
                 <div className="card-block">
                 <p><strong>Double Claim Record: Yes</strong> </p>
                     <p><strong>User ID found in Multiple Insurance: Yes</strong></p>
                     <p><strong>Fraud Detected from Previous Claim: Yes </strong> </p>
                 </div>
                 <div style={{display:'flex',flexDirection:'row'}}>
                 <LaddaButton
                        className="btn btn-success"
                        style={{marginBottom: '2%', width:120, marginLeft:10}}
                        data-style={CONTRACT_OVERLAY}
                        onClick={this.resolveClaim}
                        >
                        RESOLVE CLAIM
                </LaddaButton>
                <LaddaButton
                        className="btn btn-warning"
                        style={{marginBottom: '2%', width:120, marginLeft:10}}
                        data-style={CONTRACT_OVERLAY}
                        onClick={() => this.props.history.push('/claims')}
                        >
                        IGNORE
                </LaddaButton>
                </div>
            </div>
            </div>
            {
                this.state.notFraud &&
                <div className="col-sm-6 col-md-4" style={{marginTop:'3%'}}>
                <div className="card card-outline-danger">
                <div className="card-header">
                    Tell us why it is not Fraud?
                </div>
                     <textarea className='form-control' rows='10'></textarea>
                     <LaddaButton
                            className="btn btn-success"
                            style={{marginBottom: '2%', width:120, marginLeft:10}}
                            data-style={CONTRACT_OVERLAY}
                            onClick={this.handleCreate}
                            >
                            SUBMIT CLAIM
                         </LaddaButton>
                </div>
                </div>
            }
            </div>
            </Home>
            )
        }
        const { files } = this.state
        return (
            <Home location={this.props.location}>
                <div style={{marginTop:'2%'}}>
                 {
                    files.length > 0 ? (
                     <div>
                     <div style={{display:'flex', flexDirection:'row'}}>
                       <LaddaButton
                        className="btn btn-success"
                        disabled={this.state.disabled}
                        onClick={this.onSubmit}
                        style={{marginBottom: '2%', width:120}}
                        data-style={CONTRACT_OVERLAY}
                        >
                        CREATE CLAIM
                     </LaddaButton>
                     {
                        this.state.analyze === true && 
                            <h2 
                                className='animated fadeIn' 
                                style={{display:'flex', 
                                alignSelf:'center',
                                color:'green', marginLeft:'70', textAlign:'center'}}>
                                Anaylzing Claims Report to detect Fraud!!!
                            </h2>
                     }
                     </div>
                       { this.renderFiles()}
                     </div>
                     
                    ) :
                    <Dropzone accept='text/csv' onDrop={this.onDrop}>
                        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                            if (isDragActive) {
                            return "This file is authorized";
                            }
                            if (isDragReject) {
                            return "This file is not authorized";
                            }
                        }}
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                  
                 } 
                </div>
            </Home>
        )
    }
}

export default connect(null, {createWithUpload})(CSV)