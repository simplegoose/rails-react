import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

const initialState = {
  greetings: '',
  error: false,
  isLoading: true,
};

export const getGreetings = createAsyncThunk(
  'greetings/get',
  async (_, thunkAPI) => {
    try {
      const resp = await request.get('/greetings');
      const { data } = resp;

      return data.title;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => ({ ...state, isLoading: true, error: false }))
      .addCase(getGreetings.fulfilled, (state, { payload }) => {
        return {
          greetings: payload,
          isLoading: false,
          error: false,
        };
      })
      .addCase(getGreetings.rejected, (state) => ({ ...state, isLoading: false, error: false }))
  },
});

const greetingsReducer = greetingsSlice.reducer;
export default greetingsReducer;