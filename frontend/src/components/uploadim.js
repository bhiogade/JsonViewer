import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';


export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }

    handleClose() {
        console.log("meow");
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        console.log(files);
        this.setState({
            files: files,
            open: false
        });
        let formData = new FormData()
        formData.append('file',files[0])
        fetch('http://localhost:8000/core/json/', {
            method: 'POST',
            body: formData,
            })
            .then(res => res.json())
            .then(json => {
                console.log("response")
                //alert box. Show message
                alert(json.message);
            });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleOpen.bind(this)}>
                  Upload Data
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp','application/json']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}