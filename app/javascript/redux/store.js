import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import greetingsReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'development') {
      return getDefaultMiddleware().concat(logger);
    }

    return getDefaultMiddleware();
  },
});

export default store;