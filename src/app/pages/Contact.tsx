import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '', service: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      description: 'Звоните в рабочее время'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@seoexpert.ru',
      description: 'Ответим в течение 24 часов'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Москва, ул. Примерная, д. 1',
      description: 'Офис работает пн-пт 9:00-18:00'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      value: 'Пн-Пт: 9:00 - 18:00',
      description: 'Выходные: Сб-Вс'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-400">Контакты</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-gray-400">
              Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами удобным способом
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-lg text-white mb-1">{info.value}</p>
                <p className="text-sm text-gray-400">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Отправьте заявку</h2>
              <p className="text-gray-400 mb-8">
                Заполните форму ниже, и мы свяжемся с вами для бесплатной консультации
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Ваше имя <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2">
                      Телефон <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="ООО 'Компания'"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm mb-2">
                    Интересующая услуга
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="technical-audit">Технический SEO аудит</option>
                    <option value="promotion">Продвижение сайта</option>
                    <option value="content-marketing">Контент-маркетинг</option>
                    <option value="analytics">Аналитика и отчеты</option>
                    <option value="local-seo">Локальное SEO</option>
                    <option value="consulting">SEO-консультации</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Сообщение <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте..."
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </button>

                <p className="text-sm text-gray-400">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Быстрые контакты</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Телефон</h4>
                    <a href="tel:+79991234567" className="text-blue-400 hover:text-blue-300 text-lg">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <a href="mailto:info@seoexpert.ru" className="text-blue-400 hover:text-blue-300 text-lg">
                      info@seoexpert.ru
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Адрес офиса</h4>
                    <p className="text-gray-300">
                      Москва, ул. Примерная, д. 1<br />
                      Бизнес-центр 'Пример', офис 123
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Часы работы</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Понедельник - Пятница</span>
                    <span className="text-white">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Суббота</span>
                    <span className="text-white">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Воскресенье</span>
                    <span className="text-white">Выходной</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/30 border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Бесплатная консультация</h3>
                <p className="text-gray-300 mb-6">
                  Получите экспертную консультацию по SEO-продвижению вашего сайта совершенно бесплатно
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Анализ текущего состояния сайта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Рекомендации по улучшению</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Оценка сроков и стоимости</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-xl text-gray-400">Карта офиса</p>
              <p className="text-gray-500">Москва, ул. Примерная, д. 1</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
