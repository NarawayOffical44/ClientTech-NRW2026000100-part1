import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users,
  CheckCircle,
  ChevronRight
} from "lucide-react";
import { Button } from "../components/ui/button";

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Trading",
      description: "Advanced algorithms optimize your energy bids with intelligent ranking and gap analysis.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Real-Time Grid",
      description: "5G/6G enabled architecture for instantaneous grid balancing and energy distribution.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Vendors",
      description: "Comprehensive verification system ensuring regulatory compliance and certifications.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Analytics",
      description: "Detailed insights and platform analytics to drive informed energy decisions.",
    },
  ];

  const stats = [
    { value: "500+", label: "Energy Partners" },
    { value: "99.9%", label: "Uptime" },
    { value: "₹50Cr+", label: "Transactions" },
    { value: "24/7", label: "Support" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/9229394/pexels-photo-9229394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-400/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text Content */}
            <div>
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-lime-400 text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  B2B Energy Trading Platform
                </span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
              >
                Powering
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
                  Tomorrow's Energy
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-emerald-100/70 leading-relaxed mb-10 max-w-lg"
              >
                India's premier B2B marketplace for energy trading. Connect with verified vendors, leverage AI-driven insights, and trade smarter.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button
                    data-testid="hero-cta-primary"
                    size="lg"
                    className="rounded-full px-8 py-6 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300 btn-shine"
                  >
                    Explore Platform
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    data-testid="hero-cta-secondary"
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Stats Card */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:block"
            >
              <div className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-emerald-200/60 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section data-testid="features-section" className="py-24 md:py-32 bg-slate-50 grid-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight">
              Intelligent Energy Solutions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                data-testid={`feature-card-${index}`}
                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-8 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-lime-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-950 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section data-testid="about-preview-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                About Renergizr
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight mb-6">
                Revolutionizing Energy Trade in India
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Renergizr Industries Private Limited is at the forefront of India's energy transformation. Our B2B marketplace connects energy producers with buyers through intelligent, AI-powered solutions that ensure transparency, efficiency, and sustainability.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "RFQ/Tendering workflow for streamlined procurement",
                  "AI-driven bid ranking for optimal deals",
                  "Green energy certification verification",
                  "Real-time grid balancing with 5G/6G tech"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button
                  data-testid="learn-more-btn"
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 border-emerald-950 text-emerald-950 hover:bg-emerald-950 hover:text-white font-semibold transition-all duration-300 group"
                >
                  Learn More About Us
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200 to-lime-200 rounded-3xl blur-2xl opacity-40" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1766802981801-4b4a9a1d8f1c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Energy Trading Platform"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-emerald-950">Contact Person</div>
                        <div className="text-slate-600">Himanshu Gupta</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="py-24 md:py-32 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[150px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Transform Your Energy Trading?
            </h2>
            <p className="text-xl text-emerald-100/70 mb-10 max-w-2xl mx-auto">
              Join India's leading B2B energy marketplace and experience the future of intelligent energy procurement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  data-testid="cta-primary"
                  size="lg"
                  className="rounded-full px-10 py-7 bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Start Trading Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  data-testid="cta-secondary"
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 py-7 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
