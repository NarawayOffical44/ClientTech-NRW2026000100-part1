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
      icon: <FileText className="w-8 h-8" />,
      title: "Clean Energy Gensets",
      description: "Modular clean genset systems that replace diesel backup power with zero-emission electricity for critical facilities.",
      features: [
        "5kW to 1MW modular capacity",
        "Stable 415V/50Hz clean output",
        "Ultra-low noise below 45 dB",
        "Zero carbon emissions"
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Wastewater-to-Hydrogen",
      description: "Integrated electrolyzer and fuel cell systems use industrial wastewater to generate high-purity green hydrogen.",
      features: [
        "Industrial wastewater input",
        "99.8% pure hydrogen output",
        "PEM and alkaline electrolyzer stack",
        "Reduced freshwater demand"
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Geothermal Clean Power",
      description: "Indigenous patented process technology for round-the-clock clean electricity using geothermal renewable energy.",
      features: [
        "Patent No. 202011006850 / 548040",
        "All-weather baseload operation",
        "Low operational cost",
        "High capacity factor"
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Remote Monitoring",
      description: "Connected system monitoring, predictive maintenance, and performance analytics for deployed clean power assets.",
      features: [
        "Predictive maintenance",
        "Load forecasting",
        "Performance benchmarking",
        "ESG and carbon reporting"
      ],
    },
  ];

  const modules = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industrial Sites",
      description: "Manufacturing, chemical, mining, and oil and gas facilities needing cleaner backup and off-grid power.",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Commercial Facilities",
      description: "Hospitals, hotels, data centres, telecom facilities, banking operations, and IT campuses.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Defense & Remote Bases",
      description: "Silent, reliable, off-grid power for military bases, border installations, and remote operations.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Marine & Ports",
      description: "Shore-to-ship clean power, port offices, cold-chain logistics hubs, and harbor infrastructure.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Assess", desc: "Map diesel load, site profile, and clean power requirement" },
    { step: "02", title: "Pilot", desc: "Deploy prototype or pilot system for validation" },
    { step: "03", title: "Scale", desc: "Expand from kW pilots to MW-scale clean genset systems" },
    { step: "04", title: "Operate", desc: "Monitor performance, maintenance, and carbon impact" },
  ];

  return (
    <main data-testid="services-page" className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <Zap className="w-3.5 h-3.5" />
              Technology & Solutions
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Clean Energy Genset Solutions
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              From wastewater-to-hydrogen gensets to geothermal clean power, Renergizr offers patented systems for replacing diesel backup and off-grid power.
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
              Core Clean Power Offerings
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
              Application Segments
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Where We Deploy
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our systems are designed for customers with critical power needs, high diesel use, ESG mandates, and off-grid reliability requirements.
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
                Our systems combine indigenous process technology, hydrogen generation, fuel cells, geothermal energy, and AI-based controls for reliable clean power.
              </p>
              
              <div className="space-y-5">
                {[
                  { icon: <Brain className="w-5 h-5" />, title: "AI & Monitoring", desc: "Predictive maintenance and fleet analytics" },
                  { icon: <Globe className="w-5 h-5" />, title: "Hydrogen Systems", desc: "Wastewater-based green hydrogen generation" },
                  { icon: <BadgeCheck className="w-5 h-5" />, title: "Patented Process", desc: "Indigenous technology validated through pilots" },
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
