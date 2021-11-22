import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login.js';
import Tables from './components/views/Tables/Tables.js';
import WaiterContainer from './components/views/Waiter/WaiterContainer.js';
import Kitchen from './components/views/Kitchen/Kitchen.js';
import Dashboard from './components/views/Dashboard/Dashboard.js';
import BookingDetails from './components/views/BookingDetails/BookingDetails.js';
import BookingNew from './components/views/BookingNew/BookingNew.js';
import EventDetails from './components/views/EventDetails/EventDetails.js';
import EventNew from './components/views/EventNew/EventNew.js';
import OrderDetails from './components/views/OrderDetails/OrderDetails.js';
import OrderNew from './components/views/OrderNew/OrderNew.js';
import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Provider} from 'react-redux';
import store from './redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0097a7',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={'/'} component={Dashboard}/>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/tables'} component={Tables}/>
                <Route exact path={'/tables/booking/new'} component={BookingNew}/>
                <Route exact path={'/tables/booking/:id'} component={BookingDetails}/>
                <Route exact path={'/tables/event/new'} component={EventNew}/>
                <Route exact path={'/tables/event/:id'} component={EventDetails}/>		  
                <Route exact path={'/waiter'} component={WaiterContainer}/>
                <Route exact path={'/waiter/order/new'} component={OrderNew}/>
                <Route exact path={'/waiter/order/:id'} component={OrderDetails}/>
                <Route exact path={'/kitchen'} component={Kitchen}/>
              </Switch>	
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
