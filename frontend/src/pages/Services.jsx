import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  FileText,
  BarChart3,
  CheckCircle,
  Settings,
  Cpu,
  Network,
  BadgeCheck
} from "lucide-react";
import { Button } from "../components/ui/button";

const Services = () => {
  const mainServices = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "RFQ & Tendering",
      description: "Streamlined Request for Quote and tendering workflow that connects energy buyers with qualified vendors efficiently.",
      features: [
        "Post energy requirements easily",
        "Receive competitive bids",
        "Compare offers transparently",
        "Award contracts seamlessly"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI-Driven Bid Ranking",
      description: "Our intelligent algorithm analyzes and ranks vendor bids based on multiple parameters to find you the best deals.",
      features: [
        "Smart bid analysis",
        "Price optimization",
        "Quality scoring",
        "Gap analysis engine"
      ],
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Vendor Verification",
      description: "Comprehensive verification system ensuring all vendors meet regulatory requirements and certifications.",
      features: [
        "Regulatory document check",
        "Green energy certifications",
        "Carbon credit verification",
        "Compliance monitoring"
      ],
      color: "from-cyan-500 to-emerald-600"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Real-Time Grid Balancing",
      description: "5G/6G enabled low-latency architecture for instantaneous grid balancing and energy distribution.",
      features: [
        "Ultra-low latency",
        "Real-time monitoring",
        "Dynamic load balancing",
        "Grid optimization"
      ],
      color: "from-lime-500 to-emerald-600"
    },
  ];

  const modules = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Client Module",
      description: "Complete requirement gathering with filters for energy specifications, logistics, and financial parameters.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Vendor Module",
      description: "Profile management, marketplace feed access, and comprehensive bid management capabilities.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Admin Dashboard",
      description: "User management, platform analytics, vendor governance, and system monitoring tools.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "SEO Integration",
      description: "Search engine optimization for enhanced visibility and organic reach across digital channels.",
    },
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
    <main data-testid="services-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-lime-400 text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Our Services
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Comprehensive Energy Solutions
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-emerald-100/70 leading-relaxed"
            >
              From AI-powered trading to real-time grid management, our platform offers end-to-end solutions for modern energy businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section data-testid="main-services-section" className="py-24 md:py-32 bg-slate-50 grid-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Core Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight">
              Platform Services
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                data-testid={`service-card-${index}`}
                className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-emerald-50 to-lime-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Modules */}
      <section data-testid="modules-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Platform Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight mb-6">
              Integrated Modules
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform is built with specialized modules catering to every stakeholder in the energy trading ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                data-testid={`module-card-${index}`}
                className="group text-center p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-950 mb-3">
                  {module.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section data-testid="tech-section" className="py-24 md:py-32 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                Technology Stack
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Built for the Future
              </h2>
              <p className="text-xl text-emerald-100/70 leading-relaxed mb-8">
                Our platform leverages cutting-edge technologies to deliver unparalleled performance, security, and scalability.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Brain className="w-6 h-6" />, title: "AI & Machine Learning", desc: "Smart algorithms for bid optimization" },
                  { icon: <Globe className="w-6 h-6" />, title: "5G/6G Architecture", desc: "Ultra-low latency communication" },
                  { icon: <BadgeCheck className="w-6 h-6" />, title: "Regulatory Compliance", desc: "Built-in compliance frameworks" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-lime-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-emerald-200/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1719723756213-22de6e52ccd1?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Energy Grid Technology"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-8 h-8 text-lime-400" />
                  <span className="text-white font-semibold">Smart Grid Ready</span>
                </div>
                <p className="text-emerald-200/70 text-sm">Prepared for next-generation grid infrastructure</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section data-testid="process-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight">
              Simple 4-Step Process
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { step: "01", title: "Register", desc: "Create your account as buyer or vendor" },
              { step: "02", title: "Post/Browse", desc: "List requirements or explore opportunities" },
              { step: "03", title: "AI Match", desc: "Get intelligent recommendations" },
              { step: "04", title: "Trade", desc: "Complete transactions securely" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                data-testid={`process-step-${index}`}
                className="relative text-center"
              >
                <div className="text-7xl font-bold text-emerald-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-emerald-950 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-0 translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-emerald-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Contact us today to learn more about how our services can transform your energy business.
            </p>
            <Link to="/contact">
              <Button
                data-testid="services-cta"
                size="lg"
                className="rounded-full px-10 py-7 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
