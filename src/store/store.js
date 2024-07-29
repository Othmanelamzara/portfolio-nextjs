import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import testimonialReducer from './testimonialSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    testimonials: testimonialReducer,
  },
});

export default store;
