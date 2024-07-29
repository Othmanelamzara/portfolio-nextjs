import React from 'react';
import { useDispatch } from 'react-redux';
import { addTestimonial } from '../store/testimonialSlice';
import AddTestimonial from '../components/AddTestimonial';

const AddTestimonialPage = () => {
  const dispatch = useDispatch();

  const handleAddTestimonial = (testimonial) => {
    dispatch(addTestimonial(testimonial));
  };

  return <AddTestimonial addTestimonial={handleAddTestimonial} />;
};

export default AddTestimonialPage;
