// Academia Gym - Single Page App
// Layout moderno escuro com laranja
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Dumbbell,
  Star,
  Flame,
  DollarSign,
  MapPin,
  Users,
  Phone,
  MessageCircle,
  Send,
  Map,
  Car,
  Menu,
  X
} from 'lucide-react';

function App() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);
  useEffect(() => {
    // Smooth scroll polyfill if needed
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

const whatsappUrl = 'https://wa.me/556185230335?text=Olá! Quero começar na Slim Corpus!';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      {/* WhatsApp Floating Button */}
        <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 w-16 h-16 flex items-center justify-center md:w-20 md:h-20"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.5} />
      </a>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-16 left-0 w-full h-full bg-black/95 backdrop-blur-xl z-30 pt-4 pb-20"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(31,41,55,0.98) 100%)' }}
        >
          <div className="container mx-auto px-6 max-w-md space-y-1">
            {['Início', 'Servicos', 'Planos', 'Localização', 'Contato'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-4 px-6 text-xl font-bold text-gray-200 hover:text-orange-400 bg-gradient-to-r hover:from-orange-500/10 hover:to-transparent rounded-xl transition-all duration-300 border-r-4 border-transparent hover:border-orange-400 hover:shadow-lg"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-40 py-4">
<div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Slim Corpus
          </h1>
          
          {/* Hamburger Button */}
          <button 
            className="md:hidden p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="block h-8 w-8" aria-hidden="true" />
            ) : (
              <Menu className="block h-8 w-8" aria-hidden="true" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['Início', 'Servicos', 'Planos', 'Localização', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-orange-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="Início" className="scroll-mt-20 min-h-screen bg-black flex items-center justify-center relative overflow-hidden pt-20" style={{backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight"
          >
            TREINE NA SLIM CORPUS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto"
          >
            Academia de alto nível em Valparaíso de Goiás
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-xl font-bold px-12 py-6 rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 uppercase tracking-wide"
          >
            Começar Agora no WhatsApp
          </motion.a>
        </div>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Placeholder hero image */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10"></div>
      </section>

      {/* Shortcuts Section */}
      <section id="Servicos" className="scroll-mt-20 py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
          >
            Serviços Rápidos
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Clock className="w-12 h-12 flex-shrink-0 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />, label: 'Horários', id: 'horarios' },
              { icon: <Dumbbell className="w-12 h-12 flex-shrink-0 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />, label: 'Musculação', id: 'musculacao' },
              { icon: <Star className="w-12 h-12 flex-shrink-0 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />, label: 'Destaques', id: 'destaques' },
              { icon: <Flame className="w-12 h-12 flex-shrink-0 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />, label: 'Funcional', id: 'funcional' },
              { icon: <DollarSign className="w-12 h-12 flex-shrink-0 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />, label: 'Valores', id: 'valores' },
              { icon: <MapPin className="w-12 h-12 flex-shrink-0 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />, label: 'Localização', id: 'localizacao' }
            ].map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(service.id)}
                className="group relative w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-700 hover:from-orange-500 hover:to-orange-600 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 cursor-pointer hover:rotate-3 hover:scale-105 border-2 border-transparent hover:border-orange-500/50"
              >
{service.icon}
                <span className="font-bold text-sm md:text-base">{service.label}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="scroll-mt-20 py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Sobre a Slim Corpus</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Bem-vindo à Slim Corpus, onde transformamos corpos e mentes. Equipamentos de ponta, profissionais certificados e ambiente climatizado para você alcançar seus objetivos.
              </p>
              <ul className="space-y-3 text-lg">
                {[
                  'Equipamentos modernos e importados',
                  'Treinadores experientes e certificados',
                  'Ambiente climatizado e seguro',
                  'Horários flexíveis 24h aos finais de semana'
                ].map((diferencial, i) => (
                  <motion.li key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center">
                    <Users className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
                    {diferencial}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl shadow-2xl shadow-orange-500/20 overflow-hidden"
            >
              <img src="/gym.jpg" alt="academia" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section id="musculacao" className="scroll-mt-20 py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
          >
            Modalidades
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Dumbbell className="w-16 h-16 flex-shrink-0 text-gray-300 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-500" />,
                title: 'Musculação',
                desc: 'Treinos personalizados com equipamentos profissionais para ganho de massa e definição muscular.'
              },
              {
                icon: <Flame className="w-16 h-16 flex-shrink-0 text-gray-300 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-500" />,
                title: 'Funcional',
                desc: 'Treino funcional completo para resistência, agilidade e condicionamento físico total.'
              },
              {
                icon: <Users className="w-16 h-16 flex-shrink-0 text-gray-300 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-500" />,
                title: 'Cardio',
                desc: 'Aulas dinâmicas de cardio, HIIT e corrida para queima de gordura acelerada.'
              }
            ].map((modalidade, index) => (
              <motion.div
                key={modalidade.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 group hover:-translate-y-4 border border-gray-700 hover:border-orange-500/50"
              >
{modalidade.icon}
                <div className="mb-6 h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">{modalidade.title}</h3>
                <p className="text-gray-300 leading-relaxed">{modalidade.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="Planos" className="scroll-mt-20 py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
          >
                Planos a partir de R$75,90
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Básico',
                price: 'R$ 75,90',
                features: ['Acesso Musculação', 'Horário comercial'],
                popular: false
              },
              {
                name: 'Premium',
                price: 'R$ 149,90',
                features: ['Acesso 24h', 'Musculação + Funcional', 'Avaliação física'],
                popular: true
              },
              {
                name: 'VIP',
                price: 'R$ 199,90',
                features: ['Acesso ilimitado', 'Personal trainer incluso', 'Alimentação personalizada'],
                popular: false
              }
            ].map((plano, index) => (
              <motion.div
                key={plano.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-10 rounded-3xl shadow-2xl transition-all duration-500 border-4 ${
                  plano.popular 
                    ? 'bg-gradient-to-b from-orange-500 to-orange-600 border-orange-400 shadow-orange-500/50 scale-105' 
                    : 'bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500 hover:shadow-orange-500/30 hover:scale-105'
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-6 py-2 rounded-full text-sm font-bold border-2 border-orange-400">
                    MAIS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-6">{plano.name}</h3>
                <div className="text-4xl md:text-5xl font-black mb-8 text-white">
                  {plano.price}
                  <span className="text-xl font-normal text-gray-300">/mês</span>
                </div>
                <ul className="space-y-3 mb-10">
                  {plano.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Users className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 px-8 rounded-xl font-bold text-center transition-all duration-300 ${
                    plano.popular 
                      ? 'bg-white text-orange-600 hover:bg-gray-100' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500'
                  }`}
                >
                  Escolher Plano
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="scroll-mt-20 py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
          >
            O que dizem nossos alunos
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  photo: <Users className="w-12 h-12 text-white" />,
                  name: 'João Silva',
                  text: 'Melhor academia da região! Resultados incríveis em 3 meses.'
                },
                {
                  photo: <Users className="w-12 h-12 text-white" />,
                  name: 'Maria Santos',
                  text: 'Ambiente incrível e professores top! Super recomendo.'
                },
                {
                  photo: <Users className="w-12 h-12 text-white" />,
                  name: 'Pedro Costa',
                  text: 'Perdi 15kg em 4 meses. Vale cada centavo!'
                }
              ].map((depoimento, index) => (
              <motion.div
                key={depoimento.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-orange-500/50 transition-all duration-500 hover:bg-gray-800/70 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">
                    {depoimento.photo}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{depoimento.name}</h4>
                    <div className="flex text-orange-400 text-xl">
                      <Star className="w-6 h-6 fill-current" />
                      <Star className="w-6 h-6 fill-current" />
                      <Star className="w-6 h-6 fill-current" />
                      <Star className="w-6 h-6 fill-current" />
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-lg italic text-gray-300 leading-relaxed">"{depoimento.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="Localização" className="scroll-mt-20 py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
          >
            Encontre-nos
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-orange-400 mr-3 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-white">Endereço</h3>
                </div>
                <p className="text-lg mb-6">Valparaíso de Goiás - GO<br />(veja no mapa)</p>
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 text-orange-400 mr-3 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-white">Contato</h3>
                </div>
                <a href="https://instagram.com/slimcorpus.oficial" target="_blank" className="block mb-2 hover:text-orange-400 transition-colors text-lg flex items-center">
                  <Send className="w-6 h-6 mr-2 inline flex-shrink-0" />
                  Instagram @slimcorpus.oficial
                </a>
                <p className="text-lg">
                  <a href={whatsappUrl} className="hover:text-orange-400 transition-colors">WhatsApp: (61) 98523-0335</a><br />
                  <a href="tel:+5561985230335" className="hover:text-orange-400 transition-colors block mt-2">Ligar agora</a>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl hover:bg-orange-500/20 transition-all duration-300">
                  <Clock className="w-10 h-10 mx-auto mb-2 text-gray-300 hover:text-white transition-colors" />
                  <h4 className="font-bold">Horários</h4>
                  <p>Seg-Sáb: 6h-22h</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl hover:bg-orange-500/20 transition-all duration-300">
                  <Car className="w-10 h-10 mx-auto mb-2 text-gray-300 hover:text-white transition-colors" />
                  <h4 className="font-bold">Estacionamento</h4>
                  <p>Grátis para alunos</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="h-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 bg-gradient-to-br from-gray-700 to-black"
            >
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.4790702288797!2d-47.98009968509915!3d-16.054744588469745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a4d4a5b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sSlim%20Corpus!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Slim Corpus"
                ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Slim Corpus
          </h3>
          <p className="text-gray-400 mb-8">Transforme seu corpo, supere seus limites.</p>
          <div className="flex justify-center space-x-8 mb-8">
            <a href={whatsappUrl} className="group">
              <span className="flex items-center justify-center gap-2 text-2xl group-hover:text-orange-400 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </span>
            </a>
            <a href="tel:+5561985230335" className="group hover:text-orange-400 transition-colors">
              <Phone className="w-6 h-6 inline mr-2" /> Ligue
            </a>
            <a href="#Início" onClick={() => scrollToSection('inicio')} className="group hover:text-orange-400 transition-colors">
              ↑ Voltar ao topo
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2026 João Amorim. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

