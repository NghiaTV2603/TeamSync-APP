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
         state.isLogin = false;
         state.user = {};
      },
   },
});

export default authSlice;
