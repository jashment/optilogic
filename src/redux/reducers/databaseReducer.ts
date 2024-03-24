import { DatabaseState, DatabaseActionTypes, FETCH_DATABASES, FETCH_DATABASES_SUCCESS, FETCH_DATABASES_FAILURE } from '../../types/databaseTypes';

const initialState: DatabaseState = {
  databases: [],
};

const databaseReducer = (state = initialState, action: DatabaseActionTypes): DatabaseState => {
  switch (action.type) {
    case 'FETCH_DATABASES':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_DATABASES_SUCCESS':
      return {
        ...state,
        loading: false,
        databases: action.payload,
        error: null,
      };
    case 'FETCH_DATABASES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default databaseReducer;
