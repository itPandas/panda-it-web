
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Globe, Smartphone, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'Программные продукты',
      description: 'Готовые решения 1С для автоматизации бизнеса',
      link: '/products/1c'
    },
    {
      icon: Settings,
      title: 'Настройка Битрикс24',
      description: 'Внедрение и настройка CRM-системы для управления продажами'
    },
    {
      icon: Globe,
      title: 'Веб-разработка',
      description: 'Создание современных веб-сайтов и интернет-магазинов'
    },
    {
      icon: Smartphone,
      title: 'Мобильные приложения',
      description: 'Разработка приложений для iOS и Android'
    },
    {
      icon: Code,
      title: 'Доработка 1С',
      description: 'Модификация типовых конфигураций под задачи бизнеса'
    },
    {
      icon: Users,
      title: 'ИТ-консалтинг',
      description: 'Консультации по выбору и внедрению ИТ-решений'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предлагаем комплексные IT-решения для автоматизации и развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-black group">
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-black">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  {service.link ? (
                    <Link to={service.link}>
                      <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                        Подробнее
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                      Подробнее
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
