import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Building2, 
  Leaf, 
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";
import { Button } from "../components/ui/button";

const About = () => {
  const values = [
    {
      icon: <Target className="w-7 h-7" />,
      title: "Mission",
      description: "To democratize energy trading in India by providing an intelligent, transparent, and sustainable B2B marketplace that empowers businesses to make smarter energy decisions.",
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Vision",
      description: "To become India's most trusted energy trading platform, driving the nation's transition to a sustainable energy future through technology and innovation.",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Values",
      description: "Transparency, sustainability, innovation, and trust form the cornerstone of everything we do. We believe in creating value for all stakeholders.",
    },
  ];

  const milestones = [
    { year: "2024", event: "Company Founded", description: "Renergizr Industries established with a vision to transform energy trading" },
    { year: "2025", event: "Platform Development", description: "Partnership with Naraway for AI-powered B2B marketplace development" },
    { year: "2026", event: "MVP Launch", description: "Launch of the intelligent energy trading platform with RFQ/Tendering" },
    { year: "Future", event: "Market Expansion", description: "Scaling across India with advanced features and partnerships" },
  ];

  const team = {
    name: "Himanshu Gupta",
    role: "Founder & Director",
    phone: "+91-9315940284",
  };

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
    <main data-testid="about-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" />
        
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
              <Building2 className="w-4 h-4" />
              About Our Company
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Building India's Energy Future
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-emerald-100/70 leading-relaxed"
            >
              Renergizr Industries Private Limited is pioneering the next generation of B2B energy trading with AI-powered solutions, sustainable practices, and a commitment to transparency.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section data-testid="story-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200 to-lime-200 rounded-3xl blur-2xl opacity-40" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1752859674878-0dfa5637c910?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Our Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight mb-6">
                From Vision to Reality
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Renergizr Industries was founded with a singular purpose: to transform how businesses in India buy and sell energy. We recognized the inefficiencies in traditional energy procurement and set out to create a solution.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our B2B marketplace leverages cutting-edge AI technology to match energy buyers with verified vendors, ensuring optimal pricing, regulatory compliance, and sustainable practices. We're not just building a platform—we're shaping the future of India's energy sector.
              </p>
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-emerald-950">Commitment to Sustainability</div>
                  <div className="text-slate-600 text-sm">Promoting green energy adoption across India</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section data-testid="values-section" className="py-24 md:py-32 bg-slate-50 grid-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight">
              Our Foundation
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                data-testid={`value-card-${index}`}
                className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-50 to-lime-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section data-testid="timeline-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight">
              Milestones & Growth
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-200 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`milestone-${index}`}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50 transition-colors">
                      <div className="text-emerald-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-emerald-950 mb-2">{milestone.event}</div>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shrink-0 z-10">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section data-testid="leadership-section" className="py-24 md:py-32 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-lime-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Meet the Team
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-lime-400 flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
              <p className="text-emerald-200/70 mb-4">{team.role}</p>
              <div className="flex items-center justify-center gap-2 text-lime-400">
                <Zap className="w-5 h-5" />
                <span>{team.phone}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight mb-6">
              Want to Partner With Us?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join the energy revolution. Whether you're a buyer or vendor, discover how Renergizr can transform your energy trading experience.
            </p>
            <Link to="/contact">
              <Button
                data-testid="about-cta"
                size="lg"
                className="rounded-full px-10 py-7 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
