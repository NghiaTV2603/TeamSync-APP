import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authen/authSlice';
import serverSlice from '../features/home/serverSlice';
import channelSlice from '../features/home/channelSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      server: serverSlice.reducer,
      channel: channelSlice.reducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
