import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Search, Menu, X } from 'lucide-react';

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navLinks = [
    { path: '/services', label: 'Услуги' },
    { path: '/cases', label: 'Кейсы' },
    { path: '/about', label: 'О нас' },
    { path: '/blog', label: 'Блог' },
    { path: '/prices', label: 'Цены' },
    { path: '/contact', label: 'Контакты' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <span className="text-xl font-semibold">SEO Expert</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-blue-400 transition-colors ${
                    isActive(link.path) ? 'text-blue-400' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
              >
                Получить консультацию
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block hover:text-blue-400 transition-colors ${
                    isActive(link.path) ? 'text-blue-400' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Получить консультацию
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-xl font-semibold">SEO Expert</span>
              </Link>
              <p className="text-gray-400">
                Профессиональное SEO-продвижение для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services/technical-audit" className="hover:text-blue-400 transition-colors">Технический аудит</Link></li>
                <li><Link to="/services/promotion" className="hover:text-blue-400 transition-colors">Продвижение</Link></li>
                <li><Link to="/services/content-marketing" className="hover:text-blue-400 transition-colors">Контент-маркетинг</Link></li>
                <li><Link to="/services/analytics" className="hover:text-blue-400 transition-colors">Аналитика</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">О нас</Link></li>
                <li><Link to="/cases" className="hover:text-blue-400 transition-colors">Кейсы</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Блог</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@seoexpert.ru</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 SEO Expert. Все права защищены.</p>
            <Link to="/sitemap" className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block">
              Карта сайта
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}