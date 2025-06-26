
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Цены и варианты</h2>
            <p className="text-xl text-gray-600">
              Стоимость продуктов 1С в тенге
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Прайс-лист продуктов 1С</CardTitle>
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
