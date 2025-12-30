import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  return (
    <header className={`${isHomePage ? 'absolute' : 'relative'} top-0 left-0 right-0 z-20 ${isHomePage ? 'bg-white/10 backdrop-blur-sm border-b border-white/20' : 'bg-white border-b border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-bold ${isHomePage ? 'text-white' : 'text-primary'}`}>
              Around Apex
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isHomePage 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/articles" 
              className={`text-sm font-medium transition-colors ${
                isHomePage 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Articles
            </Link>
            {!isHomePage && (
              <div className="text-sm text-gray-500">
                Your Local Newsletter
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isHomePage ? 'text-white' : 'text-gray-700'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isHomePage 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/articles" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isHomePage 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                Articles
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};