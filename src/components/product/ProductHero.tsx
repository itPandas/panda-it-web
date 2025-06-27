
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import ConsultationModal from '../ConsultationModal';

const ProductHero = () => {
  return (
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
            <ConsultationModal>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Получить консультацию
              </Button>
            </ConsultationModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
