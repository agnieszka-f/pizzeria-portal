import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {demoContent, defaultDate} from '../../../date/DemoContent.js';

const calculate = () =>{
  for(let i = 0; i < demoContent.length; i++){
    const time = demoContent[i].hour.split(':');
    demoContent[i].start = parseFloat(time[0]) + (time[1] == '30' ? 0.5:0);
    demoContent[i].end = parseInt(demoContent[i].hour.split(':')[0]) + (time[1] == '30' ? 0.5:0) + demoContent[i].duration -1;
  }
};
const tables = [{id: 1, name: 'Table 1'},{id: 2, name: 'Table 2'},{id: 3, name: 'Table 3'},{id: 4, name: 'Table 4'}];
const hours = [{id: 12, hour: '12:00'},{id: 12.5, hour: '12:30'},{id: 13, hour: '13:00'},{id: 12.5, hour: '13:30'}, {id: 14, hour: '14:00'},{id: 14.5, hour: '14:30'},{id: 15, hour: '15:00'},{id: 15.5, hour: '15:30'}, {id: 16, hour: '16:00'},{id: 16.5, hour: '16:30'},{id: 17, hour: '17:00'},{id: 17.5, hour: '17:30'}, {id: 18, hour: '18:00'},{id: 18.5, hour: '18:30'},{id: 19, hour: '19:00'},{id: 19.5, hour: '19:30'}, {id: 20, hour: '20:00'},{id: 20.5, hour: '20:30'},{id: 21, hour: '21:00'},{id: 21.5, hour: '21:30'}, {id: 22, hour: '22:00'},{id: 22.5, hour: '22:30'},{id: 23, hour: '23:00'},{id: 23.5, hour: '23:30'}];
const fun = (hour,table) =>{
  const filtered = demoContent.filter(obj => (obj.tableId == table && (hour >= obj.start && hour <= obj.end)));
  if(filtered.length > 0){
    return filtered[0];
  }
};
const Tables = props => {
  calculate();
  return(
    <Paper className={styles.component}>
      <form noValidate>
        <TextField
          id='datetime-local'
          label='Pick date and time'
          type='datetime-local'
          defaultValue={defaultDate()}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
	  <Table>
	    <TableHead>
		  <TableRow>
		    <TableCell key={0}>Hour</TableCell>
            {tables.map(table => <TableCell key={table.id}>{table.name}</TableCell>)}			
		  </TableRow>
        </TableHead>
        <TableBody>
          {
            hours.map(row => (<TableRow key={row.id}><TableCell>{row.hour}</TableCell>
              {tables.map(table => {
                const reservation = fun(row.id,table.id); 
                return (<TableCell key={table.id}>{reservation? <Button className={styles.reservation} component={Link} to={'/tables/'+reservation.type+'/' + reservation.id}>{reservation.type}</Button>:<div><Button className={styles.new} component={Link} to={'/tables/booking/new'}>New booking</Button><Button className={styles.new} component={Link} to={'/tables/event/new'}>New event</Button></div>}</TableCell>);})}
            </TableRow>))
          }
        </TableBody>
	  </Table>
    </Paper>
  );	
	
};



export default Tables;