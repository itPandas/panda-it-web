
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Target, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const bitrixProjects = [
    {
      id: 1,
      title: "CRM для строительной компании",
      description: "Настройка Битрикс24 для управления проектами и клиентской базой",
      technologies: ["Битрикс24", "CRM", "Проекты"],
      result: "Увеличение конверсии на 25%",
      duration: "2 месяца",
      image: "🏗️",
      challenges: ["Интеграция с внешними системами", "Настройка воронок продаж"],
      solutions: ["Автоматизация процессов", "Кастомные поля и отчеты"]
    },
    {
      id: 2,
      title: "Автоматизация HR-процессов",
      description: "Внедрение системы управления персоналом на базе Битрикс24",
      technologies: ["Битрикс24", "HR", "Автоматизация"],
      result: "Сокращение времени найма на 40%",
      duration: "1.5 месяца",
      image: "👥",
      challenges: ["Интеграция с кадровыми системами", "Настройка бизнес-процессов"],
      solutions: ["Автоматические уведомления", "Система согласований"]
    },
    {
      id: 3,
      title: "Портал для туристической компании",
      description: "Создание корпоративного портала с интеграцией CRM и проектами",
      technologies: ["Битрикс24", "Портал", "Интеграции"],
      result: "Рост продаж на 35%",
      duration: "3 месяца",
      image: "✈️",
      challenges: ["Многоуровневая структура", "Интеграция с системами бронирования"],
      solutions: ["Кастомная разработка", "API интеграции"]
    }
  ];

  const oneСProjects = [
    {
      id: 1,
      title: "Автоматизация торговой компании",
      description: "Внедрение 1С:УТ для оптимизации складских операций и учета товаров",
      technologies: ["1С:УТ", "Интеграция", "Отчеты"],
      result: "Сокращение времени обработки заказов на 40%",
      duration: "2.5 месяца",
      image: "📊",
      challenges: ["Сложная номенклатура", "Интеграция с сайтом"],
      solutions: ["Настройка аналитики", "Обменные процедуры"]
    },
    {
      id: 2,
      title: "Учет производства мебели",
      description: "Настройка 1С:ERP для управления производственными процессами",
      technologies: ["1С:ERP", "Производство", "Планирование"],
      result: "Снижение простоев на 30%",
      duration: "4 месяца",
      image: "🪑",
      challenges: ["Сложные маршруты производства", "Учет комплектующих"],
      solutions: ["Настройка ТЗ", "Производственные календари"]
    },
    {
      id: 3,
      title: "Интернет-магазин с 1С",
      description: "Создание интернет-магазина с полной интеграцией с 1С:УТ",
      technologies: ["1С:УТ", "Веб-разработка", "API"],
      result: "Рост онлайн-продаж на 60%",
      duration: "3 месяца",
      image: "🛒",
      challenges: ["Синхронизация остатков", "Обмен заказами"],
      solutions: ["Real-time синхронизация", "Веб-сервисы"]
    },
    {
      id: 4,
      title: "Автоматизация ресторана",
      description: "Внедрение 1С:Общепит для управления рестораном и доставкой",
      technologies: ["1С:Общепит", "Касса", "Доставка"],
      result: "Увеличение оборота на 20%",
      duration: "1.5 месяца",
      image: "🍽️",
      challenges: ["Интеграция с кассами", "Учет доставки"],
      solutions: ["Настройка оборудования", "Мобильные решения"]
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-black group">
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{project.image}</div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
        </div>
        
        <h3 className="text-2xl font-bold text-black mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <Badge key={index} variant="outline" className="border-black text-black">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Длительность: {project.duration}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">{project.result}</span>
          </div>
        </div>

        {project.challenges && (
          <div className="space-y-2">
            <h4 className="font-semibold text-black text-sm">Задачи:</h4>
            <ul className="space-y-1">
              {project.challenges.map((challenge: string, index: number) => (
                <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.solutions && (
          <div className="space-y-2 mt-3">
            <h4 className="font-semibold text-black text-sm">Решения:</h4>
            <ul className="space-y-1">
              {project.solutions.map((solution: string, index: number) => (
                <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">Наши работы</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Успешные проекты автоматизации и внедрения для различных отраслей бизнеса
          </p>
        </div>

        <Tabs defaultValue="bitrix24" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-gray-100">
            <TabsTrigger 
              value="bitrix24" 
              className="text-lg font-semibold data-[state=active]:bg-black data-[state=active]:text-white"
            >
              Битрикс24
            </TabsTrigger>
            <TabsTrigger 
              value="1c" 
              className="text-lg font-semibold data-[state=active]:bg-black data-[state=active]:text-white"
            >
              1С
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bitrix24" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Проекты на Битрикс24</h2>
              <p className="text-gray-600">
                CRM системы, корпоративные порталы и автоматизация бизнес-процессов
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {bitrixProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="1c" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Проекты на 1С</h2>
              <p className="text-gray-600">
                Учетные системы, автоматизация торговли и производства
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {oneСProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
