import PropTypes from 'prop-types';
import Navbar from '../molecules/Navbar';
import Footer from '../organisms/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1" style={{ paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
