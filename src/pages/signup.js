import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../store/userSlice';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Signup.module.css';

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!fullName) tempErrors.fullName = 'Nom complet est requis';
    if (!email) tempErrors.email = 'Email est requis';
    if (!password) tempErrors.password = 'Mot de passe est requis';
    if (password !== confirmPassword) tempErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(signupUser({ fullName, email, password }));
    }
  };

  if (user.isLoggedIn) {
    router.push('/');
  }

  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.title}>Othmane Portfolio</h1>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h2>Inscription</h2>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Nom complet"
          required
          className={styles.inputField}
        />
        {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={styles.inputField}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          required
          className={styles.inputField}
        />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmer mot de passe"
          required
          className={styles.inputField}
        />
        {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
        <button type="submit" className={styles.signupButton}>Inscription</button>
      </form>
      <p className={styles.loginPrompt}>
        Déjà un compte ? <Link href="/login">Connexion</Link>
      </p>
    </div>
  );
};

export default Signup;
