import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Home from '../components/Home';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import AddTestimonial from '../components/AddTestimonial';
import Login from '../pages/login';
import Signup from './signup';
import '../styles/globals.css';

export default function Index() {
  const [testimonials, setTestimonials] = useState([]);
  const router = useRouter();

  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  return (
    <div className="App">
      {router.pathname === '/' && <Home />}
      {router.pathname === '/project1' && <Project1 />}
      {router.pathname === '/project2' && <Project2 />}
      {router.pathname === '/contact' && <Contact />}
      {router.pathname === '/testimonials' && <Testimonials testimonials={testimonials} />}
      {router.pathname === '/addTestimonial' && <AddTestimonial addTestimonial={addTestimonial} />}
      {router.pathname === '/login' && <Login />}
      {router.pathname === '/signup' && <Signup />}
    </div>
  );
}
