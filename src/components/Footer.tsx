
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xl">🐼</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">IT-Pandas</h3>
                <p className="text-gray-400 text-sm">1C & Битрикс24</p>
              </div>
            </div>
            <p className="text-gray-400">
              Профессиональные IT-решения для развития вашего бизнеса
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Разработка 1С</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Настройка Битрикс24</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Мобильные приложения</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">О нас</a></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Наши работы</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">Новости</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Карьера</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (999) 123-45-67</li>
              <li>info@it-pandas.ru</li>
              <li>г. Москва, ул. IT-разработчиков, д. 1</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 IT-Pandas. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
