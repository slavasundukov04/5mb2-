import { Link } from 'react-router';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const services = [
    {
      slug: 'technical-audit',
      icon: Search,
      title: 'Технический SEO аудит',
      description: 'Комплексный анализ вашего сайта для выявления технических проблем и возможностей оптимизации'
    },
    {
      slug: 'promotion',
      icon: TrendingUp,
      title: 'Продвижение сайта',
      description: 'Полный комплекс работ по выводу сайта в ТОП поисковых систем Google и Яндекс'
    },
    {
      slug: 'content-marketing',
      icon: FileText,
      title: 'Контент-маркетинг',
      description: 'Создание качественного SEO-оптимизированного контента для привлечения целевой аудитории'
    },
    {
      slug: 'analytics',
      icon: BarChart3,
      title: 'Аналитика и отчеты',
      description: 'Детальная аналитика результатов продвижения с регулярными отчетами о достижениях'
    },
    {
      slug: 'local-seo',
      icon: Target,
      title: 'Локальное SEO',
      description: 'Оптимизация для локального поиска и продвижение в конкретных регионах'
    },
    {
      slug: 'consulting',
      icon: Users,
      title: 'SEO-консультации',
      description: 'Экспертные консультации по стратегии продвижения и развитию вашего онлайн-бизнеса'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Прозрачность',
      description: 'Полная отчетность по всем работам и достигнутым результатам'
    },
    {
      number: '02',
      title: 'Опыт',
      description: 'Более 8 лет успешного опыта в SEO-продвижении различных проектов'
    },
    {
      number: '03',
      title: 'Результат',
      description: 'Гарантированный рост позиций и органического трафика'
    },
    {
      number: '04',
      title: 'Поддержка',
      description: 'Круглосуточная техническая поддержка и консультации'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/90 to-gray-950 z-10"></div>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MTcxNDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="SEO Analytics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-400">Профессиональное SEO-продвижение</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Выведем ваш сайт в <span className="text-blue-500">ТОП</span> поисковых систем
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Комплексное продвижение с гарантией результата
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2 group"
              >
                Начать продвижение
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Полный спектр SEO-услуг
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={`/services/${service.slug}`}
                className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:border-blue-500 transition-all hover:transform hover:scale-105 group"
              >
                <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Смотреть все услуги
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Профессиональные SEO-услуги с реальными результатами
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-400">{benefit.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Узнать больше о нас
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzE2NzQ1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-blue-700/30 border-y border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-gray-300">Успешных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">8+</div>
              <div className="text-gray-300">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Кейсы и результаты</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Примеры успешных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 1, name: 'Интернет-магазин электроники', traffic: '+350%', positions: 'ТОП-3', time: '6 месяцев' },
              { id: 2, name: 'Корпоративный сайт', traffic: '+220%', positions: 'ТОП-5', time: '4 месяца' },
              { id: 3, name: 'Блог о технологиях', traffic: '+480%', positions: 'ТОП-1', time: '8 месяцев' }
            ].map((caseItem) => (
              <Link 
                key={caseItem.id}
                to={`/cases/${caseItem.id}`}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition-all group"
              >
                <div className="mb-6">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc3MTcwODI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Case Study"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{caseItem.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Трафик: <span className="text-blue-400 font-semibold">{caseItem.traffic}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Позиции: <span className="text-blue-400 font-semibold">{caseItem.positions}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Срок: <span className="text-blue-400 font-semibold">{caseItem.time}</span></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/cases"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Смотреть все кейсы
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Готовы начать продвижение?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Получите бесплатную консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Связаться с нами
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/prices"
              className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Посмотреть цены
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}