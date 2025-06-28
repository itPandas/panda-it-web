
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Upload, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CareerApply = () => {
  const [searchParams] = useSearchParams();
  const vacancyId = searchParams.get('vacancy');
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Здесь будет отправка данных на сервер
    console.log('Form submitted:', formData);
    
    toast({
      title: "Успешно отправлено!",
      description: "Ваше резюме получено. Мы свяжемся с вами в ближайшее время.",
    });

    // Очистка формы
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/careers" className="text-gray-500 hover:text-black transition-colors">
              Карьера
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black">Подача резюме</span>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-black">
                  Отправить резюме
                </CardTitle>
                <p className="text-gray-600">
                  {vacancyId 
                    ? "Заполните форму ниже, чтобы откликнуться на вакансию" 
                    : "Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих вакансий"
                  }
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Professional Info */}
                  <div>
                    <Label htmlFor="position">Желаемая должность</Label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Например: Разработчик 1С"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Опыт работы</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="text"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Например: 3 года"
                      className="mt-1"
                    />
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <Label htmlFor="coverLetter">Сопроводительное письмо</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Расскажите о себе, своем опыте и мотивации..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <Label htmlFor="resume">Резюме</Label>
                    <div className="mt-1">
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('resume')?.click()}
                        className="w-full"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {formData.resume ? formData.resume.name : 'Загрузить резюме'}
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Поддерживаемые форматы: PDF, DOC, DOCX (макс. 5MB)
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-6">
                    <Button
                      type="submit"
                      className="bg-black text-white hover:bg-gray-800 flex-1"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Отправить резюме
                    </Button>
                    
                    <Link to="/careers">
                      <Button type="button" variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Назад
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Что дальше?</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Мы рассмотрим ваше резюме в течение 2-3 рабочих дней</p>
                  <p>• При положительном решении пригласим на собеседование</p>
                  <p>• Процесс отбора включает техническое интервью</p>
                  <p>• О результатах мы обязательно сообщим по email или телефону</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerApply;
