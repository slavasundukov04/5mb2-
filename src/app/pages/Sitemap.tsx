import { Link } from 'react-router';
import { Home, FileText, Briefcase, Info, BookOpen, Mail, DollarSign, ChevronRight } from 'lucide-react';

export function Sitemap() {
  const siteStructure = [
    {
      icon: Home,
      title: 'Главная',
      path: '/',
      children: []
    },
    {
      icon: FileText,
      title: 'Услуги',
      path: '/services',
      children: [
        { title: 'Технический SEO аудит', path: '/services/technical-audit' },
        { title: 'Продвижение сайта', path: '/services/promotion' },
        { title: 'Контент-маркетинг', path: '/services/content-marketing' },
        { title: 'Аналитика и отчеты', path: '/services/analytics' },
        { title: 'Локальное SEO', path: '/services/local-seo' },
        { title: 'SEO-консультации', path: '/services/consulting' }
      ]
    },
    {
      icon: Briefcase,
      title: 'Кейсы',
      path: '/cases',
      children: [
        { title: 'Интернет-магазин электроники', path: '/cases/1' },
        { title: 'Корпоративный сайт', path: '/cases/2' },
        { title: 'Блог о технологиях', path: '/cases/3' },
        { title: 'Сеть медицинских клиник', path: '/cases/4' },
        { title: 'Онлайн-школа программирования', path: '/cases/5' },
        { title: 'Производство мебели', path: '/cases/6' }
      ]
    },
    {
      icon: Info,
      title: 'О компании',
      path: '/about',
      children: []
    },
    {
      icon: BookOpen,
      title: 'Блог',
      path: '/blog',
      children: [
        { title: 'Полное руководство по техническому SEO', path: '/blog/complete-guide-to-technical-seo' },
        { title: 'Как правильно собрать семантическое ядро', path: '/blog/how-to-create-semantic-core' },
        { title: 'Контент-маркетинг для SEO', path: '/blog/content-marketing-for-seo' }
      ]
    },
    {
      icon: DollarSign,
      title: 'Цены',
      path: '/prices',
      children: []
    },
    {
      icon: Mail,
      title: 'Контакты',
      path: '/contact',
      children: []
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Карта сайта
            </h1>
            <p className="text-xl text-gray-400">
              Полная структура всех страниц сайта
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Tree */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <Link 
                  to={section.path}
                  className="flex items-center gap-4 mb-6 group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <section.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h2>
                </Link>

                {section.children.length > 0 && (
                  <ul className="space-y-3 ml-16">
                    {section.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link 
                          to={child.path}
                          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400" />
                          <span>{child.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
