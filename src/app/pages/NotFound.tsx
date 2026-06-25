import { Link } from 'react-router';
import { Home, Search, ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-500/20 mb-4">404</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Страница не найдена
          </h1>
          <p className="text-xl text-gray-400">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            На главную
          </Link>
          <Link 
            to="/services"
            className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg transition-colors"
          >
            <Search className="w-5 h-5" />
            Наши услуги
          </Link>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">Возможно, вас заинтересует:</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <Link 
              to="/services"
              className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors group"
            >
              <div>
                <div className="font-semibold group-hover:text-blue-400 transition-colors">Услуги</div>
                <div className="text-sm text-gray-400">SEO-продвижение</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </Link>
            <Link 
              to="/cases"
              className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors group"
            >
              <div>
                <div className="font-semibold group-hover:text-blue-400 transition-colors">Кейсы</div>
                <div className="text-sm text-gray-400">Наши проекты</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </Link>
            <Link 
              to="/blog"
              className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors group"
            >
              <div>
                <div className="font-semibold group-hover:text-blue-400 transition-colors">Блог</div>
                <div className="text-sm text-gray-400">Статьи о SEO</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </Link>
            <Link 
              to="/contact"
              className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors group"
            >
              <div>
                <div className="font-semibold group-hover:text-blue-400 transition-colors">Контакты</div>
                <div className="text-sm text-gray-400">Связаться с нами</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
