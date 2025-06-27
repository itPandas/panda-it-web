
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

interface ConsultationModalProps {
  children: React.ReactNode;
}

const ConsultationModal = ({ children }: ConsultationModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsOpen(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-black">Получить консультацию</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Имя *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="border-2 focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Email *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="border-2 focus:border-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Телефон
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="border-2 focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Компания
              </label>
              <Input
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="border-2 focus:border-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Сообщение
            </label>
            <Textarea
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="border-2 focus:border-black"
              placeholder="Расскажите о ваших потребностях..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-gray-800">
            <Send className="w-5 h-5 mr-2" />
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
