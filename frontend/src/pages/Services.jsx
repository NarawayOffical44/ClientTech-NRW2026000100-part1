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
  BadgeCheck,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";
import { Button } from "../components/ui/button";

const Services = () => {
  const mainServices = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Clean Energy Genset System",
      description: "Zero-emission electricity generation using green hydrogen fuel cells and wastewater-based electrolysis technology.",
      features: [
        "99.8% pure hydrogen production",
        "High-efficiency fuel cell stacks",
        "Modular 5 kW to 1 MW+ capacity",
        "AI-enabled remote monitoring"
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Geothermal Power Systems",
      description: "Patented indigenous geothermal electricity generation for continuous renewable baseload power with 100+ year lifespan.",
      features: [
        "Patented geothermal process",
        "Continuous baseload generation",
        "Waste heat utilization",
        "Ultra-reliable power delivery"
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cost Optimization",
      description: "80% reduction in operational costs compared to diesel generators with minimal maintenance requirements.",
      features: [
        "Lower fuel dependency",
        "Reduced operational expenses",
        "Minimal maintenance needs",
        "Predictive monitoring system"
      ],
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Environmental Impact",
      description: "Zero carbon emissions with measurable environmental benefits and ESG goal achievement.",
      features: [
        "600 MT CO2 offset per MW annually",
        "Improved air quality",
        "ESG compliance",
        "Sustainability certifications"
      ],
    },
  ];

  const modules = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "System Components",
      description: "Integrated waste processing, hydrogen production, and fuel cell technology in containerized modular units.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Continuous Operation",
      description: "Low-noise operation below 45 decibels with 24/7 monitoring and predictive maintenance capabilities.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Real-time energy generation tracking, efficiency metrics, and ROI monitoring dashboards.",
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Deployment Support",
      description: "End-to-end installation, commissioning, training, and long-term technical support for all systems.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "Assess energy needs and determine system requirements" },
    { step: "02", title: "Design", desc: "Custom configuration based on capacity and application" },
    { step: "03", title: "Deployment", desc: "Installation and site commissioning" },
    { step: "04", title: "Operations", desc: "Ongoing monitoring and maintenance support" },
  ];

  return (
    <main data-testid="services-page" className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <Zap className="w-3.5 h-3.5" />
              Products & Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Clean Energy Solutions
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed">
              Scalable systems generating zero-emission electricity from geothermal energy and green hydrogen for industrial, commercial, and strategic applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section data-testid="main-services-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              Core Offerings
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Our Products
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                data-testid={`service-card-${index}`}
                className="bg-white border border-slate-200 rounded-sm p-8 card-lift border-accent-top"
              >
                <div className="w-16 h-16 rounded bg-slate-100 flex items-center justify-center text-emerald-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section data-testid="modules-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              System Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Key Capabilities
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Each Renergizr system is designed with integrated features ensuring reliable operation, monitoring, and maintenance support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                data-testid={`module-card-${index}`}
                className="bg-white p-6 rounded-sm shadow-sm card-lift text-center"
              >
                <div className="w-14 h-14 rounded bg-emerald-500 flex items-center justify-center text-white mx-auto mb-5">
                  {module.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section data-testid="tech-section" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-3 block">
                Technology Stack
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                Built for the Future
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our platform leverages cutting-edge technologies to deliver unparalleled performance, security, and scalability.
              </p>
              
              <div className="space-y-5">
                {[
                  { icon: <Brain className="w-5 h-5" />, title: "AI & Machine Learning", desc: "Smart algorithms for bid optimization" },
                  { icon: <Globe className="w-5 h-5" />, title: "5G/6G Architecture", desc: "Ultra-low latency communication" },
                  { icon: <BadgeCheck className="w-5 h-5" />, title: "Regulatory Compliance", desc: "Built-in compliance frameworks" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                      <div className="text-slate-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1639422026989-c17351e8c71e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Renewable Energy Technology"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section data-testid="process-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Simple 4-Step Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div
                key={index}
                data-testid={`process-step-${index}`}
                className="relative text-center"
              >
                <div className="text-6xl font-bold text-slate-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Contact us today to learn more about how our services can transform your energy business.
          </p>
          <Link to="/contact">
            <Button
              data-testid="services-cta"
              className="rounded-sm px-10 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
            >
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
