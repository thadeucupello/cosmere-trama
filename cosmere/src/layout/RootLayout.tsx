import { Outlet } from 'react-router-dom';
import StarField from '../components/StarField';
import Header from '../components/Header';
import ScrollManager from '../components/ScrollManager';
import Newsletter from '../sections/Newsletter';
import Footer from '../sections/Footer';

export default function RootLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      <ScrollManager />
      <StarField />
      <Header />

      <main id="main-content">
        <Outlet />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
