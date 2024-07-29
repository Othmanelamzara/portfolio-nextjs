import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setSubmitted(false); // Reset submitted state on change
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Ce champ est requis.';
    tempErrors.email = formData.email ? '' : 'Ce champ est requis.';
    tempErrors.message = formData.message ? '' : 'Ce champ est requis.';
    if (formData.email) {
      tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email invalide.';
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Formulaire soumis avec succès', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className={styles.contactPage}>
      <h1>Contactez-moi</h1>
      {submitted && <div className={styles.successMessage}>Message envoyé avec succès !</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
