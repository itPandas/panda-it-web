
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
import { Check, X, Users, Shield, Clock, Package } from 'lucide-react';

const ProductPricingDetails = () => {
  const boxedProducts = [
    {
      name: "1С:Бухгалтерия для Казахстана (базовая версия)",
      price: "78 000",
      description: "Однопользовательская лицензия для ведения бухгалтерского учета",
      users: "1 пользователь"
    },
    {
      name: "1 дополнительное рабочее место",
      price: "38 880",
      description: "Лицензия на дополнительного пользователя",
      users: "+1 пользователь"
    },
    {
      name: "Пакет на 5 рабочих мест",
      price: "120 000",
      description: "Комплект лицензий для небольшого офиса",
      users: "5 пользователей"
    },
    {
      name: "Пакет на 10 рабочих мест",
      price: "220 000",
      description: "Расширенный комплект для средних предприятий",
      users: "10 пользователей"
    }
  ];

  const freshPlans = [
    {
      name: "Старт",
      icon: Users,
      price: "1 990",
      period: "в месяц",
      maxUsers: 3,
      description: "Для начинающих предпринимателей",
      popular: false,
      features: {
        simultaneousUsers: "До 3 пользователей",
        additionalUserCost: "990 ₸/мес за пользователя",
        itsIncluded: true,
        mobileApp: true,
        cloudStorage: "5 ГБ",
        support: "Email поддержка",
        updates: "Автоматические обновления",
        backups: "Ежедневные резервные копии",
        apiAccess: false,
        customReports: false
      }
    },
    {
      name: "Базовый",
      icon: Shield,
      price: "3 990",
      period: "в месяц",
      maxUsers: 10,
      description: "Оптимальное решение для растущего бизнеса",
      popular: true,
      features: {
        simultaneousUsers: "До 10 пользователей",
        additionalUserCost: "499 ₸/мес за пользователя",
        itsIncluded: true,
        mobileApp: true,
        cloudStorage: "25 ГБ",
        support: "Приоритетная поддержка",
        updates: "Автоматические обновления",
        backups: "Ежедневные резервные копии",
        apiAccess: true,
        customReports: true
      }
    },
    {
      name: "Профессиональный",
      icon: Clock,
      price: "7 990",
      period: "в месяц",
      maxUsers: 25,
      description: "Полнофункциональное решение для среднего бизнеса",
      popular: false,
      features: {
        simultaneousUsers: "До 25 пользователей",
        additionalUserCost: "399 ₸/мес за пользователя",
        itsIncluded: true,
        mobileApp: true,
        cloudStorage: "100 ГБ",
        support: "Персональный менеджер",
        updates: "Автоматические обновления",
        backups: "Ежечасные резервные копии",
        apiAccess: true,
        customReports: true
      }
    }
  ];

  const comparisonFeatures = [
    {
      category: "Пользователи",
      features: [
        { name: "Максимальное количество пользователей", start: "3", basic: "10", professional: "25" },
        { name: "Стоимость дополнительного пользователя", start: "990 ₸/мес", basic: "499 ₸/мес", professional: "399 ₸/мес" },
        { name: "Одновременная работа", start: "3 пользователя", basic: "10 пользователей", professional: "25 пользователей" }
      ]
    },
    {
      category: "Сервис и поддержка",
      features: [
        { name: "ИТС (Информационно-технологическое сопровождение)", start: true, basic: true, professional: true },
        { name: "Техническая поддержка", start: "Email", basic: "Приоритетная", professional: "Персональный менеджер" },
        { name: "Автоматические обновления", start: true, basic: true, professional: true },
        { name: "Время ответа поддержки", start: "24 часа", basic: "8 часов", professional: "2 часа" }
      ]
    },
    {
      category: "Хранение и безопасность",
      features: [
        { name: "Облачное хранилище", start: "5 ГБ", basic: "25 ГБ", professional: "100 ГБ" },
        { name: "Резервные копии", start: "Ежедневно", basic: "Ежедневно", professional: "Ежечасно" },
        { name: "Шифрование данных", start: true, basic: true, professional: true },
        { name: "SSL сертификат", start: true, basic: true, professional: true }
      ]
    },
    {
      category: "Функциональность",
      features: [
        { name: "Мобильное приложение", start: true, basic: true, professional: true },
        { name: "API доступ", start: false, basic: true, professional: true },
        { name: "Настраиваемые отчеты", start: false, basic: true, professional: true },
        { name: "Интеграция с банками", start: "Базовая", basic: "Расширенная", professional: "Полная" }
      ]
    }
  ];

  const renderValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">1С:Бухгалтерия для Казахстана</h2>
            <p className="text-xl text-gray-600 mb-6">
              Цены и тарифные планы для ведения бухгалтерского и налогового учета
            </p>
          </div>

          <Tabs defaultValue="fresh" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="fresh">1С:Fresh (облачная версия)</TabsTrigger>
              <TabsTrigger value="boxed">Коробочная версия</TabsTrigger>
            </TabsList>

            <TabsContent value="fresh">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">1С:Fresh - облачная бухгалтерия</h3>
                <p className="text-gray-600">
                  Работайте из любой точки мира без установки программ
                </p>
              </div>

              {/* Тарифные планы Fresh */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {freshPlans.map((plan, index) => {
                  const IconComponent = plan.icon;
                  return (
                    <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-lg scale-105' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Популярный
                          </span>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="text-4xl font-bold text-blue-600">
                          {plan.price} ₸
                          <span className="text-sm font-normal text-gray-600">/{plan.period}</span>
                        </div>
                        <p className="text-sm text-gray-600">{plan.features.simultaneousUsers}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{plan.description}</p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span>Дополнительный пользователь:</span>
                            <span className="font-medium">{plan.features.additionalUserCost}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Облачное хранилище:</span>
                            <span className="font-medium">{plan.features.cloudStorage}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>ИТС включено:</span>
                            {plan.features.itsIncluded ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                          </div>
                        </div>
                        <Button className={`w-full ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}`}>
                          Выбрать план
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Детальное сравнение Fresh */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Подробное сравнение тарифов Fresh</CardTitle>
                  <p className="text-center text-gray-600">
                    Все особенности и отличия тарифных планов 1С:Бухгалтерия Fresh
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    {comparisonFeatures.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                          {category.category}
                        </h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-2/5">Характеристика</TableHead>
                              <TableHead className="text-center">Старт</TableHead>
                              <TableHead className="text-center">Базовый</TableHead>
                              <TableHead className="text-center">Профессиональный</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {category.features.map((feature, featureIndex) => (
                              <TableRow key={featureIndex}>
                                <TableCell className="font-medium">{feature.name}</TableCell>
                                <TableCell className="text-center">{renderValue(feature.start)}</TableCell>
                                <TableCell className="text-center">{renderValue(feature.basic)}</TableCell>
                                <TableCell className="text-center">{renderValue(feature.professional)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3">Что включает ИТС?</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Консультации по работе с программой</li>
                      <li>• Обновления конфигурации</li>
                      <li>• Методические материалы</li>
                      <li>• Типовые решения учетных задач</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3">Преимущества 1С:Fresh</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Работа из любой точки мира</li>
                      <li>• Не требует установки программ</li>
                      <li>• Автоматические резервные копии</li>
                      <li>• Всегда актуальная версия</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="boxed">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Коробочная версия 1С:Бухгалтерия</h3>
                <p className="text-gray-600">
                  Классическая версия для установки на ваших компьютерах
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {boxedProducts.map((product, index) => (
                  <Card key={index} className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                          <Package className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <p className="text-sm text-gray-600">{product.users}</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-orange-600">
                        {product.price} ₸
                        <span className="text-sm font-normal text-gray-600 block">единоразовая оплата</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
                        Купить лицензию
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Особенности коробочной версии</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-green-600">Преимущества</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Единоразовая покупка без абонентской платы</li>
                        <li>• Полный контроль над данными</li>
                        <li>• Работа без интернета</li>
                        <li>• Настройка под специфику бизнеса</li>
                        <li>• Интеграция с локальными системами</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-red-600">Дополнительные расходы</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• ИТС (поддержка): ~15-20% от стоимости лицензии в год</li>
                        <li>• Администрирование сервера</li>
                        <li>• Резервное копирование</li>
                        <li>• Обновление оборудования</li>
                        <li>• Техническая поддержка ИТ-специалиста</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-l-yellow-500">
                <p className="text-sm text-gray-700">
                  <strong>Важно:</strong> Цены на коробочные версии указаны без НДС. 
                  ИТС (информационно-технологическое сопровождение) приобретается отдельно 
                  и необходимо для получения обновлений и поддержки.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Нужна консультация по выбору версии 1С:Бухгалтерия?
            </p>
            <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPricingDetails;
