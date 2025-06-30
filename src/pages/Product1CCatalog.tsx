
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, ShoppingCart, Building2, Factory } from 'lucide-react';

const Product1CCatalog = () => {
  const products = [
    {
      id: 'accounting',
      title: '1С:Бухгалтерия',
      description: 'Комплексная автоматизация бухгалтерского и налогового учета',
      icon: Calculator,
      features: ['Ведение бухучета', 'Налоговая отчетность', 'Зарплата и кадры']
    },
    {
      id: 'unf',
      title: '1С:УНФ',
      description: 'Управление небольшой фирмой - простое и эффективное решение',
      icon: Building2,
      features: ['Торговля', 'Склад', 'Деньги', 'Отчеты']
    },
    {
      id: 'retail',
      title: '1С:Розница',
      description: 'Автоматизация розничной торговли и управления магазинами',
      icon: ShoppingCart,
      features: ['Кассовые операции', 'Управление товарами', 'Лояльность клиентов']
    },
    {
      id: 'erp',
      title: '1С:ERP',
      description: 'Комплексное управление предприятием любого масштаба',
      icon: Factory,
      features: ['Производство', 'Логистика', 'Финансы', 'CRM']
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
              <h1 className="text-5xl font-bold mb-6">Каталог 1С решений</h1>
              <p className="text-xl text-gray-300 mb-8">
                Выберите подходящее решение для автоматизации вашего бизнеса
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product) => {
                const IconComponent = product.icon;
                return (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow border-2 hover:border-black">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{product.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/product/1c">
                        <Button className="w-full bg-black text-white hover:bg-gray-800">
                          Подробнее
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product1CCatalog;
