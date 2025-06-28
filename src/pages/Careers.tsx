
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const vacancies = [
    {
      id: 1,
      title: "Разработчик 1С",
      department: "Разработка",
      location: "Москва",
      type: "Полная занятость",
      experience: "2-5 лет",
      salary: "от 120 000₸",
      description: "Ищем опытного разработчика 1С для работы над интересными проектами",
      requirements: ["Опыт работы с 1С:Предприятие 8", "Знание языка программирования 1С", "Опыт интеграции с внешними системами"],
      isActive: true
    },
    {
      id: 2,
      title: "Специалист по Битрикс24",
      department: "Консалтинг",
      location: "Москва / Удаленно",
      type: "Полная занятость",
      experience: "1-3 года",
      salary: "от 80 000₸",
      description: "Требуется специалист по настройке и внедрению Битрикс24",
      requirements: ["Опыт работы с Битрикс24", "Навыки настройки CRM", "Умение работать с клиентами"],
      isActive: true
    },
    {
      id: 3,
      title: "Frontend разработчик",
      department: "Разработка",
      location: "Москва",
      type: "Полная занятость",
      experience: "2-4 года",
      salary: "от 100 000₸",
      description: "Ищем frontend разработчика для создания современных веб-приложений",
      requirements: ["React, TypeScript", "Опыт с современными инструментами", "Знание UI/UX принципов"],
      isActive: true
    },
    {
      id: 4,
      title: "Проект-менеджер",
      department: "Управление проектами",
      location: "Москва",
      type: "Полная занятость",
      experience: "3-6 лет",
      salary: "от 150 000₸",
      description: "Требуется опытный проект-менеджер для управления IT-проектами",
      requirements: ["Опыт управления IT-проектами", "Знание Agile/Scrum", "Навыки коммуникации"],
      isActive: false
    }
  ];

  const activeVacancies = vacancies.filter(v => v.isActive);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-black mb-6">Карьера в IT-Pandas</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Присоединяйтесь к нашей команде профессионалов и развивайтесь вместе с нами в мире IT-технологий
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">{activeVacancies.length}</div>
              <p className="text-gray-600">Открытых вакансий</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">15+</div>
              <p className="text-gray-600">Специалистов в команде</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">3</div>
              <p className="text-gray-600">Года на рынке</p>
            </div>
          </div>

          {/* Vacancies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Открытые вакансии</h2>
            
            {activeVacancies.length > 0 ? (
              <div className="grid gap-6">
                {activeVacancies.map((vacancy) => (
                  <Card key={vacancy.id} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h3 className="text-2xl font-bold text-black">{vacancy.title}</h3>
                            <Badge className="bg-green-100 text-green-800">{vacancy.department}</Badge>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{vacancy.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
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
                          
                          <div className="text-lg font-semibold text-black">
                            {vacancy.salary}
                          </div>
                        </div>
                        
                        <div className="mt-6 lg:mt-0 lg:ml-8">
                          <Link to={`/careers/${vacancy.id}`}>
                            <Button className="bg-black text-white hover:bg-gray-800 w-full lg:w-auto">
                              Подробнее
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">В данный момент открытых вакансий нет</p>
                <p className="text-gray-500 mt-2">Но вы можете отправить нам свое резюме!</p>
                <Link to="/careers/apply">
                  <Button className="bg-black text-white hover:bg-gray-800 mt-6">
                    Отправить резюме
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Why join us */}
          <div className="bg-white rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Почему стоит работать с нами?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-2">Интересные проекты</h3>
                <p className="text-gray-600">Работа с современными технологиями и сложными задачами</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-2">Профессиональный рост</h3>
                <p className="text-gray-600">Обучение, сертификации и развитие навыков</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-2">Гибкий график</h3>
                <p className="text-gray-600">Возможность удаленной работы и гибкого расписания</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
