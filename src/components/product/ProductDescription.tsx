
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Shield, Zap } from 'lucide-react';

const ProductDescription = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Полная автоматизация',
      description: 'Ведение бухгалтерского и налогового учета, управление торговлей и складом'
    },
    {
      icon: Users,
      title: 'Многопользовательский режим',
      description: 'Одновременная работа множества пользователей с разграничением прав доступа'
    },
    {
      icon: Shield,
      title: 'Безопасность данных',
      description: 'Надежная защита информации и резервное копирование данных'
    },
    {
      icon: Zap,
      title: 'Высокая производительность',
      description: 'Быстрая обработка больших объемов данных и генерация отчетов'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Возможности 1С:Предприятие 8</h2>
          <p className="text-xl text-gray-600">
            Универсальная система автоматизации, которая решает все задачи современного бизнеса
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-black transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              1С:Предприятие 8 — это универсальная система автоматизации деятельности предприятия, 
              которая позволяет эффективно решать задачи управленческого и регламентированного учета, 
              а также поддерживать разнообразные направления коммерческой деятельности предприятия.
            </p>
            
            <p>
              Система построена на современной технологической платформе и обеспечивает широкие 
              возможности автоматизации различных участков деятельности предприятия: от ведения 
              учета товарно-материальных ценностей до формирования управленческой отчетности 
              и планирования деятельности предприятия.
            </p>
            
            <p>
              Благодаря гибкой архитектуре, 1С:Предприятие 8 может быть адаптировано под 
              специфические потребности любого бизнеса. Система поддерживает работу как 
              небольших компаний с несколькими сотрудниками, так и крупных предприятий 
              с территориально распределенной структурой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
