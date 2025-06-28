
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              IT решения для 
              <span className="block text-gray-600">вашего бизнеса</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Разработка и внедрение 1С, настройка Битрикс24, создание веб-приложений. 
              Автоматизируем ваши бизнес-процессы с профессиональным подходом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/calculator">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
                  Начать проект
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full sm:w-auto">
                  Наши работы
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">150+</div>
                <div className="text-sm text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">50+</div>
                <div className="text-sm text-gray-600">Клиентов</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">5</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-6xl mb-4">🐼</div>
              <h3 className="text-2xl font-bold mb-4">IT-Pandas</h3>
              <p className="text-gray-300">
                Мы превращаем сложные IT-задачи в простые решения, 
                как панды превращают бамбук в энергию для жизни.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
