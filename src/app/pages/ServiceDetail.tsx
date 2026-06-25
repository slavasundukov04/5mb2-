import { useParams, Link, Navigate } from 'react-router';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Target, 
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp as Chart
} from 'lucide-react';

const servicesData: Record<string, any> = {
  'technical-audit': {
    icon: Search,
    title: 'Технический SEO аудит',
    subtitle: 'Комплексный анализ технических аспектов вашего сайта',
    description: 'Технический SEO аудит — это глубокий анализ всех технических аспектов вашего сайта, влияющих на его видимость в поисковых системах. Мы проверяем структуру, производительность, индексацию и другие критически важные параметры.',
    features: [
      'Анализ структуры URL и навигации сайта',
      'Проверка скорости загрузки страниц',
      'Аудит мобильной версии сайта',
      'Анализ файлов robots.txt и sitemap.xml',
      'Проверка внутренней перелинковки',
      'Анализ дублированного контента',
      'Проверка HTTPS и безопасности',
      'Аудит микроразметки Schema.org'
    ],
    benefits: [
      'Выявление всех технических проблем',
      'Подробный план исправлений',
      'Приоритизация задач',
      'Рекомендации по оптимизации'
    ],
    process: [
      'Сканирование сайта специализированными инструментами',
      'Анализ данных Search Console и Analytics',
      'Проверка индексации и crawl budget',
      'Составление детального отчета с рекомендациями'
    ],
    price: 'от 25 000 ₽',
    duration: '5-7 дней'
  },
  'promotion': {
    icon: TrendingUp,
    title: 'Продвижение сайта',
    subtitle: 'Комплексное SEO-продвижение для выхода в ТОП',
    description: 'Полный комплекс работ по продвижению сайта в поисковых системах. Мы используем белые методы оптимизации для достижения стабильных и долгосрочных результатов в Google и Яндекс.',
    features: [
      'Сбор и кластеризация семантического ядра',
      'Оптимизация существующих страниц',
      'Создание новых посадочных страниц',
      'Наращивание качественной ссылочной массы',
      'Работа с поведенческими факторами',
      'Контент-маркетинг и копирайтинг',
      'Техническая оптимизация',
      'Регулярный мониторинг позиций'
    ],
    benefits: [
      'Рост позиций по целевым запросам',
      'Увеличение органического трафика',
      'Повышение узнаваемости бренда',
      'Рост конверсий и продаж'
    ],
    process: [
      'Аудит и анализ конкурентов',
      'Разработка стратегии продвижения',
      'Внутренняя и внешняя оптимизация',
      'Мониторинг и корректировка стратегии'
    ],
    price: 'от 50 000 ₽/мес',
    duration: 'от 6 месяцев'
  },
  'content-marketing': {
    icon: FileText,
    title: 'Контент-маркетинг',
    subtitle: 'Создание качественного SEO-контента',
    description: 'Разработка и реализация контент-стратегии для привлечения целевой аудитории. Создаем полезный и оптимизированный контент, который помогает продвигать сайт и привлекать клиентов.',
    features: [
      'Разработка контент-стратегии',
      'Написание SEO-статей и обзоров',
      'Оптимизация существующего контента',
      'Создание коммерческих текстов',
      'Разработка инфографики',
      'Создание FAQ и глоссариев',
      'Ведение корпоративного блога',
      'Контент для социальных сетей'
    ],
    benefits: [
      'Привлечение целевого трафика',
      'Улучшение поведенческих факторов',
      'Повышение экспертности бренда',
      'Естественный рост ссылочной массы'
    ],
    process: [
      'Анализ целевой аудитории',
      'Планирование контент-календаря',
      'Создание и публикация материалов',
      'Анализ эффективности контента'
    ],
    price: 'от 15 000 ₽',
    duration: 'от 1 месяца'
  },
  'analytics': {
    icon: BarChart3,
    title: 'Аналитика и отчеты',
    subtitle: 'Отслеживание и анализ результатов продвижения',
    description: 'Настройка систем аналитики, регулярный мониторинг ключевых показателей и детальная отчетность. Предоставляем прозрачную информацию о результатах SEO-работ.',
    features: [
      'Настройка Google Analytics и Яндекс.Метрики',
      'Настройка целей и событий',
      'Мониторинг позиций в поисковых системах',
      'Анализ органического трафика',
      'Отслеживание конверсий',
      'Анализ конкурентов',
      'Детальные ежемесячные отчеты',
      'Рекомендации по улучшению'
    ],
    benefits: [
      'Полная прозрачность результатов',
      'Понимание ROI от SEO',
      'Выявление точек роста',
      'Data-driven решения'
    ],
    process: [
      'Настройка систем аналитики',
      'Определение KPI',
      'Регулярный сбор данных',
      'Подготовка отчетов и рекомендаций'
    ],
    price: 'от 20 000 ₽',
    duration: 'постоянно'
  },
  'local-seo': {
    icon: Target,
    title: 'Локальное SEO',
    subtitle: 'Продвижение в локальном поиске',
    description: 'Оптимизация для локального поиска помогает привлекать клиентов из вашего региона. Особенно эффективно для бизнеса с офлайн-точками и локальных услуг.',
    features: [
      'Оптимизация Google My Business',
      'Регистрация в локальных справочниках',
      'Работа с картографическими сервисами',
      'Сбор и управление отзывами',
      'Геозависи��ая оптимизация контента',
      'Локальная ссылочная масса',
      'Оптимизация для голосового поиска',
      'Мониторинг локальных позиций'
    ],
    benefits: [
      'Видимость в локальном поиске',
      'Привлечение клиентов из региона',
      'Рост офлайн-продаж',
      'Конкурентное преимущество'
    ],
    process: [
      'Аудит локального присутствия',
      'Оптимизация профилей в сервисах',
      'Работа с отзывами и рейтингом',
      'Локальная контент-стратегия'
    ],
    price: 'от 30 000 ₽',
    duration: 'от 3 месяцев'
  },
  'consulting': {
    icon: Users,
    title: 'SEO-консультации',
    subtitle: 'Экспертная помощь в SEO-продвижении',
    description: 'Получите экспертные консультации по всем вопросам SEO-продвижения. Поможем разработать стратегию, обучим команду и решим сложные задачи.',
    features: [
      'Разработка SEO-стратегии',
      'Консультации по техническим вопросам',
      'Аудит текущих работ',
      'Обучение внутренней команды',
      'Подбор подрядчиков',
      'Консультации по инструментам',
      'Помощь в спорных ситуациях',
      'Долгосрочное сопровождение'
    ],
    benefits: [
      'Экспертное мнение',
      'Экономия времени и средств',
      'Избежание ошибок',
      'Передача знаний команде'
    ],
    process: [
      'Анализ текущей ситуации',
      'Определение целей и задач',
      'Разработка рекомендаций',
      'Поддержка при реализации'
    ],
    price: 'от 10 000 ₽/час',
    duration: 'по запросу'
  }
};

export function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Все услуги
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <ServiceIcon className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold">{service.title}</h1>
              </div>
            </div>
            <p className="text-2xl text-gray-300 mb-8">{service.subtitle}</p>
            <p className="text-xl text-gray-400">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Что входит в услугу</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Процесс работы</h2>
                <div className="space-y-4">
                  {service.process.map((step: string, index: number) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                        <span className="font-bold text-blue-400">{index + 1}</span>
                      </div>
                      <div className="pt-1">
                        <p className="text-gray-300">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Преимущества</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                      <CheckCircle className="w-8 h-8 text-blue-400 mb-3" />
                      <p className="text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 sticky top-24">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Стоимость</div>
                    <div className="text-3xl font-bold text-blue-400">{service.price}</div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Срок: {service.duration}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span>Гарантия результата</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Chart className="w-5 h-5 text-blue-400" />
                    <span>Прозрачная отчетность</span>
                  </div>

                  <Link 
                    to="/contact"
                    className="block w-full bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg text-center transition-colors"
                  >
                    Заказать услугу
                  </Link>

                  <p className="text-sm text-gray-400 text-center">
                    Или позвоните нам: <br />
                    <a href="tel:+79991234567" className="text-blue-400 hover:text-blue-300">
                      +7 (999) 123-45-67
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Остались вопросы?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Получите бесплатную консультацию и узнайте, как эта услуга поможет вашему бизнесу
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Связаться с нами
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
