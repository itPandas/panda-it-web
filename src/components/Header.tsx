
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ConsultationModal from './ConsultationModal';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-black transition-colors font-medium px-4 py-2">
                    Главная
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-black transition-colors font-medium">
                    1С
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-48 bg-white">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/product/1c" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Программные продукты
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/its" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          ИТС
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/1c-articles" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Статьи
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/integrations" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Интеграции
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-black transition-colors font-medium">
                    Bitrix24
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-48 bg-white">
                      <NavigationMenuLink asChild>
                        <a 
                          href="/bitrix24-overview" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Обзор функций
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/bitrix24-news" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Новости
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/bitrix24-articles" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Статьи
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/bitrix24-guide" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Справочник
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-black transition-colors font-medium">
                    Webkassa
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-48 bg-white">
                      <NavigationMenuLink asChild>
                        <a 
                          href="/webkassa-overview" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Обзор функций
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/webkassa-news" 
                          className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        >
                          Новости
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/news" className="text-gray-700 hover:text-black transition-colors font-medium px-4 py-2">
                    Новости
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="/about" className="text-gray-700 hover:text-black transition-colors font-medium px-4 py-2">
                    О Компании
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium px-4 py-2">
                    Контакты
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <ConsultationModal>
              <Button className="bg-black text-white hover:bg-gray-800">
                Получить консультацию
              </Button>
            </ConsultationModal>
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
              <div className="space-y-2">
                <div className="font-medium text-gray-900">1С</div>
                <div className="ml-4 space-y-1">
                  <Link to="/product/1c" className="block text-gray-700 hover:text-black transition-colors">
                    Программные продукты
                  </Link>
                  <a href="/its" className="block text-gray-700 hover:text-black transition-colors">
                    ИТС
                  </a>
                  <a href="/1c-articles" className="block text-gray-700 hover:text-black transition-colors">
                    Статьи
                  </a>
                  <a href="/integrations" className="block text-gray-700 hover:text-black transition-colors">
                    Интеграции
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Bitrix24</div>
                <div className="ml-4 space-y-1">
                  <a href="/bitrix24-overview" className="block text-gray-700 hover:text-black transition-colors">
                    Обзор функций
                  </a>
                  <a href="/bitrix24-news" className="block text-gray-700 hover:text-black transition-colors">
                    Новости
                  </a>
                  <a href="/bitrix24-articles" className="block text-gray-700 hover:text-black transition-colors">
                    Статьи
                  </a>
                  <a href="/bitrix24-guide" className="block text-gray-700 hover:text-black transition-colors">
                    Справочник
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Webkassa</div>
                <div className="ml-4 space-y-1">
                  <a href="/webkassa-overview" className="block text-gray-700 hover:text-black transition-colors">
                    Обзор функций
                  </a>
                  <a href="/webkassa-news" className="block text-gray-700 hover:text-black transition-colors">
                    Новости
                  </a>
                </div>
              </div>
              <Link to="/news" className="text-gray-700 hover:text-black transition-colors font-medium">
                Новости
              </Link>
              <a href="/about" className="text-gray-700 hover:text-black transition-colors font-medium">
                О Компании
              </a>
              <a href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">
                Контакты
              </a>
              <ConsultationModal>
                <Button className="bg-black text-white hover:bg-gray-800 w-full mt-4">
                  Получить консультацию
                </Button>
              </ConsultationModal>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
