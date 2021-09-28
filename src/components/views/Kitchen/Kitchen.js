import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const demoContent = [
  {
    id: 1,
    tableId: 3,
    orderId: 843,
    status: 'prepared',
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
    status: 'ordered',
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
    status: 'prepared',
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
    status: 'ordered',
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

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button disabled>prepared</Button>
      );
    default:
      return null;
  }
};

const Kitchen = props => {
  return(
    <Paper className={styles.component}>
      <Typography variant='h5' component='h5' align='center' className={styles.title}>Orders:
	  </Typography>
	  <Table>
	    <TableHead>
		  <TableRow>
		    <TableCell>Order</TableCell>
		    <TableCell>Products</TableCell>
		    <TableCell>Status</TableCell>
		    <TableCell>Action</TableCell>				
		  </TableRow>
        </TableHead>
        <TableBody>
          {
            demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.tableId ? 'Table: ' + row.tableId: 'Online:' + row.orderId}</TableCell>
                <TableCell>{row.products.map(product => {
                  return(<List key={product.id}>{product.id + ' - ' + product.amount}
					  {product.params.map(param => (<ListItem key={param}>{' - ' + param}</ListItem>))}
                  </List>);
                })}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{renderActions(row.status)}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
	  </Table>
    </Paper>
  );	
	
};

export default Kitchen;