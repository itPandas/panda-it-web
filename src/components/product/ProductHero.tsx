
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Calendar } from 'lucide-react';

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-5xl font-bold mb-6">1С:Предприятие 8</h1>
            <p className="text-xl text-gray-300 mb-8">
              Комплексное решение для автоматизации учета и управления предприятием. 
              Надежная платформа для ведения бизнеса любого масштаба.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                <Play className="w-5 h-5 mr-2" />
                Посмотреть демо онлайн
              </Button>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-2" />
                Записаться на демонстрацию
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
              alt="1С:Предприятие на компьютере"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
