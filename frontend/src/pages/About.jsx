import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Award, 
  Building2, 
  Leaf, 
  ArrowRight,
  CheckCircle,
  Zap,
  Calendar,
  TrendingUp
} from "lucide-react";
import { Button } from "../components/ui/button";

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission",
      description: "Develop indigenous clean energy technologies that deliver zero-emission electricity using geothermal energy and green hydrogen, replacing diesel generators and enabling India's decarbonization at scale.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Vision",
      description: "Build a clean, resilient, and energy-secure future through localized renewable energy production. Transform how industries, ports, and defense infrastructure generate power globally.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Values",
      description: "Innovation, sustainability, reliability, and indigenous technology form our core values. We create measurable environmental and economic impact for all stakeholders.",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "5 kW Prototype Demonstration",
      description: "Successfully developed and demonstrated a 5 kW prototype system in Delhi with research institutions and government partners."
    },
    {
      year: "2024",
      title: "Patented Technology",
      description: "Secured patent from Government of India Patent Office for geothermal electricity generation process."
    },
    {
      year: "2024",
      title: "20 kW Field Pilot",
      description: "Deployed 20 kW pilot system at a geothermal site in Telangana, validating technology under real operating conditions."
    },
    {
      year: "2026+",
      title: "Commercial Scaling",
      description: "Scaling deployments to multi-megawatt systems across industrial clusters, ports, and defense infrastructure."
    },
  ];

  const highlights = [
    "Zero carbon emissions from electricity generation",
    "80% lower operational costs than diesel generators",
    "Modular systems from 5 kW to 1 MW+ capacity",
    "Patented geothermal energy technology",
    "Advanced green hydrogen production (99.8% purity)",
    "Low-noise operation below 45 decibels"
  ];

  return (
    <main data-testid="about-page" className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <Building2 className="w-3.5 h-3.5" />
              About Our Company
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Decarbonizing Energy with Indigenous Innovation
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed">
              Renergizr Industries is a deep-tech clean energy startup developing patented technologies for zero-emission electricity generation using geothermal energy and green hydrogen.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section data-testid="company-overview" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                From Research to Reality
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Founded by Himanshu Gupta and technically mentored by Dr. Bhupesh Sharma, Renergizr Industries combines scientific research with advanced engineering to develop next-generation clean energy systems. Our mission is delivering reliable, affordable, and zero-emission electricity to industries, ports, and defense infrastructure.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Through patented geothermal technology and advanced hydrogen fuel cells, we're replacing diesel generators with sustainable solutions that reduce costs by 80% while eliminating carbon emissions. Our validated prototypes and field pilots prove we're delivering the future today.
              </p>
              <div className="flex items-center gap-4 p-5 rounded bg-slate-50 border-accent-left">
                <div className="w-12 h-12 rounded bg-emerald-500 flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Commitment to Sustainability</div>
                  <div className="text-slate-500 text-sm">Promoting green energy adoption across India</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1758599543129-5269a8f29e68?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Business Partnership"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section data-testid="values-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Our Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-testid={`value-card-${index}`}
                className="bg-white p-8 rounded-sm shadow-sm border-accent-top card-lift"
              >
                <div className="w-14 h-14 rounded bg-slate-100 flex items-center justify-center text-emerald-600 mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section data-testid="highlights-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                What We Offer
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Technology Features
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our clean energy systems combine advanced electrolysis, geothermal extraction, and fuel cell technology to deliver reliable, scalable power for multiple applications.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-8 lg:p-10 rounded-sm">
              <h3 className="text-white font-bold text-lg mb-6">Core Technology</h3>
              <div className="space-y-4">
                {[
                  { label: "Hydrogen Production", value: "99.8% purity from wastewater" },
                  { label: "Geothermal Capacity", value: "100+ year operational life" },
                  { label: "Scalability", value: "5 kW to 1 MW+ modular systems" },
                  { label: "Cost Efficiency", value: "80% lower than diesel generators" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-slate-700 pb-4">
                    <span className="text-slate-300 text-sm">{item.label}</span>
                    <span className="text-emerald-400 text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section data-testid="timeline-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Milestones & Growth
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8">
              <div className="timeline-line"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} data-testid={`timeline-item-${index}`} className="relative">
                    <div className="timeline-dot" style={{ top: '8px' }}></div>
                    <div className="bg-white p-6 rounded-sm shadow-sm ml-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        <span className="text-emerald-600 font-bold text-sm">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
            Ready to Deploy Clean Energy?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Partner with Renergizr to implement zero-emission power solutions for your industrial, commercial, or defense operations.
          </p>
          <Link to="/contact">
            <Button
              data-testid="about-cta"
              className="rounded-sm px-10 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
