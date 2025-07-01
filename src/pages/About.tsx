
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О компании IT-Pandas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Мы — команда профессионалов, специализирующихся на разработке и внедрении 
              IT-решений на базе 1С и Битрикс24. Наша миссия — помочь бизнесу автоматизировать 
              процессы и достичь новых высот эффективности.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black">5+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black">100+</div>
              <div className="text-gray-600">Успешных проектов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black">50+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-black">15</div>
              <div className="text-gray-600">Специалистов в команде</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Наши ценности
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Команда</h3>
                <p className="text-gray-600">
                  Сильная команда профессионалов с многолетним опытом в IT-сфере
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Точность</h3>
                <p className="text-gray-600">
                  Внимание к деталям и точное выполнение поставленных задач
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Качество</h3>
                <p className="text-gray-600">
                  Высокие стандарты качества в каждом проекте и решении
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Скорость</h3>
                <p className="text-gray-600">
                  Быстрая реализация проектов без ущерба для качества
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Кто мы такие
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    IT-Pandas — это команда увлеченных профессионалов, которые помогают 
                    бизнесу расти и развиваться с помощью современных технологий. 
                    Мы специализируемся на платформах 1С и Битрикс24, но наши 
                    возможности этим не ограничиваются.
                  </p>
                  <p>
                    За годы работы мы накопили огромный опыт в автоматизации бизнес-процессов, 
                    разработке индивидуальных решений и интеграции различных систем. 
                    Наши клиенты — это компании разного масштаба, от небольших стартапов 
                    до крупных корпораций.
                  </p>
                  <p>
                    Мы гордимся тем, что можем предложить не просто техническое решение, 
                    а комплексный подход к автоматизации, который действительно 
                    помогает оптимизировать работу и увеличить прибыль наших клиентов.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Наши услуги
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Разработка и настройка конфигураций 1С
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Внедрение и настройка Битрикс24
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Интеграция различных систем
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Техническая поддержка и обслуживание
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Консультации по автоматизации бизнеса
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
