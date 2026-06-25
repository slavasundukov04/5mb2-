import { Link } from 'react-router';
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

export function Prices() {
  const packages = [
    {
      name: 'Старт',
      price: '30 000',
      period: 'месяц',
      description: 'Идеально для небольших сайтов и начинающих проектов',
      features: [
        'До 100 ключевых запросов',
        'Базовая оптимизация страниц',
        'Технический аудит',
        'Ежемесячные отчеты',
        'Email поддержка',
        'Анализ конкурентов (базовый)'
      ],
      recommended: false
    },
    {
      name: 'Профессионал',
      price: '60 000',
      period: 'месяц',
      description: 'Оптимальный выбор для среднего бизнеса',
      features: [
        'До 300 ключевых запросов',
        'Полная оптимизация сайта',
        'Детальный технический аудит',
        'Контент-маркетинг (4 статьи)',
        'Наращивание ссылочной массы',
        'Приоритетная поддержка',
        'Детальные отчеты 2 раза в месяц',
        'Анализ конкурентов (расширенный)',
        'Консультации по развитию'
      ],
      recommended: true
    },
    {
      name: 'Бизнес',
      price: '120 000',
      period: 'месяц',
      description: 'Максимальный результат для крупных проектов',
      features: [
        'Неограниченное количество запросов',
        'Комплексная оптимизация',
        'Расширенный технический аудит',
        'Контент-маркетинг (8+ статей)',
        'Агрессивный линкбилдинг',
        'Персональный менеджер 24/7',
        'Еженедельные детальные отчеты',
        'Глубокий анализ конкурентов',
        'Стратегические консультации',
        'A/B тестирование',
        'Conversion Rate Optimization'
      ],
      recommended: false
    }
  ];

  const services = [
    {
      name: 'Технический SEO аудит',
      priceFrom: '25 000',
      priceUnit: 'проект',
      features: ['Полный анализ сайта', 'Детальный отчет', 'План исправлений']
    },
    {
      name: 'Контент-маркетинг',
      priceFrom: '15 000',
      priceUnit: 'статья',
      features: ['SEO-оптимизация', 'Уникальный контент', 'Экспертная проверка']
    },
    {
      name: 'Локальное SEO',
      priceFrom: '30 000',
      priceUnit: 'месяц',
      features: ['Google My Business', 'Локальные справочники', 'Работа с отзывами']
    },
    {
      name: 'SEO-консультация',
      priceFrom: '10 000',
      priceUnit: 'час',
      features: ['Экспертное мнение', 'Стратегические рекомендации', 'Ответы на вопросы']
    }
  ];

  const faqs = [
    {
      question: 'Когда я увижу результаты?',
      answer: 'Первые результаты обычно заметны через 2-3 месяца. Значительный рост позиций и трафика — через 4-6 месяцев регулярной работы.'
    },
    {
      question: 'Можно ли изменить тариф в процессе работы?',
      answer: 'Да, вы можете повысить или понизить тариф в любой момент. Изменения вступят в силу со следующего расчетного периода.'
    },
    {
      question: 'Есть ли гарантия результата?',
      answer: 'Мы гарантируем выполнение всех работ согласно договору. Конкретные результаты зависят от многих факторов, но мы всегда стремимся к максимальной эффективности.'
    },
    {
      question: 'Что входит в стоимость?',
      answer: 'В стоимость входят все работы, указанные в описании тарифа. Дополнительно могут оплачиваться только специфические услуги по вашему запросу.'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-400">Цены</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Прозрачные цены на SEO-продвижение
            </h1>
            <p className="text-xl text-gray-400">
              Выберите подходящий тариф или закажите индивидуальное решение для вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-gray-800/50 border rounded-xl p-8 relative ${
                  pkg.recommended 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-sm">
                    Популярный
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-blue-400">{pkg.price} ₽</span>
                    <span className="text-gray-400">/ {pkg.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  className={`block w-full py-4 rounded-lg text-center transition-colors ${
                    pkg.recommended
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-gray-600 hover:border-blue-500 text-gray-300'
                  }`}
                >
                  Выбрать тариф
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Нужно индивидуальное решение?</p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Обсудить индивидуальный план
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Дополнительные услуги</h2>
            <p className="text-xl text-gray-400">
              Закажите отдельные услуги без пакетного продвижения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-400">от {service.priceFrom} ₽</span>
                  <span className="text-gray-400 text-sm"> / {service.priceUnit}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact"
                  className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1"
                >
                  Заказать
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Не нашли ответ на свой вопрос?</p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors"
            >
              Задать вопрос
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Получите бесплатную консультацию и индивидуальное предложение для вашего проекта
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Получить консультацию
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
