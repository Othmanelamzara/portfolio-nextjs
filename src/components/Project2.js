import React from 'react';
import styles from './Project2.module.css';

function Project2() {
  return (
    <div className={styles.projectPage}>
      <h1>Projet 2: Site E-commerce</h1>
      <div className={styles.projectContent}>
        <p>Création d'un site e-commerce complet avec Spring Boot et React, intégrant un système de paiement sécurisé.</p>
        
        <section className={styles.section}>
          <h2>Description</h2>
          <p>Ce site e-commerce permet aux utilisateurs de parcourir des produits, de les ajouter à leur panier, et de procéder au paiement en ligne de manière sécurisée. Le site inclut des fonctionnalités de gestion de produits, de commandes, et de comptes utilisateurs.</p>
        </section>

        <section className={styles.section}>
          <h2>Technologies Utilisées</h2>
          <ul>
            <li>Frontend: React, CSS</li>
            <li>Backend: Spring Boot, REST API</li>
            <li>Base de Données: MySQL</li>
            <li>Outils: Git, Docker</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Project2;
