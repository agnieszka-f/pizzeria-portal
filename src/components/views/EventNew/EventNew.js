import React from 'react';
import styles from './EventNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Container from '../../../../node_modules/@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel   from '@material-ui/core/InputLabel';
import MenuItem     from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const hours = [{id: 12, hour: '12:00'},{id: 12.5, hour: '12:30'},{id: 13, hour: '13:00'},{id: 12.5, hour: '13:30'}, {id: 14, hour: '14:00'},{id: 14.5, hour: '14:30'},{id: 15, hour: '15:00'},{id: 15.5, hour: '15:30'}, {id: 16, hour: '16:00'},{id: 16.5, hour: '16:30'},{id: 17, hour: '17:00'},{id: 17.5, hour: '17:30'}, {id: 18, hour: '18:00'},{id: 18.5, hour: '18:30'},{id: 19, hour: '19:00'},{id: 19.5, hour: '19:30'}, {id: 20, hour: '20:00'},{id: 20.5, hour: '20:30'},{id: 21, hour: '21:00'},{id: 21.5, hour: '21:30'}, {id: 22, hour: '22:00'},{id: 22.5, hour: '22:30'},{id: 23, hour: '23:00'},{id: 23.5, hour: '23:30'}];
const amounts = [1,2,3,4,5,6,7,8,9];

const EventNew = props => {
  return(
    <Container className={styles.container}>
      <Paper className={styles.component} className={styles.title}>
        <Typography variant='h5' component='h5' align='center'>New event:
          <form>
            <FormControl className={styles.formControl}>
              <InputLabel id="table">Pick a table</InputLabel>
              <Select
                labelId="table"
                id="table"
                value={1}
              >
                <MenuItem value={1}>Table 1</MenuItem>
                <MenuItem value={2}>Table 2</MenuItem>
                <MenuItem value={3}>Table 3</MenuItem>
                <MenuItem value={4}>Table 4</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={styles.formControl}>
              <TextField
                id='date'
                label='Pick a date'
                type='date'
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl className={styles.formControl}>
              <InputLabel id="time">Pick a time</InputLabel>
              <Select
                labelId="time"
                id="time"
                value={12}
              >
			    {hours.map(row => (<MenuItem key={row.id} value={row.id}>{row.hour}</MenuItem>))}
              </Select>
            </FormControl>
            <FormControl className={styles.formControl}>
              <InputLabel id="hours">Duration</InputLabel>
              <Select
                labelId="hours"
                id="hours"
                value={1}
              >
			    {amounts.map(amount => (<MenuItem key={amount} value={amount}>{amount}</MenuItem>))}
              </Select>
            </FormControl>
            <Button component={Link} to={'/'}>Submit</Button>
          </form>
        </Typography>	  
      </Paper>
    </Container>
  );	
	
};

export default EventNew;