import { createSlice } from '@reduxjs/toolkit';

interface UserInterface {
   username?: string;
}
interface AuthInterface {
   user: UserInterface;
   isLogin: boolean;
   message: string;
   accessToken: string;
}
const initialState: AuthInterface = {
   user: {
      username: 'nghiatran',
   },
   isLogin: false,
   message: '',
   accessToken: '',
};
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state: AuthInterface) => {
         // eslint-disable-next-line no-param-reassign
         state.isLogin = false;
         // eslint-disable-next-line no-param-reassign
         state.user = {};
      },
   },
});

export default authSlice;
