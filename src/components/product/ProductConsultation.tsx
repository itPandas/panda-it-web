
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import ConsultationModal from '../ConsultationModal';

const ProductConsultation = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🐼</div>
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Наши эксперты помогут выбрать оптимальное решение для вашего бизнеса 
            и проведут бесплатную консультацию
          </p>
          <ConsultationModal>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
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
