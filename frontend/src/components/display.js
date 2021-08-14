import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from './table';
import './nba.css';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [tabledata, setTabledata] = React.useState([]);


  const handleClickOpen = () => {
    setOpen(true);
    fetch('http://localhost:8000/core/json/', {
            method: 'GET',
            })
            .then(res => res.json())
            .then(json => {
              console.log(json)
              setTabledata(json);
            });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View Data
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'lg'}
        
        aria-labelledby="alert-dialog-title"
        //aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Json Data"}</DialogTitle>
         {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
              {/* <DialogContent>
                  <DialogContentText>
                    <Table tabledata={tabledata} />
                  </DialogContentText>
              </DialogContent> */}
         <Table tabledata={tabledata} />
        <DialogActions>
          
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
