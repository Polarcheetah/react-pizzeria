//selectors
export const getAllTables = (state) => state.tables;
export const getTableParams = ({ tables }, tableId) =>
  tables.find((table) => table.id === parseInt(tableId));
// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const modifyTablesRequest = () => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        status: 'busy',
        peopleAmount: 3,
        maxPeopleAmount: 4,
        bill: 45,
      }),
    };

    fetch('http://localhost:3131/tables/1', options);
    //.then(()=> dispatch(modifyTables()))  modifyTables-akcja modyfikacji zmian w magazynie
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default tablesReducer;
