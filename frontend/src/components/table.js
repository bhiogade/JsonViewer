import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import './nba.css';

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
    },
  },
});

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'userId',
    headerName: 'UserId',
   // type: 'number',
    width: 125,
   headerClassName: 'super-app-theme--header', 
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
    headerClassName: 'super-app-theme--header',
    
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 800,
    headerClassName: 'super-app-theme--header',
    
  }
];


export default function DataTable(props) {
  const classes = useStyles();
  return (
    
    <div style={{ height: 350, width: 1250 }} className={classes.root}>
      <DataGrid
        rows={props.tabledata}
        columns={columns}
        pageSize={10}
        //checkboxSelection
        disableSelectionOnClick
        headerHeight={60}
        rowHeight={30}
      />
    </div>
  );
}

