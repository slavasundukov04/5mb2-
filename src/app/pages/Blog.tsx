import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      slug: 'complete-guide-to-technical-seo',
      title: 'Полное руководство по техническому SEO в 2026 году',
      excerpt: 'Узнайте все о техническом SEO: от оптимизации скорости загрузки до настройки структурированных данных',
      image: 'https://images.unsplash.com/photo-1653038417404-1ae1f38c373e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBrZXl3b3JkcyUyMHJlc2VhcmNofGVufDF8fHx8MTc3MTcxNjIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Технический SEO',
      date: '15 февраля 2026',
      readTime: '12 мин'
    },
    {
      id: 2,
      slug: 'how-to-create-semantic-core',
      title: 'Как правильно собрать семантическое ядро',
      excerpt: 'Пошаговая инструкция по сбору и кластеризации семантического ядра для эффективного продвижения',
      image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzcxNjk3NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'SEO-стратегия',
      date: '10 февраля 2026',
      readTime: '10 мин'
    },
    {
      id: 3,
      slug: 'content-marketing-for-seo',
      title: 'Контент-маркетинг для SEO: лучшие практики',
      excerpt: 'Как создавать контент, который не только привлекает читателей, но и повышает позиции в поиске',
      image: 'https://images.unsplash.com/photo-1770368787729-6a42187b668c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3cml0aW5nJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzcxNzE2MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Контент',
      date: '5 февраля 2026',
      readTime: '8 мин'
    },
    {
      id: 4,
      slug: 'local-seo-optimization',
      title: 'Локальное SEO: как привлечь клиентов из вашего региона',
      excerpt: 'Полное руководство по локальному SEO-продвижению для бизнеса с офлайн-точками',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcxNjkzMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Локальное SEO',
      date: '1 февраля 2026',
      readTime: '15 мин'
    },
    {
      id: 5,
      slug: 'link-building-strategies',
      title: 'Эффективные стратегии линкбилдинга в 2026',
      excerpt: 'Современные белые методы наращивания ссылочной массы без риска санкций',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc3MTcwODI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Линкбилдинг',
      date: '28 января 2026',
      readTime: '11 мин'
    },
    {
      id: 6,
      slug: 'mobile-seo-optimization',
      title: 'Мобильная оптимизация: must-have в 2026',
      excerpt: 'Как оптимизировать сайт для мобильных устройств и улучшить позиции в mobile-first индексе',
      image: 'https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MTcxNTg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Технический SEO',
      date: '22 января 2026',
      readTime: '9 мин'
    }
  ];

  const categories = ['Все статьи', 'Технический SEO', 'SEO-стратегия', 'Контент', 'Локальное SEO', 'Линкбилдинг'];
  const [selectedCategory, setSelectedCategory] = useState('Все статьи');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Все статьи' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-400">Блог</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Экспертные статьи о SEO
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Полезные материалы, руководства и лучшие практики в области поискового продвижения
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по статьям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-900/50 border-y border-gray-800 sticky top-16 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{article.excerpt}</p>
                    
                    <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                      <span>Читать статью</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">Статьи не найдены</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Подпишитесь на рассылку
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Получайте новые статьи о SEO прямо на почту
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors whitespace-nowrap"
            >
              Подписаться
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
