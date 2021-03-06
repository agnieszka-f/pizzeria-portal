import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const CHANGE_STATUS = createActionName('CHANGE_STATUS');
const CHANGE_STATUS_ERROR = createActionName('CHANGE_STATUS_ERROR');
/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const changeStatus = payload => ({ payload, type: CHANGE_STATUS });
export const changeStatusError = payload => ({ payload, type: CHANGE_STATUS_ERROR });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const updateTableStatus = (data) => { 
  return (dispatch, getState) => { 

    const table = getState().tables.data[data.id - 1]; 

    if(typeof table !== 'undefined'){
      Axios
        .put(`${api.url}/api/${api.tables}/${data.id}`, {...table, status: data.status})
        .then(res => {
          dispatch(changeStatus(res.data));
        })
        .catch(err => {
          dispatch(changeStatusError(err.message || true));
        });
    } 
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) { 
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case CHANGE_STATUS: { 
      return {
        ...statePart,
        data: statePart.data.map( table =>
          table.id === action.payload.id ? {...table, status: action.payload.status} : {...table}
        ),
      };
    }
    case CHANGE_STATUS_ERROR: {
      return {
        ...statePart,
        updateStatus: {
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}