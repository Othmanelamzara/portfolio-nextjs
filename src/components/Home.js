import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <img src="/othmane.jpg" alt="Othmane Lamzara" className={styles.profileImage} />
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis Othmane Lamzara, un développeur spécialisé en Python, Java, JavaScript, et SQL.</p>
      
      <section className={styles.section}>
        <h2>Compétences Techniques</h2>
        <ul>
          <li>Langages de Programmation: Python, Java, JavaScript, SQL</li>
          <li>Frameworks: React, Django, Spring Boot, Flask</li>
          <li>Outils: Git, Docker, Jenkins</li>
          <li>Bases de Données: MySQL, PostgreSQL, MongoDB</li>
          <li>Concepts: OOP, Agile/Scrum, DevOps, TDD</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Compétences Non Techniques</h2>
        <ul>
          <li>Résolution de Problèmes</li>
          <li>Travail en Équipe</li>
          <li>Communication</li>
          <li>Apprentissage Continu</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Expérience Professionnelle</h2>
        <div className={styles.experience}>
          <h3>Développeur Full Stack chez ABC Company</h3>
          <p>Janvier 2020 - Présent</p>
          <ul>
            <li>Développement de solutions web en utilisant React et Django.</li>
            <li>Conception et implémentation de bases de données SQL.</li>
            <li>Participation à des réunions de sprint Agile et collaboration avec les équipes de développement et de design.</li>
          </ul>
        </div>
        <div className={styles.experience}>
          <h3>Développeur Backend chez XYZ Inc.</h3>
          <p>Juin 2018 - Décembre 2019</p>
          <ul>
            <li>Développement d'API RESTful en utilisant Spring Boot et Flask.</li>
            <li>Gestion de l'intégration continue et du déploiement avec Jenkins.</li>
            <li>Optimisation des performances des bases de données et des requêtes SQL.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Projets Récents</h2>
        <div className={styles.project}>
          <h3>Projet 1: Application de Gestion de Tâches</h3>
          <p>Développement d'une application de gestion de tâches en utilisant React pour le frontend et Django pour le backend.</p>
        </div>
        <div className={styles.project}>
          <h3>Projet 2: Site E-commerce</h3>
          <p>Création d'un site e-commerce complet avec Spring Boot et React, intégrant un système de paiement sécurisé.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Certifications</h2>
        <ul>
          <li>Certification Java OCP</li>
          <li>Certification AWS Solutions Architect</li>
          <li>Certification Scrum Master</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
