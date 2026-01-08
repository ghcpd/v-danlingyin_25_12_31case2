import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amazon-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-full bg-amazon-light hover:bg-gray-600 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2 focus:ring-offset-amazon-dark mb-6"
          aria-label="Back to top"
        >
          Back to top
        </button>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange rounded"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange rounded"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange rounded"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <Link 
            to="/" 
            className="inline-block text-2xl font-bold mb-4 hover:text-amazon-orange transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange rounded"
            aria-label="ShopZone Home"
          >
            <span className="text-amazon-orange">Shop</span>Zone
          </Link>
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} ShopZone. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This is a demo e-commerce website. No real transactions are processed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
