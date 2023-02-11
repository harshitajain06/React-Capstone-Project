import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import CoinSlice from './coin/coin'

const store = configureStore({
  reducer: {
    coins: CoinSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;