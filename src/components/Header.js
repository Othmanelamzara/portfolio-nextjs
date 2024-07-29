import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/project1">Projet 1</Link>
          </li>
          <li>
            <Link href="/project2">Projet 2</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/testimonials">Témoignages</Link>
          </li>
          <li>
            <Link href="/addtestimonial">Ajouter votre Témoignage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
