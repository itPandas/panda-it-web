
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import ConsultationModal from '../ConsultationModal';

const ProductConsultation = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Нужна консультация по выбору продукта или расчет стоимости?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Наши эксперты помогут выбрать оптимальное решение для вашего бизнеса 
            и проведут бесплатную консультацию
          </p>
          <ConsultationModal>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              <MessageSquare className="w-5 h-5 mr-2" />
              Получить консультацию
            </Button>
          </ConsultationModal>
        </div>
      </div>
    </section>
  );
};

export default ProductConsultation;
