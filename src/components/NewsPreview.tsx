
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsPreview = () => {
  const news = [
    {
      id: 1,
      title: "Новые возможности 1С:ERP 2.5",
      excerpt: "Обзор ключевых обновлений в последней версии 1С:ERP и их влияние на бизнес-процессы.",
      date: "2024-01-15",
      category: "1С",
      image: "🔧"
    },
    {
      id: 2,
      title: "Интеграция Битрикс24 с внешними системами",
      excerpt: "Практические советы по настройке интеграции Битрикс24 с популярными сервисами.",
      date: "2024-01-10",
      category: "Битрикс24",
      image: "🔗"
    },
    {
      id: 3,
      title: "Тренды веб-разработки 2024",
      excerpt: "Какие технологии будут актуальны в этом году и как это повлияет на ваш бизнес.",
      date: "2024-01-05",
      category: "Веб-разработка",
      image: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Последние новости</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Актуальная информация из мира IT и наших проектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
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
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                  Читать далее
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            Все новости
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
