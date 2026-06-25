import { Link } from 'react-router';
import { 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  Heart,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Результативность',
      description: 'Мы ориентированы на достижение конкретных бизнес-результатов, а не просто выполнение задач'
    },
    {
      icon: Heart,
      title: 'Честность',
      description: 'Прозрачность во всем — от ценообразования до отчетности о проделанной работе'
    },
    {
      icon: Award,
      title: 'Профессионализм',
      description: 'Постоянное обучение и следование лучшим практикам в области SEO'
    },
    {
      icon: Users,
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому проекту и постоянная поддержка'
    }
  ];

  const team = [
    {
      name: 'Алексей Петров',
      role: 'SEO-директор',
      experience: '12 лет в SEO',
      image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzE3MTExODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Мария Сидорова',
      role: 'Руководитель отдела контента',
      experience: '8 лет в контент-маркетинге',
      image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzE2NzQ1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Технический специалист',
      experience: '10 лет в веб-разработке',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcxNjkzMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const achievements = [
    { number: '150+', label: 'Успешных проектов' },
    { number: '8+', label: 'Лет опыта' },
    { number: '98%', label: 'Довольных клиентов' },
    { number: '15+', label: 'Специалистов в команде' }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-blue-600/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-400">О компании</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Мы помогаем бизнесу расти через SEO
            </h1>
            <p className="text-xl text-gray-400">
              SEO Expert — это команда профессионалов с многолетним опытом в области поискового продвижения
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-900/30 to-blue-700/30 border-y border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">{item.number}</div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  SEO Expert была основана в 2018 году группой энтузиастов, которые верили в силу качественного SEO-продвижения. За это время мы выросли от небольшой команды из 3 человек до полноценного агентства с 15+ специалистами.
                </p>
                <p>
                  Мы работали с самыми разными проектами — от небольших локальных бизнесов до крупных e-commerce платформ. Каждый проект научил нас чему-то новому и помог стать теми, кто мы есть сегодня.
                </p>
                <p>
                  Наша миссия — делать качественное SEO доступным для бизнеса любого масштаба. Мы не просто продвигаем сайты, мы помогаем компаниям достигать их бизнес-целей через органический поиск.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzE2NzQ1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Познакомьтесь с экспертами, которые работают над вашим успехом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all group">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MTcxNTg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Why Choose Us"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Почему выбирают нас
              </h2>
              <div className="space-y-4">
                {[
                  'Используем только белые методы продвижения',
                  'Прозрачная отчетность на каждом этапе',
                  'Индивидуальный подход к каждому проекту',
                  'Гарантия результата по договору',
                  'Постоянная поддержка и консультации',
                  'Опыт работы в различных нишах',
                  'Современные инструменты аналитики',
                  'Фокус на ROI и бизнес-результаты'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Свяжитесь с нами для бесплатной консультации и узнайте, как мы можем помочь вашему бизнесу
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
              to="/cases"
              className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Посмотреть кейсы
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
