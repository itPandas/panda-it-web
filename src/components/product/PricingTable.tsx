
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Cloud, Users, Building } from 'lucide-react';

const PricingTable = () => {
  const products = [
    {
      name: "1С:Бухгалтерия для Казахстана",
      price: "78 000",
      description: "Базовая версия для ведения бухгалтерского учета"
    },
    {
      name: "1 дополнительное рабочее место",
      price: "38 880",
      description: "Лицензия на дополнительного пользователя"
    },
    {
      name: "Пакет на 5 рабочих мест",
      price: "120 000",
      description: "Комплект лицензий для небольшого офиса"
    },
    {
      name: "1С:Управление торговлей для Казахстана",
      price: "95 000",
      description: "Решение для автоматизации торговых процессов"
    },
    {
      name: "1С:Зарплата и управление персоналом",
      price: "65 000",
      description: "Кадровый учет и расчет заработной платы"
    },
    {
      name: "1С:Управление производственным предприятием",
      price: "180 000",
      description: "Комплексное решение для производства"
    },
    {
      name: "Пакет на 10 рабочих мест",
      price: "220 000",
      description: "Расширенный комплект для средних предприятий"
    },
    {
      name: "1С:CRM КОРП",
      price: "85 000",
      description: "Система управления взаимоотношениями с клиентами"
    }
  ];

  const freshPlans = [
    {
      name: "Старт",
      icon: Users,
      price: "1 990",
      period: "в месяц",
      users: "До 3 пользователей",
      description: "Идеально для начинающих предпринимателей и малого бизнеса",
      features: [
        "Ведение бухгалтерского учета",
        "Управление торговлей",
        "Кадровый учет",
        "Онлайн-касса",
        "Мобильное приложение",
        "Техподдержка"
      ],
      popular: false
    },
    {
      name: "Базовый",
      icon: Building,
      price: "3 990",
      period: "в месяц",
      users: "До 10 пользователей",
      description: "Оптимальное решение для растущего бизнеса",
      features: [
        "Все возможности тарифа Старт",
        "Расширенная отчетность",
        "Интеграция с банками",
        "Электронный документооборот",
        "API для интеграций",
        "Приоритетная поддержка"
      ],
      popular: true
    },
    {
      name: "Профессиональный",
      icon: Cloud,
      price: "7 990",
      period: "в месяц",
      users: "До 25 пользователей",
      description: "Полнофункциональное решение для среднего бизнеса",
      features: [
        "Все возможности тарифа Базовый",
        "Управление производством",
        "Бюджетирование и планирование",
        "Аналитические панели",
        "Персональный менеджер",
        "Обучение сотрудников"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Цены и варианты</h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий вариант для вашего бизнеса
            </p>
          </div>

          <Tabs defaultValue="fresh" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="fresh">1С:Fresh (облачные решения)</TabsTrigger>
              <TabsTrigger value="boxed">Коробочные версии</TabsTrigger>
            </TabsList>

            <TabsContent value="fresh">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">1С:Fresh - облачные решения</h3>
                <p className="text-gray-600">
                  Работайте из любой точки мира без установки программ
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {freshPlans.map((plan, index) => {
                  const IconComponent = plan.icon;
                  return (
                    <Card key={index} className={`relative ${plan.popular ? 'border-2 border-black shadow-lg' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            Популярный
                          </span>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold text-black">
                          {plan.price} ₸
                          <span className="text-sm font-normal text-gray-600">/{plan.period}</span>
                        </div>
                        <p className="text-sm text-gray-600">{plan.users}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{plan.description}</p>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className={`w-full ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : ''}`}>
                          Выбрать план
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                <p className="text-sm text-gray-700">
                  <strong>1С:Fresh</strong> - это облачная версия 1С, которая не требует установки на компьютер. 
                  Все данные хранятся в облаке, доступ возможен из любой точки мира через интернет.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="boxed">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Прайс-лист коробочных продуктов 1С</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/2">Наименование продукта</TableHead>
                        <TableHead className="text-center">Цена</TableHead>
                        <TableHead className="w-1/3">Описание</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell className="text-center font-bold text-lg">
                            {product.price} ₸
                          </TableCell>
                          <TableCell className="text-gray-600">{product.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-l-yellow-500">
                    <p className="text-sm text-gray-700">
                      <strong>Примечание:</strong> Цены указаны в тенге и могут изменяться. 
                      Для получения актуальной стоимости и индивидуальных предложений 
                      обращайтесь к нашим специалистам.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Нужна консультация по выбору продукта или расчет стоимости?
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
