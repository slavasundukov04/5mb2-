import { Link } from 'react-router';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Target, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function Services() {
  const services = [
    {
      slug: 'technical-audit',
      icon: Search,
      title: 'Технический SEO аудит',
      description: 'Комплексный анализ вашего сайта для выявления технических проблем и возможностей оптимизации',
      features: [
        'Анализ структуры сайта',
        'Проверка скорости загрузки',
        'Аудит мобильной версии',
        'Анализ внутренней перелинковки'
      ],
      price: 'от 25 000 ₽'
    },
    {
      slug: 'promotion',
      icon: TrendingUp,
      title: 'Продвижение сайта',
      description: 'Полный комплекс работ по выводу сайта в ТОП поисковых систем Google и Яндекс',
      features: [
        'Подбор семантического ядра',
        'Оптимизация контента',
        'Наращивание ссылочной массы',
        'Работа с поведенческими факторами'
      ],
      price: 'от 50 000 ₽/мес'
    },
    {
      slug: 'content-marketing',
      icon: FileText,
      title: 'Контент-маркетинг',
      description: 'Создание качественного SEO-оптимизированного контента для привлечения целевой аудитории',
      features: [
        'Написание статей',
        'Оптимизация текстов',
        'Контент-планирование',
        'Создание инфографики'
      ],
      price: 'от 15 000 ₽'
    },
    {
      slug: 'analytics',
      icon: BarChart3,
      title: 'Аналитика и отчеты',
      description: 'Детальная аналитика результатов продвижения с регулярными отчетами о достижениях',
      features: [
        'Настройка систем аналитики',
        'Отслеживание позиций',
        'Анализ конкурентов',
        'Ежемесячные отчеты'
      ],
      price: 'от 20 000 ₽'
    },
    {
      slug: 'local-seo',
      icon: Target,
      title: 'Локальное SEO',
      description: 'Оптимизация для локального поиска и продвижение в конкретных регионах',
      features: [
        'Регистрация в справочниках',
        'Оптимизация Google My Business',
        'Работа с отзывами',
        'Геозависимая оптимизация'
      ],
      price: 'от 30 000 ₽'
    },
    {
      slug: 'consulting',
      icon: Users,
      title: 'SEO-консультации',
      description: 'Экспертные консультации по стратегии продвижения и развитию вашего онлайн-бизнеса',
      features: [
        'Разработка стратегии',
        'Обучение команды',
        'Консультации по SEO',
        'Поддержка проектов'
      ],
      price: 'от 10 000 ₽/час'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-400">Наши услуги</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Комплексные решения для SEO-продвижения
            </h1>
            <p className="text-xl text-gray-400">
              Выберите подходящую услугу или закажите полный комплекс работ для максимального результата
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.slug}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all group"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <service.icon className="w-7 h-7 text-blue-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Стоимость</div>
                      <div className="text-xl font-semibold text-blue-400">{service.price}</div>
                    </div>
                    <Link 
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                      Подробнее
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Проверенная методология для достижения максимальных результатов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Анализ',
                description: 'Изучаем ваш сайт, конкурентов и целевую аудиторию'
              },
              {
                step: '02',
                title: 'Стратегия',
                description: 'Разрабатываем индивидуальный план продвижения'
              },
              {
                step: '03',
                title: 'Реализация',
                description: 'Выполняем запланированные работы по оптимизации'
              },
              {
                step: '04',
                title: 'Результат',
                description: 'Отслеживаем показатели и масштабируем успех'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-blue-400">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Не знаете, какую услугу выбрать?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Получите бесплатную консультацию, и мы подберем оптимальное решение для вашего бизнеса
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
