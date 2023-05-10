import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authen/authSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
   reducer: authSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
