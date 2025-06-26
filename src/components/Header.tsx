
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-xl">🐼</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">IT-Pandas</h1>
              <p className="text-sm text-gray-600">1C & Битрикс24</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors font-medium">
              Главная
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-black transition-colors font-medium">
              Новости
            </Link>
            <Link to="/product/1c" className="text-gray-700 hover:text-black transition-colors font-medium">
              Продукты
            </Link>
            <a href="/portfolio" className="text-gray-700 hover:text-black transition-colors font-medium">
              Портфолио
            </a>
            <a href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">
              Контакты
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-black text-white hover:bg-gray-800">
              Получить консультацию
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-gray-700 hover:text-black transition-colors font-medium">
                Главная
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-black transition-colors font-medium">
                Новости
              </Link>
              <Link to="/product/1c" className="text-gray-700 hover:text-black transition-colors font-medium">
                Продукты
              </Link>
              <a href="/portfolio" className="text-gray-700 hover:text-black transition-colors font-medium">
                Портфолио
              </a>
              <a href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">
                Контакты
              </a>
              <Button className="bg-black text-white hover:bg-gray-800 w-full mt-4">
                Получить консультацию
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
