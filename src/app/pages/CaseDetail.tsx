import { useParams, Link, Navigate } from 'react-router';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Target, 
  Users,
  Calendar,
  BarChart3
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const casesData: Record<number, any> = {
  1: {
    title: 'Интернет-магазин электроники',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc3MTcwODI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    client: 'TechStore',
    duration: '6 месяцев',
    challenge: 'Клиент обратился с запросом на продвижение нового интернет-магазина электроники в высококонкурентной нише. Сайт был запущен недавно и не имел органического трафика.',
    solution: 'Разработали комплексную стратегию SEO-продвижения, включающую техническую оптимизацию, создание семантического ядра из 850 ключевых запросов, оптимизацию товарных карточек и категорий, наращивание качественной ссылочной массы.',
    results: {
      traffic: '+350%',
      positions: 'ТОП-3',
      keywords: 850,
      conversion: '+125%'
    },
    achievements: [
      'Вывели 420 запросов в ТОП-10',
      '180 запросов в ТОП-3',
      'Органический трафик вырос с 500 до 2250 посетителей в месяц',
      'Конверсия увеличилась на 125%',
      'ROI составил 340%'
    ],
    services: [
      'Технический SEO аудит',
      'Семантическое ядро',
      'Внутренняя оптимизация',
      'Контент-маркетинг',
      'Ссылочное продвижение',
      'Аналитика и отчетность'
    ]
  },
  2: {
    title: 'Корпоративный сайт юридической компании',
    category: 'B2B',
    image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzE3MTExODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    client: 'LegalPro',
    duration: '4 месяца',
    challenge: 'Юридическая компания нуждалась в увеличении потока качественных заявок через сайт. Конкуренция в нише юридических услуг очень высокая.',
    solution: 'Провели глубокий анализ конкурентов, создали стратегию продвижения по низкочастотным и среднечастотным запросам, оптимизировали структуру сайта, создали экспертный контент по различным направлениям права.',
    results: {
      traffic: '+220%',
      positions: 'ТОП-5',
      keywords: 320,
      conversion: '+180%'
    },
    achievements: [
      'Вывели 180 запросов в ТОП-10',
      '95 запросов в ТОП-5',
      'Органический трафик вырос с 800 до 2560 посетителей в месяц',
      'Количество заявок увеличилось на 180%',
      'Средний чек увеличился на 45%'
    ],
    services: [
      'SEO-аудит',
      'Конкурентный анализ',
      'Оптимизация структуры',
      'Экспертный контент',
      'Локальное SEO',
      'Управление репутацией'
    ]
  },
  3: {
    title: 'Блог о технологиях',
    category: 'Медиа',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcxNjkzMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    client: 'TechBlog',
    duration: '8 месяцев',
    challenge: 'Технологический блог с хорошим контентом не получал достаточного органического трафика из поисковых систем.',
    solution: 'Разработали контент-стратегию, оптимизировали существующие статьи, создали систематизированную структуру категорий, внедрили микроразметку, запустили программу гостевых публикаций.',
    results: {
      traffic: '+480%',
      positions: 'ТОП-1',
      keywords: 1200,
      conversion: '+310%'
    },
    achievements: [
      'Вывели 680 запросов в ТОП-10',
      '320 запросов в ТОП-3',
      'Органический трафик вырос с 2000 до 11600 посетителей в месяц',
      'Время на сайте увеличилось на 65%',
      'Доход от рекламы вырос на 310%'
    ],
    services: [
      'Контент-стратегия',
      'SEO-оптимизация статей',
      'Структурирование контента',
      'Микроразметка',
      'Link building',
      'Техническая оптимизация'
    ]
  },
  4: {
    title: 'Сеть медицинских клиник',
    category: 'Медицина',
    image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjk2MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    client: 'MediCare',
    duration: '5 месяцев',
    challenge: 'Сеть из 5 медицинских клиник нуждалась в увеличении записей на прием через сайт и улучшении видимости в локальном поиске.',
    solution: 'Внедрили стратегию локального SEO, оптимизировали профили в Google My Business и Яндекс.Справочнике, создали отдельные страницы для каждой клиники и услуги, запустили программу по работе с отзывами.',
    results: {
      traffic: '+290%',
      positions: 'ТОП-3',
      keywords: 560,
      conversion: '+240%'
    },
    achievements: [
      'Вывели 320 запросов в ТОП-10',
      '180 запросов в ТОП-3 по локальным запросам',
      'Органический трафик вырос с 1200 до 4680 посетителей в месяц',
      'Количество записей онлайн увеличилось на 240%',
      'Средний рейтинг клиник вырос с 4.2 до 4.8'
    ],
    services: [
      'Локальное SEO',
      'Google My Business оптимизация',
      'Работа с отзывами',
      'Контент для медицины',
      'Структура сайта',
      'Мобильная оптимизация'
    ]
  },
  5: {
    title: 'Онлайн-школа программирования',
    category: 'Образование',
    image: 'https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MTcxNTg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    client: 'CodeAcademy',
    duration: '7 месяцев',
    challenge: 'Образовательная платформа испытывала трудности с привлечением органического трафика в условиях высокой конкуренции с крупными игроками рынка.',
    solution: 'Создали образовательный контент-хаб с бесплатными материалами, оптимизировали страницы курсов, запустили блог с практическими руководствами, построили стратегию продвижения по информационным запросам.',
    results: {
      traffic: '+410%',
      positions: 'ТОП-2',
      keywords: 920,
      conversion: '+195%'
    },
    achievements: [
      'Вывели 520 запросов в ТОП-10',
      '280 запросов в ТОП-3',
      'Органический трафик вырос с 1500 до 7650 посетителей в месяц',
      'Количество регистраций увеличилось на 195%',
      'Конверсия в платные курсы выросла на 85%'
    ],
    services: [
      'Контент-маркетинг',
      'SEO-продвижение',
      'Образовательный контент',
      'Оптимизация лендингов',
      'Email-маркетинг',
      'Техническая оптимизация'
    ]
  },
  6: {
    title: 'Производство мебели на заказ',
    category: 'Производство',
    image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjk2MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    client: 'FurniturePro',
    duration: '6 месяцев',
    challenge: 'Производственная компания мебели работала только с дилерами и хотела начать принимать заказы от частных клиентов через сайт.',
    solution: 'Создали B2C раздел сайта с портфолио работ, оптимизировали под коммерческие запросы, запустили локальное продвижение в регионах присутствия, создали систему визуализации проектов.',
    results: {
      traffic: '+180%',
      positions: 'ТОП-5',
      keywords: 420,
      conversion: '+160%'
    },
    achievements: [
      'Вывели 240 запросов в ТОП-10',
      '120 запросов в ТОП-5',
      'Органический трафик вырос с 600 до 1680 посетителей в месяц',
      'Получили 85 заказов на мебель через сайт',
      'Средний чек составил 180 000 рублей'
    ],
    services: [
      'Разработка структуры B2C',
      'Коммерческое SEO',
      'Фото и видео контент',
      'Локальное продвижение',
      'Оптимизация конверсии',
      'Интеграция с CRM'
    ]
  }
};

export function CaseDetail() {
  const { id } = useParams();
  const caseData = id ? casesData[parseInt(id)] : null;

  if (!caseData) {
    return <Navigate to="/cases" replace />;
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/cases"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Все кейсы
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
                <span className="text-blue-400">{caseData.category}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{caseData.title}</h1>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{caseData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{caseData.client}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
              <ImageWithFallback 
                src={caseData.image}
                alt={caseData.title}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-gradient-to-r from-blue-900/30 to-blue-700/30 border-y border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-400 mb-2">{caseData.results.traffic}</div>
              <div className="text-gray-300">Рост трафика</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-400 mb-2">{caseData.results.positions}</div>
              <div className="text-gray-300">Позиции</div>
            </div>
            <div className="text-center">
              <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-400 mb-2">{caseData.results.keywords}</div>
              <div className="text-gray-300">Ключевых слов</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-400 mb-2">{caseData.results.conversion}</div>
              <div className="text-gray-300">Рост конверсии</div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Задача</h2>
                <p className="text-xl text-gray-300">{caseData.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Решение</h2>
                <p className="text-xl text-gray-300">{caseData.solution}</p>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Достижения</h2>
                <div className="space-y-4">
                  {caseData.achievements.map((achievement: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Использованные услуги</h3>
                <div className="space-y-3">
                  {caseData.services.map((service: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-gray-400 mb-6">
                    Хотите получить такие же результаты для вашего бизнеса?
                  </p>
                  <Link 
                    to="/contact"
                    className="block w-full bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg text-center transition-colors"
                  >
                    Начать продвижение
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Cases */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Другие кейсы</h2>
            <p className="text-gray-400">Посмотрите больше примеров наших работ</p>
          </div>
          <div className="text-center">
            <Link 
              to="/cases"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              Смотреть все кейсы
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
