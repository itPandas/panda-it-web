
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-black mb-8">Условия использования</h1>
          
          <div className="bg-white rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">1. Общие условия</h2>
              <p className="text-gray-600 leading-relaxed">
                Использование сайта IT-Pandas означает ваше согласие с данными условиями использования. 
                Если вы не согласны с какими-либо из этих условий, пожалуйста, не используйте наш сайт.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">2. Использование сайта</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Вы можете использовать наш сайт для:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Получения информации о наших услугах</li>
                <li>Заказа консультаций и услуг</li>
                <li>Подачи заявок на вакансии</li>
                <li>Использования калькулятора стоимости</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">3. Ограничения использования</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Запрещается использовать сайт для:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Незаконных или мошеннических действий</li>
                <li>Передачи вредоносного программного обеспечения</li>
                <li>Нарушения авторских прав или интеллектуальной собственности</li>
                <li>Спама или несанкционированной рекламы</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">4. Интеллектуальная собственность</h2>
              <p className="text-gray-600 leading-relaxed">
                Все материалы на сайте, включая тексты, изображения, логотипы и дизайн, 
                являются собственностью IT-Pandas и защищены авторским правом. 
                Использование материалов без письменного разрешения запрещено.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">5. Услуги и цены</h2>
              <p className="text-gray-600 leading-relaxed">
                Информация о услугах и ценах на сайте носит информационный характер. 
                Окончательная стоимость определяется после консультации и анализа ваших потребностей. 
                Мы оставляем за собой право изменять цены без предварительного уведомления.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">6. Ограничение ответственности</h2>
              <p className="text-gray-600 leading-relaxed">
                IT-Pandas не несет ответственности за любые прямые или косвенные убытки, 
                возникшие в результате использования или невозможности использования сайта. 
                Мы не гарантируем бесперебойную работу сайта и отсутствие ошибок.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">7. Изменения условий</h2>
              <p className="text-gray-600 leading-relaxed">
                Мы оставляем за собой право изменять данные условия использования в любое время. 
                Изменения вступают в силу с момента их публикации на сайте. 
                Регулярно проверяйте данную страницу для ознакомления с актуальными условиями.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">8. Контактная информация</h2>
              <p className="text-gray-600 leading-relaxed">
                По вопросам, связанным с условиями использования, обращайтесь: <br/>
                Email: <a href="mailto:info@it-pandas.ru" className="text-black hover:underline">info@it-pandas.ru</a><br/>
                Телефон: +7 (999) 123-45-67
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

export default Terms;
