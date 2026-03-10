import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Brain,
  ShieldCheck,
  Radio,
  TrendingUp,
  Users,
  Building2,
  BarChart3,
  Globe,
  CheckCircle,
  ArrowUpRight,
  FileText,
  Store,
  LayoutDashboard,
  Battery,
} from "lucide-react";
import { Button } from "../components/ui/button";
import NewsTicker from "../components/NewsTicker";

const Home = () => {
  const stats = [
    { value: "Zero", label: "Carbon Emissions", icon: <Zap className="w-5 h-5" /> },
    { value: "80%", label: "Lower Operating Costs", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "20 kW", label: "Pilot Deployment", icon: <BarChart3 className="w-5 h-5" /> },
    { value: "Patented", label: "Geothermal Tech", icon: <Globe className="w-5 h-5" /> },
  ];

  return (
    <main data-testid="home-page">

      {/* News Ticker */}
      <div className="pt-16 lg:pt-20">
        <NewsTicker />
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768839722571-c45c96186dee?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/75" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
                <Zap className="w-3.5 h-3.5" />
                Indigenous Clean Energy Technology
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
                Decarbonizing
                <span className="block text-emerald-400">Off-Grid Power</span>
              </h1>

              <p className="text-base lg:text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                Zero-emission electricity from geothermal energy and green hydrogen. Renergizr Industries powers the future with patented clean energy systems replacing diesel generators across industries, ports, and defense infrastructure.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button
                    data-testid="hero-cta-primary"
                    className="rounded-sm px-8 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
                  >
                    Explore Technology
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    data-testid="hero-cta-secondary"
                    variant="outline"
                    className="rounded-sm px-8 py-5 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800 font-semibold uppercase tracking-wide text-sm"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right — Stats card (desktop) */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-sm p-8">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-6">
                  Technology Highlights
                </p>
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-sm p-5 text-center">
                      <div className="flex justify-center mb-2 text-emerald-400">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar — mobile only */}
      <section className="lg:hidden bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE TECHNOLOGY ────────────────────────────────────────── */}
      <section data-testid="modules-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              Technology Stack
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight max-w-xl">
              Clean Energy Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              data-testid="module-client"
              className="bg-white border border-slate-200 border-t-4 border-t-amber-500 rounded-sm p-7 card-lift"
            >
              <div className="w-12 h-12 rounded-sm bg-amber-50 flex items-center justify-center text-amber-600 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Green Hydrogen</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced electrolysis technology producing 99.8% pure hydrogen from wastewater, creating a clean energy carrier for electricity generation.
              </p>
            </div>

            <div
              data-testid="module-vendor"
              className="bg-white border border-slate-200 border-t-4 border-t-emerald-500 rounded-sm p-7 card-lift"
            >
              <div className="w-12 h-12 rounded-sm bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Geothermal Energy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Patented geothermal electricity generation technology delivering continuous baseload renewable power with 100+ year operational life.
              </p>
            </div>

            <div
              data-testid="module-admin"
              className="bg-white border border-slate-200 border-t-4 border-t-slate-700 rounded-sm p-7 card-lift"
            >
              <div className="w-12 h-12 rounded-sm bg-slate-100 flex items-center justify-center text-slate-700 mb-5">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Fuel Cell Power</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                High-efficiency fuel cell stacks converting hydrogen to zero-emission electricity with modular scalability from 5 kW to 1 MW+.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ───────────────────────────────────────────── */}
      <section data-testid="services-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              Key Advantages
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Renergizr
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Zero Emissions",
                desc: "Complete elimination of carbon emissions, enabling industries to meet ESG goals and sustainability targets.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Lower Costs",
                desc: "80% reduction in operational costs compared to diesel generators with minimal maintenance requirements.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Patented Tech",
                desc: "Government-registered patented process for indigenous clean energy generation providing competitive advantage.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Modular Scalability",
                desc: "Flexible deployment from 5 kW to 1 MW+ with containerized systems for any application.",
              },
            ].map((service, i) => (
              <div
                key={i}
                data-testid={`service-card-${i}`}
                className="bg-white border border-slate-200 rounded-sm p-6 card-lift border-accent-top"
              >
                <div className="w-12 h-12 rounded-sm bg-slate-100 flex items-center justify-center text-emerald-600 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
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

      {/* ── ABOUT PREVIEW ───────────────────────────────────────────── */}
      <section data-testid="about-preview" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                About Renergizr
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-5">
                Decarbonizing Energy with Innovation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Renergizr Industries develops indigenous clean energy technologies for zero-emission electricity generation. Our patented systems leverage geothermal energy, wastewater processing, and green hydrogen fuel cells to deliver sustainable power for industries, ports, and defense infrastructure across India.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Patented geothermal electricity generation",
                  "99.8% pure hydrogen from wastewater",
                  "80% lower operational costs vs diesel",
                  "Modular systems from 5 kW to 1 MW+",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button
                  data-testid="about-learn-more"
                  className="rounded-sm px-8 py-5 bg-slate-900 hover:bg-slate-800 text-white font-semibold uppercase tracking-wide text-sm"
                >
                  Our Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1686475577092-285cd688e55a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Renewable Energy Infrastructure"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-sm p-5 max-w-[210px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-sm bg-emerald-500 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xl leading-none">16+</div>
                    <div className="text-slate-500 text-xs mt-1">Years of Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER MESSAGE ─────────────────────────────────────────── */}
      <section data-testid="founder-message" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Founder card */}
            <div className="lg:col-span-4">
              <div className="relative">
                <div className="rounded-sm overflow-hidden bg-slate-200 h-[320px] flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Users className="w-14 h-14 text-white" />
                  </div>
                </div>
                <div className="bg-slate-900 text-white px-5 py-4 rounded-sm">
                  <div className="font-bold text-base">Himanshu Gupta</div>
                  <div className="text-emerald-400 text-sm">Founder &amp; Director</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="lg:col-span-8">
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                From the Founder
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Building the Future of Clean Energy
              </h2>
              <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-slate-600 text-lg leading-relaxed mb-6">
                "India's energy independence depends on sustainable, indigenous technologies. We built Renergizr to provide zero-emission power solutions that replace polluting diesel generators. With our patented geothermal and green hydrogen systems, we're creating a cleaner, more resilient energy future."
              </blockquote>
              <p className="text-slate-500 text-sm">
                Himanshu Gupta is an entrepreneur with 12+ years in industrial technology and clean energy. He founded Renergizr Industries with technical mentorship from Dr. Bhupesh Sharma, a renowned materials scientist with 35+ years of research experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section data-testid="cta-section" className="py-20 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-5">
            Power Your Future with Clean Energy
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Renergizr Industries to deploy zero-emission power systems for your industrial, commercial, or strategic infrastructure needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                data-testid="cta-primary"
                className="rounded-sm px-10 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                data-testid="cta-secondary"
                variant="outline"
                className="rounded-sm px-10 py-6 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800 font-semibold uppercase tracking-wide text-sm"
              >
                Learn Technology
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
