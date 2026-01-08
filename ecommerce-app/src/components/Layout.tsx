import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
