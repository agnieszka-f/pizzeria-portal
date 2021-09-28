import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '../../../../node_modules/@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Login = props => {
  return(
    <Container className={styles.container}>
      <Typography variant='h5' component='h5' align='center' className={styles.title}>
        <Paper className={styles.component} className={styles.title}>
          <form>
            <TextField required id='standard-basic' label='Login' className={styles.input}/>
            <TextField component = 'div'
              required
              id='standard-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              className={styles.input}
            />
            <Button component={Link} to={'/'}>Sign in</Button>
          </form>
        </Paper>
      </Typography>
    </Container>
  );	
	
};

export default Login;