import { Link } from 'react-router';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Cases() {
  const cases = [
    {
      id: 1,
      title: 'Интернет-магазин электроники',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc3MTcwODI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Продвижение крупного интернет-магазина электроники с нуля',
      traffic: '+350%',
      positions: 'ТОП-3',
      time: '6 месяцев',
      keywords: 850
    },
    {
      id: 2,
      title: 'Корпоративный сайт юридической компании',
      category: 'B2B',
      image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzE3MTExODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'SEO-продвижение юридических услуг в высококонкурентной нише',
      traffic: '+220%',
      positions: 'ТОП-5',
      time: '4 месяца',
      keywords: 320
    },
    {
      id: 3,
      title: 'Блог о технологиях',
      category: 'Медиа',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcxNjkzMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Контент-маркетинг и SEO для технологического блога',
      traffic: '+480%',
      positions: 'ТОП-1',
      time: '8 месяцев',
      keywords: 1200
    },
    {
      id: 4,
      title: 'Сеть медицинских клиник',
      category: 'Медицина',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjk2MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Локальное SEO для сети медицинских центров',
      traffic: '+290%',
      positions: 'ТОП-3',
      time: '5 месяцев',
      keywords: 560
    },
    {
      id: 5,
      title: 'Онлайн-школа программирования',
      category: 'Образование',
      image: 'https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MTcxNTg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Комплексное продвижение образовательной платформы',
      traffic: '+410%',
      positions: 'ТОП-2',
      time: '7 месяцев',
      keywords: 920
    },
    {
      id: 6,
      title: 'Производство мебели на заказ',
      category: 'Производство',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjk2MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'SEO для производственной компании с региональным продвижением',
      traffic: '+180%',
      positions: 'ТОП-5',
      time: '6 месяцев',
      keywords: 420
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-400">Наши проекты</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Кейсы успешного продвижения
            </h1>
            <p className="text-xl text-gray-400">
              Реальные результаты наших клиентов в различных нишах бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-900/30 to-blue-700/30 border-y border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-gray-300">Завершенных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">+380%</div>
              <div className="text-gray-300">Средний рост трафика</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">Клиенты остаются с нами</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">8+ лет</div>
              <div className="text-gray-300">Опыт в SEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem) => (
              <Link
                key={caseItem.id}
                to={`/cases/${caseItem.id}`}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                      {caseItem.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{caseItem.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-400">Трафик</div>
                      <div className="text-xl font-semibold text-blue-400">{caseItem.traffic}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Позиции</div>
                      <div className="text-xl font-semibold text-blue-400">{caseItem.positions}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <span className="text-sm text-gray-400">{caseItem.keywords} ключевых слов</span>
                    <span className="text-blue-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                      Подробнее
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Хотите такие же результаты?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Начните продвижение вашего сайта уже сегодня и получите бесплатную консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Получить консультацию
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services"
              className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Наши услуги
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
