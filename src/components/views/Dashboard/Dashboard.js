import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const demoTodayOrders = [
  {
    id: 1,
    tableId: 3,
    orderId: 843,
    products: [
      {
        'id':'cake',
        'amount': 1,
        'name':'Zio Stefanos Doughnut',
        'price':9,
        'params': [],
      },
    ],	
  },
  {
    id: 2,
    tableId: 4,
    orderId: 571,
    products: [
      {
        'id':'breakfast',
        'amount': 2,
        'name':'Zia Giulias Breakfast',
        'price':18,
        'params': ['Cappuccino'],
      },
    ],	
  },
  {
    id: 3,
    tableId: null,
    orderId: 415,
    products: [
      {
        'id':'pizza',
        'amount': 2,
        'name':'Nonna Albas Pizza',
        'price':40,
        'params': ['Olives', 'Red peppers', 'Green peppers', 'Mushrooms', 'Fresh basil'],
      },
    ],	
  },
  {
    id: 4,
    tableId: 18,
    orderId: 179,
    products: [
      {
        'id':'salad',
        'amount': 1,
        'name':'Nonno Albertos Salad',
        'price':9,
        'params': ['Cucumber', 'Tomatoes', 'Olives', 'Fresh herbs'],		
      },
      {
        'id':'pizza',
        'amount': 1,
        'name':'Nonna Albas Pizza',
        'price':15,
        'params': ['Mushrooms', 'Salami'],	  
      },
    ],	
  },
];

const calculateEndHour = (date,hour,duration) => {
  const time = date + ' ' + hour;
  const currentTime = new Date(time);
  const newTime = new Date(currentTime);
  newTime.setHours(newTime.getHours() + 2);
  return newTime.getHours().toString() + ':' + newTime.getMinutes().toString().padStart(2,'0');
};

const demoTodayEvents = [
  {
    id: 1,
    date: '2021-09-05',
    hour: '12:30',
    tableId: 2,
    duration: 2,
    type: 'booking',
  },
  {
    id: 2,
    date: '2021-09-05',
    hour: '15:30',
    tableId: 3,
    duration: 4,
    type: 'event',
  },
  {
    id: 3,
    date: '2021-09-05',
    hour: '14:30',
    tableId: 4,
    duration: 1,
    type: 'booking',
  },
  {
    id: 4,
    date: '2021-09-05',
    hour: '18:00',
    tableId: 5,
    duration: 3,
    type: 'event',
  },
];

const Dashboard = props => {
  return(
    <Paper className={styles.component}>
      <Typography variant='h5' component='h5' align='center' className={styles.title}>Todays orders:
	  </Typography>
	  <Table>
	    <TableHead>
		  <TableRow>
		    <TableCell>Table</TableCell>
		    <TableCell>Order Id</TableCell>
		    <TableCell>Products</TableCell>
		    <TableCell>Products params</TableCell>				
		  </TableRow>
        </TableHead>
        <TableBody>
          {
            demoTodayOrders.map(order=>{
              return (
                <TableRow  key={order.id}>
			       <TableCell>{order.tableId ? order.tableId:'Online order'}</TableCell>
				   <TableCell>{order.orderId}</TableCell>
				   <TableCell>{order.products.map(product => (product.id + '- ' + product.amount + (order.products.length-1 == order.products.indexOf(product)? '':', ' )))}</TableCell>
				   <TableCell>{order.products.map(product => (<List key={product.id}>{product.params.map(param=><ListItem key={param}>{param}</ListItem>)}</List>))}</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
	  </Table>
	  <Typography variant='h5' component='h5' align='center' className={styles.title}>Todays reservations:
	  </Typography>
	  <Table>
	    <TableHead>
		  <TableRow>
		    <TableCell>Table</TableCell>
		    <TableCell>Start hour</TableCell>
		    <TableCell>End hour</TableCell>
		    <TableCell>Type</TableCell>				
		  </TableRow>
        </TableHead>
        <TableBody>
          {
            demoTodayEvents.map(reservation => (
              <TableRow key={reservation.id}>
                <TableCell>{reservation.tableId}</TableCell>
                <TableCell>{reservation.hour}</TableCell>
                <TableCell>{calculateEndHour(reservation.date, reservation.hour, reservation.duration)}</TableCell>
                <TableCell>{reservation.type}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
	  </Table>
    </Paper>
  );	
	
};

export default Dashboard;