export interface Database {
  id: number;
  name: string;
  connectionInfo: string;
}

export const FETCH_DATABASES = 'FETCH_DATABASES';
export const FETCH_DATABASES_SUCCESS = 'FETCH_DATABASES_SUCCESS';
export const FETCH_DATABASES_FAILURE = 'FETCH_DATABASES_FAILURE';

interface FetchDatabasesAction {
  type: typeof FETCH_DATABASES;
  payload: Database[];
}

export type DatabaseActionTypes = FetchDatabasesAction;
