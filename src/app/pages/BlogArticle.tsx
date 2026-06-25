import { useParams, Link, Navigate } from 'react-router';
import { Calendar, Clock, ArrowRight, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const articlesData: Record<string, any> = {
  'complete-guide-to-technical-seo': {
    title: 'Полное руководство по техническому SEO в 2026 году',
    category: 'Технический SEO',
    date: '15 февраля 2026',
    readTime: '12 мин',
    image: 'https://images.unsplash.com/photo-1653038417404-1ae1f38c373e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBrZXl3b3JkcyUyMHJlc2VhcmNofGVufDF8fHx8MTc3MTcxNjIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Алексей Петров',
    content: `
      <p>Технический SEO — это фундамент успешного продвижения сайта. Без правильной технической оптимизации даже самый качественный контент не сможет достичь высоких позиций в поисковых системах.</p>

      <h2>Что такое технический SEO?</h2>
      <p>Технический SEO включает в себя оптимизацию технических аспектов сайта для улучшения его видимости в поисковых системах. Это не контент и не ссылки — это то, как поисковые роботы взаимодействуют с вашим сайтом.</p>

      <h2>Основные элементы технического SEO</h2>
      
      <h3>1. Скорость загрузки</h3>
      <p>Скорость загрузки страниц — один из важнейших факторов ранжирования. Google использует Core Web Vitals для оценки производительности сайта:</p>
      <ul>
        <li>LCP (Largest Contentful Paint) — время загрузки основного контента</li>
        <li>FID (First Input Delay) — время до первого взаимодействия</li>
        <li>CLS (Cumulative Layout Shift) — стабильность визуального отображения</li>
      </ul>

      <h3>2. Мобильная оптимизация</h3>
      <p>С переходом Google на mobile-first индексацию мобильная версия сайта стала приоритетной. Убедитесь, что ваш сайт корректно отображается на всех устройствах.</p>

      <h3>3. Структура URL</h3>
      <p>Чистые и понятные URL помогают как пользователям, так и поисковым системам лучше понимать структуру вашего сайта.</p>

      <h3>4. XML Sitemap</h3>
      <p>XML-карта сайта помогает поисковым роботам эффективно сканировать и индексировать ваши страницы.</p>

      <h3>5. Robots.txt</h3>
      <p>Правильно настроенный файл robots.txt управляет доступом поисковых роботов к различным разделам сайта.</p>

      <h2>Практические рекомендации</h2>
      <p>Регулярно проводите технический аудит сайта, используя такие инструменты как Google Search Console, Screaming Frog, и PageSpeed Insights. Исправляйте выявленные проблемы в порядке их приоритетности.</p>

      <h2>Заключение</h2>
      <p>Технический SEO — это непрерывный процесс. Поисковые системы постоянно обновляют свои алгоритмы, поэтому важно следить за новыми требованиями и своевременно адаптировать свой сайт.</p>
    `
  },
  'how-to-create-semantic-core': {
    title: 'Как правильно собрать семантическое ядро',
    category: 'SEO-стратегия',
    date: '10 февраля 2026',
    readTime: '10 мин',
    image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzcxNjk3NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Мария Сидорова',
    content: `
      <p>Семантическое ядро — это основа любой успешной SEO-стратегии. В этой статье мы разберем пошаговый процесс сбора и кластеризации семантического ядра.</p>

      <h2>Что такое семантическое ядро?</h2>
      <p>Семантическое ядро — это набор ключевых слов и фраз, по которым вы планируете продвигать свой сайт в поисковых системах.</p>

      <h2>Этапы создания семантического ядра</h2>
      
      <h3>1. Анализ бизнеса и целевой аудитории</h3>
      <p>Прежде чем начать сбор ключевых слов, важно понять:</p>
      <ul>
        <li>Кто ваши клиенты</li>
        <li>Какие проблемы они решают</li>
        <li>Как они ищут решения</li>
      </ul>

      <h3>2. Сбор первичных запросов</h3>
      <p>Используйте различные источники для сбора ключевых слов:</p>
      <ul>
        <li>Яндекс.Вордстат</li>
        <li>Google Keyword Planner</li>
        <li>Анализ конкурентов</li>
        <li>Подсказки поисковых систем</li>
      </ul>

      <h3>3. Расширение семантики</h3>
      <p>Расширьте список ключевых слов, используя синонимы, связанные запросы и различные формулировки.</p>

      <h3>4. Чистка и фильтрация</h3>
      <p>Удалите нерелевантные запросы, дубли и слишком низкочастотные ключевые слова без коммерческого потенциала.</p>

      <h3>5. Кластеризация</h3>
      <p>Сгруппируйте похожие запросы по темам и намерениям пользователей. Каждый кластер — это потенциальная страница на сайте.</p>

      <h2>Инструменты для работы</h2>
      <p>Существует множество инструментов для сбора семантического ядра. Выбирайте те, которые подходят под ваши задачи и бюджет.</p>

      <h2>Заключение</h2>
      <p>Качественное семантическое ядро — это инвестиция в успех вашего SEO. Уделите этому этапу достаточно времени и внимания.</p>
    `
  },
  'content-marketing-for-seo': {
    title: 'Контент-маркетинг для SEO: лучшие практики',
    category: 'Контент',
    date: '5 февраля 2026',
    readTime: '8 мин',
    image: 'https://images.unsplash.com/photo-1770368787729-6a42187b668c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3cml0aW5nJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzcxNzE2MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Мария Сидорова',
    content: `
      <p>Контент-маркетинг и SEO идут рука об руку. Качественный контент не только привлекает читателей, но и помогает улучшить позиции в поисковых системах.</p>

      <h2>Почему контент важен для SEO?</h2>
      <p>Поисковые системы стремятся предоставить пользователям наиболее релевантную и полезную информацию. Качественный контент — это то, что они ищут.</p>

      <h2>Принципы создания SEO-контента</h2>
      
      <h3>1. Релевантность</h3>
      <p>Контент должен точно отвечать на запрос пользователя. Изучайте намерения за ключевыми словами.</p>

      <h3>2. Экспертность</h3>
      <p>Показывайте свою компетентность в теме. Google оценивает E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).</p>

      <h3>3. Уникальность</h3>
      <p>Создавайте оригинальный контент, который выделяется на фоне конкурентов.</p>

      <h3>4. Структурированность</h3>
      <p>Используйте заголовки, списки, таблицы для лучшей читаемости и понимания.</p>

      <h2>Типы контента для SEO</h2>
      <ul>
        <li>Информационные статьи</li>
        <li>Руководства и туториалы</li>
        <li>Кейсы и исследования</li>
        <li>Списки и подборки</li>
        <li>FAQ и глоссарии</li>
      </ul>

      <h2>Оптимизация контента</h2>
      <p>Помимо качества, важна и техническая оптимизация: правильное использование ключевых слов, мета-теги, внутренние ссылки.</p>

      <h2>Заключение</h2>
      <p>Инвестируйте в качественный контент — это долгосрочная стратегия, которая приносит результаты.</p>
    `
  }
};

export function BlogArticle() {
  const { slug } = useParams();
  const article = slug ? articlesData[slug] : null;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Все статьи
          </Link>
          
          <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
            <span className="text-blue-400">{article.category}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{article.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime} чтения</span>
            </div>
            <div>
              <span>Автор: <span className="text-white">{article.author}</span></span>
            </div>
          </div>

          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Поделиться</span>
          </button>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageWithFallback 
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-300 prose-ul:mb-6
              prose-li:mb-2
              prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* Author */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Об авторе</h3>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-400">{article.author[0]}</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">{article.author}</h4>
                <p className="text-gray-400">
                  Эксперт по SEO с многолетним опытом. Специализируется на техническом SEO и контент-маркетинге.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Нужна помощь с SEO?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Наша команда экспертов готова помочь вам достичь ваших целей
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
              to="/blog"
              className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Читать другие статьи
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
