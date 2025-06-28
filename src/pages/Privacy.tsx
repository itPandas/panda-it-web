
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-black mb-8">Политика конфиденциальности</h1>
          
          <div className="bg-white rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">1. Общие положения</h2>
              <p className="text-gray-600 leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                пользователей сайта IT-Pandas. Мы уважаем вашу конфиденциальность и обязуемся защищать 
                персональные данные, которые вы предоставляете нам.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">2. Сбор персональных данных</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Мы собираем следующие виды персональных данных:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Имя и контактная информация (телефон, email)</li>
                <li>Информация о компании и сфере деятельности</li>
                <li>Данные, предоставляемые при заполнении форм на сайте</li>
                <li>Техническая информация о посещении сайта</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">3. Цели обработки данных</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Персональные данные используются для:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Предоставления консультаций и услуг</li>
                <li>Связи с клиентами и потенциальными сотрудниками</li>
                <li>Улучшения качества обслуживания</li>
                <li>Информирования о новых услугах и акциях</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">4. Защита данных</h2>
              <p className="text-gray-600 leading-relaxed">
                Мы принимаем все необходимые меры для защиты ваших персональных данных от 
                несанкционированного доступа, изменения, раскрытия или уничтожения. Данные 
                хранятся на защищенных серверах с ограниченным доступом.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">5. Права пользователей</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Вы имеете право:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Получать информацию об обработке ваших данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">6. Контактная информация</h2>
              <p className="text-gray-600 leading-relaxed">
                По вопросам, связанным с обработкой персональных данных, обращайтесь по адресу: 
                <a href="mailto:info@it-pandas.ru" className="text-black hover:underline">info@it-pandas.ru</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">7. Изменения в политике</h2>
              <p className="text-gray-600 leading-relaxed">
                Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности. 
                Все изменения будут опубликованы на данной странице.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Последнее обновление: 28 июня 2024 года
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
