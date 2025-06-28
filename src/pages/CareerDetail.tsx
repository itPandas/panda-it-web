
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, ArrowLeft, Send } from 'lucide-react';

const CareerDetail = () => {
  const { id } = useParams();
  
  // В реальном приложении данные будут загружаться из API
  const vacancy = {
    id: 1,
    title: "Разработчик 1С",
    department: "Разработка",
    location: "Москва",
    type: "Полная занятость",
    experience: "2-5 лет",
    salary: "от 120 000₸",
    description: "Ищем опытного разработчика 1С для работы над интересными проектами автоматизации бизнес-процессов. Вы будете работать в команде профессионалов над сложными и интересными задачами.",
    requirements: [
      "Опыт работы с 1С:Предприятие 8 от 2 лет",
      "Знание языка программирования 1С",
      "Опыт интеграции с внешними системами",
      "Навыки работы с SQL",
      "Понимание принципов построения информационных систем"
    ],
    responsibilities: [
      "Разработка и доработка конфигураций 1С",
      "Создание отчетов и обработок",
      "Интеграция с внешними системами",
      "Техническая поддержка пользователей",
      "Участие в проектах автоматизации"
    ],
    conditions: [
      "Конкурентная заработная плата",
      "Официальное трудоустройство",
      "Полный социальный пакет",
      "Возможность профессионального развития",
      "Современный офис в центре города",
      "Дружный коллектив"
    ],
    isActive: true
  };

  if (!vacancy.isActive) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-black mb-4">Вакансия не найдена</h1>
            <p className="text-gray-600 mb-8">Извините, данная вакансия больше не доступна</p>
            <Link to="/careers">
              <Button className="bg-black text-white hover:bg-gray-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться к вакансиям
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/careers" className="text-gray-500 hover:text-black transition-colors">
              Карьера
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black">{vacancy.title}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <h1 className="text-3xl font-bold text-black">{vacancy.title}</h1>
                    <Badge className="bg-green-100 text-green-800">{vacancy.department}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {vacancy.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {vacancy.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {vacancy.experience}
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-black mb-6">
                    {vacancy.salary}
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {vacancy.description}
                  </p>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-black mb-6">Требования</h2>
                  <ul className="space-y-3">
                    {vacancy.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Responsibilities */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-black mb-6">Обязанности</h2>
                  <ul className="space-y-3">
                    {vacancy.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Conditions */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-black mb-6">Условия работы</h2>
                  <ul className="space-y-3">
                    {vacancy.conditions.map((condition, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span className="text-gray-700">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-6">Откликнуться на вакансию</h3>
                  
                  <div className="space-y-4 mb-6">
                    <Link to={`/careers/apply?vacancy=${vacancy.id}`}>
                      <Button className="bg-black text-white hover:bg-gray-800 w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Отправить резюме
                      </Button>
                    </Link>
                    
                    <Link to="/careers">
                      <Button variant="outline" className="w-full">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Все вакансии
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Есть вопросы?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Свяжитесь с нами для получения дополнительной информации
                    </p>
                    <div className="text-sm">
                      <p className="text-gray-600">📧 hr@it-pandas.ru</p>
                      <p className="text-gray-600">📞 +7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerDetail;
