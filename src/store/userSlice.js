import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    // Simulate a login API call
    return { email, token: 'fakeToken123' };
  }
);

export const signupUser = createAsyncThunk(
  'user/signup',
  async ({ email, password }) => {
    // Simulate a signup API call
    return { email, token: 'fakeToken123' };
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    email: null,
    token: null,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
