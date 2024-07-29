import { createSlice } from '@reduxjs/toolkit';

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState: [],
  reducers: {
    addTestimonial: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;
