
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - в реальном проекте это будет загружаться из API
  const articles = [
    {
      id: 1,
      title: "Новые возможности 1С:ERP 2.5",
      excerpt: "Обзор ключевых обновлений в последней версии 1С:ERP и их влияние на бизнес-процессы. Рассматриваем новые модули управления производством.",
      content: `
        <h2>Ключевые нововведения в 1С:ERP 2.5</h2>
        <p>Новая версия 1С:ERP принесла множество улучшений, которые значительно расширяют возможности системы управления предприятием.</p>
        
        <h3>Новый модуль управления производством</h3>
        <p>Один из самых значительных апдейтов - полностью переработанный модуль управления производством. Теперь система позволяет:</p>
        <ul>
          <li>Планировать производственные процессы с учетом загрузки оборудования</li>
          <li>Отслеживать движение материалов в режиме реального времени</li>
          <li>Автоматически рассчитывать себестоимость продукции</li>
          <li>Формировать детальные отчеты по эффективности производства</li>
        </ul>

        <h3>Улучшенная интеграция с внешними системами</h3>
        <p>Новые возможности интеграции позволяют легко подключать сторонние сервисы и системы, что особенно важно для комплексной автоматизации бизнес-процессов.</p>

        <h3>Расширенная аналитика</h3>
        <p>Обновленная система отчетности предоставляет руководителям более глубокие инсайты о работе предприятия, помогая принимать обоснованные управленческие решения.</p>

        <p>Эти обновления делают 1С:ERP 2.5 еще более мощным инструментом для управления современным предприятием.</p>
      `,
      date: "2024-01-15",
      category: "1С",
      image: "🔧",
      author: "Александр Петров"
    },
    {
      id: 2,
      title: "Интеграция Битрикс24 с внешними системами",
      excerpt: "Практические советы по настройке интеграции Битрикс24 с популярными сервисами. REST API, веб-хуки и автоматизация процессов.",
      content: `
        <h2>Интеграция Битрикс24: расширяем возможности CRM</h2>
        <p>Битрикс24 предоставляет мощные возможности для интеграции с внешними системами, что позволяет создать единую экосистему для управления бизнесом.</p>
        
        <h3>REST API - основа интеграции</h3>
        <p>REST API Битрикс24 позволяет программно взаимодействовать с большинством объектов системы:</p>
        <ul>
          <li>Лиды и сделки</li>
          <li>Контакты и компании</li>
          <li>Задачи и проекты</li>
          <li>Календарь и события</li>
        </ul>

        <h3>Веб-хуки для автоматизации</h3>
        <p>Веб-хуки позволяют автоматически реагировать на события в Битрикс24, что открывает широкие возможности для автоматизации бизнес-процессов.</p>

        <h3>Популярные интеграции</h3>
        <p>Рассмотрим наиболее востребованные интеграции:</p>
        <ul>
          <li>Интеграция с телефонией</li>
          <li>Подключение интернет-магазинов</li>
          <li>Синхронизация с 1С</li>
          <li>Интеграция с почтовыми сервисами</li>
        </ul>
      `,
      date: "2024-01-10",
      category: "Битрикс24",
      image: "🔗",
      author: "Мария Сидорова"
    },
    {
      id: 3,
      title: "Тренды веб-разработки 2024",
      excerpt: "Какие технологии будут актуальны в этом году и как это повлияет на ваш бизнес. React 18, TypeScript, современные подходы к разработке.",
      content: `
        <h2>Тренды веб-разработки в 2024 году</h2>
        <p>2024 год принес много интересных изменений в мир веб-разработки. Рассмотрим ключевые тренды, которые влияют на создание современных веб-приложений.</p>
        
        <h3>React 18 и новые возможности</h3>
        <p>React 18 представил революционные возможности:</p>
        <ul>
          <li>Concurrent Features для улучшения производительности</li>
          <li>Automatic Batching для оптимизации рендеринга</li>
          <li>Suspense для лучшего управления загрузкой данных</li>
        </ul>

        <h3>TypeScript становится стандартом</h3>
        <p>TypeScript окончательно утвердился как основной язык для разработки масштабных веб-приложений, обеспечивая типизацию и снижая количество ошибок.</p>

        <h3>JAMstack и статическая генерация</h3>
        <p>Архитектура JAMstack продолжает набирать популярность благодаря высокой производительности и безопасности.</p>

        <h3>Влияние на бизнес</h3>
        <p>Эти технологии позволяют создавать более быстрые, надежные и масштабируемые веб-решения для бизнеса.</p>
      `,
      date: "2024-01-05",
      category: "Веб-разработка",
      image: "🚀",
      author: "Дмитрий Козлов"
    }
  ];

  const article = articles.find(a => a.id === parseInt(id || ''));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Статья не найдена</h1>
            <Button onClick={() => navigate('/news')} className="bg-black text-white hover:bg-gray-800">
              <ArrowLeft size={16} className="mr-2" />
              Вернуться к новостям
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/news')}
            className="mb-8 border-black text-black hover:bg-black hover:text-white"
          >
            <ArrowLeft size={16} className="mr-2" />
            Назад к новостям
          </Button>

          {/* Article header */}
          <header className="mb-8">
            <div className="text-6xl mb-6">{article.image}</div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {new Date(article.date).toLocaleDateString('ru-RU')}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                {article.author}
              </div>
              <span className="bg-black text-white px-3 py-1 rounded text-xs">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Article content */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-black prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Related articles suggestion */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-black mb-6">Читайте также</h3>
            <Button 
              onClick={() => navigate('/news')}
              className="bg-black text-white hover:bg-gray-800"
            >
              Все новости
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle;
