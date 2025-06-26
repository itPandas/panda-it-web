
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { CheckCircle, Download, Server, Monitor, Cpu, HardDrive } from 'lucide-react';

const Product1C = () => {
  const systemRequirements = [
    {
      component: "Операционная система",
      requirement: "Windows 10/11, Windows Server 2016/2019/2022",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      component: "Процессор",
      requirement: "Intel Core i5 или AMD Ryzen 5 (рекомендуется i7/Ryzen 7)",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      component: "Оперативная память",
      requirement: "8 ГБ (рекомендуется 16 ГБ)",
      icon: <Server className="w-5 h-5" />
    },
    {
      component: "Свободное место на диске",
      requirement: "10 ГБ для установки + место для данных",
      icon: <HardDrive className="w-5 h-5" />
    }
  ];

  const pricingPlans = [
    {
      name: "Базовая версия",
      description: "Для малого бизнеса",
      price: "45 000",
      features: [
        "Ведение учета товаров",
        "Работа с контрагентами",
        "Простые отчеты",
        "До 5 пользователей",
        "Техподдержка email"
      ],
      popular: false
    },
    {
      name: "Стандарт",
      description: "Для среднего бизнеса",
      price: "85 000",
      features: [
        "Все функции базовой версии",
        "Расширенная аналитика",
        "Интеграция с банками",
        "До 25 пользователей",
        "Техподдержка телефон + email",
        "Обучение персонала"
      ],
      popular: true
    },
    {
      name: "Профессиональная",
      description: "Для крупного бизнеса",
      price: "150 000",
      features: [
        "Все функции стандартной версии",
        "Многофилиальный учет",
        "API для интеграций",
        "Неограниченное количество пользователей",
        "Приоритетная техподдержка 24/7",
        "Персональный менеджер",
        "Настройка под задачи бизнеса"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">1С:Предприятие 8</h1>
              <p className="text-xl text-gray-300 mb-8">
                Комплексное решение для автоматизации учета и управления предприятием
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  <Download className="w-5 h-5 mr-2" />
                  Скачать демо
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">О продукте</h2>
              
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
                
                <p>
                  Важной особенностью системы является возможность интеграции с другими 
                  информационными системами предприятия, банковскими системами, системами 
                  электронного документооборота, что обеспечивает комплексную автоматизацию 
                  всех бизнес-процессов организации.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Системные требования</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {systemRequirements.map((req, index) => (
                  <Card key={index} className="border-l-4 border-l-black">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-black rounded-lg text-white">
                          {req.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{req.component}</h3>
                          <p className="text-gray-600">{req.requirement}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-500" />
                  Дополнительные рекомендации
                </h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Стабильное интернет-соединение для облачных функций</li>
                  <li>• Регулярное резервное копирование данных</li>
                  <li>• Антивирусное программное обеспечение</li>
                  <li>• Microsoft Office для полной совместимости отчетов</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Цены и варианты</h2>
                <p className="text-xl text-gray-600">
                  Выберите подходящий тариф для вашего бизнеса
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.popular ? 'border-2 border-black shadow-xl' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white">
                        Популярный выбор
                      </Badge>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <p className="text-gray-600">{plan.description}</p>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-600"> ₽</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-black hover:bg-gray-800' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Выбрать план
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Нужна индивидуальная настройка или у вас есть вопросы?
                </p>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product1C;
