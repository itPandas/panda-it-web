import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calculator as CalcIcon, Users, Building, CheckCircle } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';

const Calculator = () => {
  const [selectedTab, setSelectedTab] = useState('1c');
  const [industry, setIndustry] = useState('');
  const [userCount, setUserCount] = useState('');
  const [hasRemoteUsers, setHasRemoteUsers] = useState('');
  
  const industries = [
    { value: 'trade', label: 'Торговля' },
    { value: 'services', label: 'Услуги' },
    { value: 'production', label: 'Производство' },
    { value: 'restaurant', label: 'Ресторанный бизнес' },
    { value: 'retail', label: 'Розничная торговля' },
    { value: 'construction', label: 'Строительство' },
    { value: 'transport', label: 'Транспорт и логистика' },
    { value: 'other', label: 'Другое' }
  ];

  const userCounts = [
    { value: '1-5', label: '1-5 пользователей' },
    { value: '6-10', label: '6-10 пользователей' },
    { value: '11-25', label: '11-25 пользователей' },
    { value: '26-50', label: '26-50 пользователей' },
    { value: '51-100', label: '51-100 пользователей' },
    { value: '100+', label: 'Более 100 пользователей' }
  ];

  const get1CProducts = () => {
    if (!industry) return [];
    
    const products = {
      trade: [
        { name: '1С:Управление торговлей', price: 13200 },
        { name: '1С:Розница', price: 8800 },
        { name: '1С:Комплексная автоматизация', price: 19800 }
      ],
      services: [
        { name: '1С:Управление нашей фирмой', price: 6600 },
        { name: '1С:CRM', price: 11000 },
        { name: '1С:Документооборот', price: 15400 }
      ],
      production: [
        { name: '1С:ERP Управление предприятием', price: 132000 },
        { name: '1С:Управление производственным предприятием', price: 66000 },
        { name: '1С:Комплексная автоматизация', price: 19800 }
      ],
      restaurant: [
        { name: '1С:Общепит', price: 16500 },
        { name: '1С:Розница (Ресторан)', price: 8800 }
      ],
      retail: [
        { name: '1С:Розница', price: 8800 },
        { name: '1С:Управление торговлей', price: 13200 }
      ],
      construction: [
        { name: '1С:Подрядчик строительства', price: 33000 },
        { name: '1С:ERP Управление предприятием', price: 132000 }
      ],
      transport: [
        { name: '1С:Транспорт. Логистика. Управление перевозками', price: 44000 },
        { name: '1С:Управление торговлей', price: 13200 }
      ],
      other: [
        { name: '1С:Управление нашей фирмой', price: 6600 },
        { name: '1С:Бухгалтерия предприятия', price: 4400 }
      ]
    };
    
    return products[industry] || [];
  };

  const getBitrixProducts = () => {
    const basePrice = userCount === '1-5' ? 0 : 
                     userCount === '6-10' ? 3900 :
                     userCount === '11-25' ? 9750 :
                     userCount === '26-50' ? 19500 :
                     userCount === '51-100' ? 39000 : 78000;
    
    return [
      { name: 'Битрикс24 Базовый', price: basePrice },
      { name: 'Битрикс24 Стандарт', price: basePrice * 2 },
      { name: 'Битрикс24 Профессиональный', price: basePrice * 3 },
      { name: 'Битрикс24 Энтерпрайз', price: basePrice * 4 }
    ];
  };

  const getITSCost = () => {
    if (selectedTab !== '1c' || !userCount) return 0;
    
    // ИТС стоимость в зависимости от количества пользователей
    switch(userCount) {
      case '1-5': return 4400;
      case '6-10': return 6600;
      case '11-25': return 8800;
      case '26-50': return 13200;
      case '51-100': return 17600;
      case '100+': return 26400;
      default: return 0;
    }
  };

  const calculateTotal = () => {
    const products = selectedTab === '1c' ? get1CProducts() : getBitrixProducts();
    if (products.length === 0) return 0;
    
    const basePrice = products[0].price;
    const userMultiplier = getUserMultiplier();
    const remoteMultiplier = hasRemoteUsers === 'yes' ? 1.2 : 1;
    const itsPrice = getITSCost();
    
    return Math.round((basePrice * userMultiplier + itsPrice) * remoteMultiplier);
  };

  const getUserMultiplier = () => {
    if (selectedTab === 'bitrix24') return 1;
    
    switch(userCount) {
      case '1-5': return 1;
      case '6-10': return 1.5;
      case '11-25': return 2;
      case '26-50': return 3;
      case '51-100': return 4;
      case '100+': return 5;
      default: return 1;
    }
  };

  const canCalculate = () => {
    return industry && userCount && hasRemoteUsers;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <CalcIcon className="w-16 h-16 text-black" />
          </div>
          <h1 className="text-5xl font-bold text-black mb-4">Калькулятор подбора решений</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите параметры вашего бизнеса и получите предварительную стоимость внедрения
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100">
              <TabsTrigger 
                value="1c" 
                className="text-lg font-semibold data-[state=active]:bg-black data-[state=active]:text-white"
              >
                1С
              </TabsTrigger>
              <TabsTrigger 
                value="bitrix24" 
                className="text-lg font-semibold data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Битрикс24
              </TabsTrigger>
            </TabsList>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Форма выбора параметров */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Параметры вашего бизнеса
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold">Сфера деятельности</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите сферу" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-semibold">Количество рабочих мест</Label>
                    <Select value={userCount} onValueChange={setUserCount}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        {userCounts.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">Есть ли удаленные пользователи?</Label>
                    <RadioGroup value={hasRemoteUsers} onValueChange={setHasRemoteUsers}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="remote-yes" />
                        <Label htmlFor="remote-yes">Да</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="remote-no" />
                        <Label htmlFor="remote-no">Нет</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Результаты расчета */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Рекомендуемые решения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {canCalculate() ? (
                    <>
                      <TabsContent value="1c" className="mt-0">
                        <div className="space-y-4">
                          {get1CProducts().map((product, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">{product.name}</span>
                              <span className="text-green-600 font-bold">
                                {(product.price * getUserMultiplier()).toLocaleString()} ₸
                              </span>
                            </div>
                          ))}
                          
                          {/* ИТС блок */}
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <div>
                              <span className="font-medium">ИТС (обязательно)</span>
                              <p className="text-sm text-blue-700">Информационно-технологическое сопровождение</p>
                            </div>
                            <span className="text-blue-600 font-bold">
                              {getITSCost().toLocaleString()} ₸/год
                            </span>
                          </div>
                          
                          {hasRemoteUsers === 'yes' && (
                            <div className="p-3 bg-orange-50 rounded-lg">
                              <p className="text-sm text-orange-700">
                                + 20% за поддержку удаленных пользователей
                              </p>
                            </div>
                          )}
                        </div>
                      </TabsContent>

                      <TabsContent value="bitrix24" className="mt-0">
                        <div className="space-y-4">
                          {getBitrixProducts().map((product, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">{product.name}</span>
                              <span className="text-green-600 font-bold">
                                {product.price.toLocaleString()} ₸/год
                              </span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <div className="mt-6 p-4 bg-black text-white rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold">
                            {selectedTab === '1c' ? 'Общая стоимость:' : 'Стоимость продукта:'}
                          </span>
                          <span className="text-2xl font-bold">
                            {calculateTotal().toLocaleString()} ₸
                            {selectedTab === '1c' ? '/год' : ''}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 mt-2">
                          {selectedTab === '1c' 
                            ? '* Включает продукт 1С и ИТС. Без учета стоимости внедрения' 
                            : '* Без учета стоимости внедрения и настройки'
                          }
                        </p>
                      </div>

                      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                          <div>
                            <p className="font-semibold text-yellow-800">Точную стоимость работ узнайте у нас</p>
                            <p className="text-sm text-yellow-700 mt-1">
                              Стоимость внедрения зависит от сложности бизнес-процессов и требуемых доработок
                            </p>
                          </div>
                        </div>
                      </div>

                      <ConsultationModal>
                        <Button className="w-full mt-4 bg-black text-white hover:bg-gray-800">
                          Получить точный расчет
                        </Button>
                      </ConsultationModal>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                      <p>Заполните все параметры для расчета стоимости</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calculator;
