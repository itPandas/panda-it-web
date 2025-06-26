
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Server, Monitor, Cpu, HardDrive } from 'lucide-react';

const SystemRequirements = () => {
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

  return (
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
  );
};

export default SystemRequirements;
