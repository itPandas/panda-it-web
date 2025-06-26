
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Автоматизация торговой компании",
      description: "Внедрение 1С:УТ для оптимизации складских операций и учета товаров",
      technologies: ["1С:УТ", "Интеграция", "Отчеты"],
      result: "Сокращение времени обработки заказов на 40%",
      image: "📊"
    },
    {
      id: 2,
      title: "CRM для строительной компании",
      description: "Настройка Битрикс24 для управления проектами и клиентской базой",
      technologies: ["Битрикс24", "CRM", "Проекты"],
      result: "Увеличение конверсии на 25%",
      image: "🏗️"
    },
    {
      id: 3,
      title: "Корпоративный портал",
      description: "Разработка внутреннего портала для управления документооборотом",
      technologies: ["React", "Node.js", "PostgreSQL"],
      result: "Ускорение согласования документов в 3 раза",
      image: "📝"
    },
    {
      id: 4,
      title: "Интернет-магазин",
      description: "Создание современного интернет-магазина с интеграцией 1С",
      technologies: ["Next.js", "1С", "API"],
      result: "Рост онлайн-продаж на 60%",
      image: "🛒"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Наши работы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Успешные проекты, которые помогли нашим клиентам достичь целей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-black group">
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
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-black text-black">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-black">Результат:</p>
                  <p className="text-gray-700">{project.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
