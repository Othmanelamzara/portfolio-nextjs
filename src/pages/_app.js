import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthWrapper>
    </Provider>
  );
}

function AuthWrapper({ children }) {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isLoggedIn && router.pathname !== '/login' && router.pathname !== '/signup') {
      router.push('/login');
    }
  }, [user.isLoggedIn, router]);

  return children;
}

export default MyApp;
