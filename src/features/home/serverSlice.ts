import { createSlice } from '@reduxjs/toolkit';

export interface Server {
   id: number;
   name: string;
   background: string;
}

const initialState: Server[] = [
   {
      id: 1,
      name: 'Home',
      background:
         'https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_06_05/spider_man.jpg',
   },
];

const serverSlice = createSlice({
   name: 'server',
   initialState,
   reducers: {},
});

export default serverSlice;
