import React from 'react';
import PropTypes from 'prop-types';
import styles from './Testimonials.module.css';

function Testimonials({ testimonials }) {
  return (
    <div className={styles.testimonialsPage}>
      <h1>Témoignages</h1>
      {testimonials.length > 0 ? (
        <div className={styles.testimonialsList}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun témoignage pour le moment.</p>
      )}
    </div>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.array,
};

Testimonials.defaultProps = {
  testimonials: [],
};

export default Testimonials;
