import React, { Component } from 'react';
import LaddaButton, { CONTRACT_OVERLAY } from 'react-ladda';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux'
import Home from '../Home'
import csvJSON from './csvJSON'
import Show from './show'
import { createWithUpload } from '../actions/claim'

class CSV extends Component{

    state = {
        files: [],
        disabled: false
    }

   
    onDrop = async (files) => {
        let res;
        var reader = new window.FileReader()
        reader.onload = async (e) => {
            let res = await csvJSON(reader.result)
            return this.setState({files: res})
        }
        reader.readAsText(files[0]);

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
                 file={file}
                />
            )
        })
    }

    render(){
        const { files } = this.state
        return (
            <Home location={this.props.location}>
                <div style={{marginTop:'2%'}}>
                 {
                    files.length > 0 ? (
                     <div>
                       <LaddaButton
                        className="btn btn-success"
                        disabled={this.state.disabled}
                        onClick={this.onSubmit}
                        style={{marginBottom: '2%', width:120}}
                        data-style={CONTRACT_OVERLAY}
                        >
                        CREATE CLAIM
                     </LaddaButton>
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