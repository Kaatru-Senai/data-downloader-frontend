import {configureStore} from '@reduxjs/toolkit';
import DataReducer from './Features/DataSlice';

function setLocalStorage({ getState }) {
  return next => action => {
    
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)
    const serialisedState = JSON.stringify(getState());
    sessionStorage.setItem("persistantState", serialisedState);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

export const store = configureStore({
  reducer: {
    data: DataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(setLocalStorage)
});

