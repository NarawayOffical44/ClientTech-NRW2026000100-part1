import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users,
  Building2,
  BarChart3,
  CheckCircle,
  Play,
  ArrowUpRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import NewsTicker from "../components/NewsTicker";

const Home = () => {
  const stats = [
    { value: "500+", label: "Energy Partners", icon: <Users className="w-5 h-5" /> },
    { value: "99.9%", label: "Platform Uptime", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "₹50Cr+", label: "Trade Volume", icon: <BarChart3 className="w-5 h-5" /> },
    { value: "28", label: "States Covered", icon: <Globe className="w-5 h-5" /> },
  ];

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "B2B Energy Trading",
      description: "Comprehensive marketplace connecting energy buyers with verified vendors across India.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Intelligent bid ranking and gap analysis for optimal energy procurement decisions.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vendor Verification",
      description: "Rigorous compliance checks including regulatory documents and green certifications.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Real-Time Grid",
      description: "5G/6G enabled infrastructure for instantaneous grid balancing operations.",
    },
  ];

  return (
    <main data-testid="home-page">
      {/* News Ticker */}
      <div className="pt-16 lg:pt-20">
        <NewsTicker />
      </div>

      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768839722571-c45c96186dee?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
                <Zap className="w-3.5 h-3.5" />
                India's B2B Energy Exchange
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Empowering
                <span className="block text-emerald-400">Energy Markets</span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                India's premier B2B marketplace for energy trading. Connect with verified vendors, leverage AI-driven insights, and trade with transparency and efficiency.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button
                    data-testid="hero-cta-primary"
                    className="rounded-sm px-8 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
                  >
                    Explore Platform
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    data-testid="hero-cta-secondary"
                    variant="outline"
                    className="rounded-sm px-8 py-6 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800 font-semibold uppercase tracking-wide text-sm"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-sm p-8">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-6">Platform Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded bg-white/5">
                      <div className="flex justify-center mb-2 text-emerald-400">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white stat-number">{stat.value}</div>
                      <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Mobile */}
      <section className="lg:hidden bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white stat-number">{stat.value}</div>
                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section data-testid="services-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Comprehensive Energy Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-testid={`service-card-${index}`}
                className="bg-white border border-slate-200 rounded-sm p-6 card-lift border-accent-top"
              >
                <div className="w-14 h-14 rounded bg-slate-100 flex items-center justify-center text-emerald-600 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                data-testid="view-all-services"
                variant="outline"
                className="rounded-sm px-8 py-5 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold uppercase tracking-wide text-sm"
              >
                View All Services
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section data-testid="about-preview" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                About Renergizr
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Transforming Energy Trade in India
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Renergizr Industries Private Limited is at the forefront of India's energy transformation. Our B2B marketplace leverages cutting-edge AI technology to match energy buyers with verified vendors.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "AI-driven bid ranking and gap analysis",
                  "Comprehensive vendor verification system",
                  "Real-time grid balancing with 5G/6G",
                  "Green energy certification support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button
                  data-testid="learn-more-about"
                  className="rounded-sm px-8 py-5 bg-slate-900 hover:bg-slate-800 text-white font-semibold uppercase tracking-wide text-sm"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1686475577092-285cd688e55a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Renewable Energy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-sm p-5 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-emerald-500 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">16+</div>
                    <div className="text-slate-500 text-xs">Years of Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section data-testid="chairman-message" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="relative">
                <div className="rounded-sm overflow-hidden bg-slate-200">
                  <div className="w-full h-[350px] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-4 right-4 bg-slate-900 text-white p-4 rounded-sm">
                  <div className="font-bold">Himanshu Gupta</div>
                  <div className="text-emerald-400 text-sm">Founder & Director</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                From the Founder
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Leadership Message
              </h2>
              <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-slate-600 text-lg leading-relaxed mb-6">
                "At Renergizr, we are committed to transforming India's energy landscape. Our B2B marketplace leverages AI and advanced technology to bring transparency, efficiency, and sustainability to energy trading. We believe in empowering businesses to make smarter energy decisions for a greener future."
              </blockquote>
              <p className="text-slate-500 text-sm">
                Himanshu Gupta has been instrumental in building Renergizr's vision of democratizing energy trading in India through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="py-20 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
            Ready to Transform Your Energy Trading?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Join India's leading B2B energy marketplace and experience efficient, transparent, and sustainable energy procurement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                data-testid="cta-primary"
                className="rounded-sm px-10 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                data-testid="cta-secondary"
                variant="outline"
                className="rounded-sm px-10 py-6 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800 font-semibold uppercase tracking-wide text-sm"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
