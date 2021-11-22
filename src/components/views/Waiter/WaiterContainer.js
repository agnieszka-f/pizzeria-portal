import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateTableStatus} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => { 
  return {
    fetchTables: () => { return dispatch(fetchFromAPI());},
    changeStatus: (status, id) => {  return dispatch(updateTableStatus({id, status}));},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);