import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userSlice';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  if (user.isLoggedIn) {
    router.push('/');
  }

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Othmane Portfolio</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Connexion</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={styles.inputField}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.loginButton}>Connexion</button>
      </form>
      <p className={styles.signupPrompt}>
        Pas encore de compte ? <Link href="/signup">Créer un compte</Link>
      </p>
    </div>
  );
};

export default Login;
