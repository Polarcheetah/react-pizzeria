import { API_URL } from '../config.js';

//selectors
export const getAllTables = (state) => state.tables.data;
export const getTableParams = (state, tableId) =>
  state.tables.data.find((table) => table.id === parseInt(tableId));
// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_SINGLE_TABLE = createActionName('UPDATE_SINGLE_TABLE');
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const updateSingleTable = (payload) => ({
  type: UPDATE_SINGLE_TABLE,
  payload,
});
export const fetchStart = (payload) => ({ type: FETCH_START, payload });
export const fetchSuccess = (payload) => ({ type: FETCH_SUCCESS, payload });
export const fetchError = (payload) => ({ type: FETCH_ERROR, payload });

export const fetchTables = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)))
      .catch((error) => {
        dispatch(fetchError(error.message || true));
      });
  };
};

export const modifyTablesRequest = (newTableParams) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTableParams),
    };

    const url = `${API_URL}/tables/${newTableParams.id}`;

    fetch(url, options).then(() => dispatch(updateSingleTable(newTableParams)));
  };
};

export const initialTableState = {
  data: [],
  status: {
    error: false,
    loading: false,
  },
};

const tablesReducer = (statePart = initialTableState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...statePart,
        status: { error: false, loading: true },
      };
    case UPDATE_TABLES:
      return {
        ...statePart,
        status: { error: false, loading: false },
        data: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...statePart,
        status: { error: action.payload, loading: false },
      };
    case UPDATE_SINGLE_TABLE:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
};
export default tablesReducer;
