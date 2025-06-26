
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Globe, Settings, Smartphone, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Разработка 1С",
      description: "Создание и доработка конфигураций 1С под ваши бизнес-процессы"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Настройка Битрикс24",
      description: "Внедрение и настройка CRM системы для эффективного управления"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Веб-разработка",
      description: "Создание современных веб-сайтов и приложений"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Мобильные приложения",
      description: "Разработка приложений для iOS и Android"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IT-безопасность",
      description: "Защита ваших данных и информационных систем"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Автоматизация",
      description: "Оптимизация бизнес-процессов через автоматизацию"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр IT-услуг для развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-black">
              <CardHeader>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-black">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
