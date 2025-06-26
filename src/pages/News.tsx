
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 6;

  const allNews = [
    {
      id: 1,
      title: "Новые возможности 1С:ERP 2.5",
      excerpt: "Обзор ключевых обновлений в последней версии 1С:ERP и их влияние на бизнес-процессы. Рассматриваем новые модули управления производством.",
      content: "Подробное описание всех новых функций и возможностей...",
      date: "2024-01-15",
      category: "1С",
      image: "🔧",
      author: "Александр Петров"
    },
    {
      id: 2,
      title: "Интеграция Битрикс24 с внешними системами",
      excerpt: "Практические советы по настройке интеграции Битрикс24 с популярными сервисами. REST API, веб-хуки и автоматизация процессов.",
      content: "Пошаговое руководство по интеграции...",
      date: "2024-01-10",
      category: "Битрикс24",
      image: "🔗",
      author: "Мария Сидорова"
    },
    {
      id: 3,
      title: "Тренды веб-разработки 2024",
      excerpt: "Какие технологии будут актуальны в этом году и как это повлияет на ваш бизнес. React 18, TypeScript, современные подходы к разработке.",
      content: "Анализ современных трендов...",
      date: "2024-01-05",
      category: "Веб-разработка",
      image: "🚀",
      author: "Дмитрий Козлов"
    },
    {
      id: 4,
      title: "Автоматизация учета с помощью 1С:Бухгалтерия 8",
      excerpt: "Как правильно настроить автоматизацию бухгалтерского учета. Типовые конфигурации и индивидуальные доработки.",
      content: "Руководство по автоматизации...",
      date: "2024-01-03",
      category: "1С",
      image: "📊",
      author: "Елена Васильева"
    },
    {
      id: 5,
      title: "CRM-система: выбираем правильное решение",
      excerpt: "Сравнение популярных CRM-систем для малого и среднего бизнеса. Битрикс24, amoCRM, Pipedrive - что выбрать?",
      content: "Детальное сравнение CRM...",
      date: "2024-01-01",
      category: "CRM",
      image: "📈",
      author: "Игорь Морозов"
    },
    {
      id: 6,
      title: "Мобильные приложения для бизнеса",
      excerpt: "Разработка корпоративных мобильных приложений. React Native, Flutter или нативная разработка - что выбрать?",
      content: "Сравнение технологий мобильной разработки...",
      date: "2023-12-28",
      category: "Мобильная разработка",
      image: "📱",
      author: "Анна Волкова"
    },
    {
      id: 7,
      title: "Безопасность 1С: защищаем корпоративные данные",
      excerpt: "Лучшие практики обеспечения безопасности в системах 1С. Резервное копирование, права доступа, мониторинг.",
      content: "Руководство по безопасности 1С...",
      date: "2023-12-25",
      category: "1С",
      image: "🔐",
      author: "Сергей Николаев"
    },
    {
      id: 8,
      title: "Оптимизация производительности веб-приложений",
      excerpt: "Методы повышения скорости загрузки и работы веб-приложений. Кэширование, CDN, оптимизация изображений.",
      content: "Техники оптимизации производительности...",
      date: "2023-12-20",
      category: "Веб-разработка",
      image: "⚡",
      author: "Владимир Смирнов"
    },
    {
      id: 9,
      title: "Цифровая трансформация малого бизнеса",
      excerpt: "Как современные IT-решения помогают малому бизнесу конкурировать на рынке. Автоматизация, аналитика, клиентский сервис.",
      content: "Стратегии цифровой трансформации...",
      date: "2023-12-18",
      category: "Бизнес",
      image: "🏢",
      author: "Ольга Федорова"
    }
  ];

  const categories = ["Все", "1С", "Битрикс24", "Веб-разработка", "CRM", "Мобильная разработка", "Бизнес"];
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredNews = allNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Новости IT-Pandas</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Актуальные новости из мира IT, полезные статьи и экспертные мнения
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Поиск по новостям..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-black text-white" : "border-black text-black hover:bg-black hover:text-white"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {currentNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Новости не найдены</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentNews.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                    <CardHeader className="pb-0">
                      <div className="text-4xl mb-4">{article.image}</div>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar size={16} className="mr-1" />
                        {new Date(article.date).toLocaleDateString('ru-RU')}
                        <span className="ml-4 bg-black text-white px-2 py-1 rounded text-xs">
                          {article.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-3 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        Автор: {article.author}
                      </p>
                      <Link to={`/news/${article.id}`}>
                        <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                          Читать далее
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="justify-center">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(currentPage - 1);
                          }}
                        />
                      </PaginationItem>
                    )}
                    
                    {[...Array(totalPages)].map((_, index) => (
                      <PaginationItem key={index + 1}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === index + 1}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(index + 1);
                          }}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(currentPage + 1);
                          }}
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
