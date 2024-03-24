import { Dispatch } from 'redux';
import axios from 'axios';
import { Database, DatabaseActionTypes, FETCH_DATABASES } from '../../types/databaseTypes';

export const fetchDatabases = () => {
  return async (dispatch: Dispatch<DatabaseActionTypes>) => {
    try {
      const response = await axios.get<Database[]>('https://api.optilogic.app/databases');
      dispatch({
        type: FETCH_DATABASES,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching databases:', error);
    }
  };
};
