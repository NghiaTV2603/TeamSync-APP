import { createSlice } from '@reduxjs/toolkit';
import { TYPE_TEXT, TYPE_VOCE } from '../../app/constants';

export interface Channel {
   id?: number;
   isPublish: boolean;
   type: string;
   name: string;
   description: string;
}

const initialState: Channel[] = [
   {
      name: 'general',
      type: TYPE_TEXT,
      id: 1,
      isPublish: true,
      description: '',
   },
   {
      name: 'general',
      type: TYPE_TEXT,
      id: 2,
      isPublish: false,
      description: '',
   },
   {
      name: 'general',
      type: TYPE_VOCE,
      id: 3,
      isPublish: false,
      description: '',
   },
];
const channelSlice = createSlice({
   name: 'channel',
   initialState,
   reducers: {
      create: (state, action) => {
         state.push(action.payload);
      },
   },
});

export default channelSlice;
