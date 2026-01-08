import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amazon-blue text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Links */}
          <nav className="flex space-x-6" aria-label="Footer navigation">
            <Link to="/about" className="hover:text-amazon-orange transition-colors">
              About
            </Link>
            <Link to="/help" className="hover:text-amazon-orange transition-colors">
              Help
            </Link>
            <Link to="/privacy" className="hover:text-amazon-orange transition-colors">
              Privacy
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Amazon-Store. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
