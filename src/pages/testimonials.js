import React from 'react';
import { useSelector } from 'react-redux';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
  const testimonials = useSelector((state) => state.testimonials);

  return <Testimonials testimonials={testimonials} />;
};

export default TestimonialsPage;
