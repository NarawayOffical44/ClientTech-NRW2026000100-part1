import { Link } from "react-router-dom";
import {
  Newspaper,
  Linkedin,
  Calendar,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  Image as ImageIcon,
  Zap,
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";
import { Button } from "../components/ui/button";

const Media = () => {
  const blogPosts = [
    {
      title: "Geothermal Energy: The Future of Baseload Renewable Power",
      excerpt: "Understanding how geothermal technology provides continuous, reliable clean electricity without weather dependencies.",
      date: "January 15, 2026",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1686475577092-285cd688e55a?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    },
    {
      title: "Green Hydrogen Production: From Wastewater to Clean Energy",
      excerpt: "Exploring advanced electrolysis technology that produces 99.8% pure hydrogen from industrial wastewater.",
      date: "January 10, 2026",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1768839722571-c45c96186dee?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    },
    {
      title: "Zero-Emission Power Systems: Industrial Applications",
      excerpt: "How clean energy genset systems are transforming power generation across manufacturing, ports, and defense sectors.",
      date: "January 5, 2026",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1639422026989-c17351e8c71e?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
    },
  ];

  const pressReleases = [
    {
      title: "20 kW Geothermal Pilot Successfully Deployed in Telangana",
      date: "January 2026",
    },
    {
      title: "Patented Geothermal Electricity Generation Process Secured",
      date: "December 2025",
    },
    {
      title: "Renergizr Industries Incorporation and Initial Prototype Success",
      date: "2024",
    },
  ];

  const linkedinPosts = [
    {
      id: "post-001",
      title: "Geothermal Pilot Success in Telangana",
      excerpt: "Our 20 kW geothermal pilot has successfully validated zero-emission electricity generation technology. This milestone brings us closer to scaling clean power solutions across India.",
      content: "Excited to share that our 20 kW geothermal pilot in Telangana has successfully validated our zero-emission electricity generation technology. This milestone brings us closer to scaling clean power solutions across India. #GeothermalEnergy #CleanTech #India",
      engagement: { likes: 342, comments: 28, shares: 15 },
      date: "3 days ago",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1768839722571-c45c96186dee?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
      linkedinUrl: "https://linkedin.com/company/renergizr-industries",
      author: "Himanshu Gupta"
    },
    {
      id: "post-002",
      title: "Patented Geothermal Process Breakthrough",
      excerpt: "12+ years of research culminated in our patented geothermal electricity generation process. Harnessing Earth's natural heat for reliable, baseload renewable power.",
      content: "Our patented geothermal electricity generation process represents 12+ years of research and innovation. By harnessing Earth's natural heat, we're enabling reliable, baseload renewable power for industries worldwide. Zero emissions. Maximum efficiency. #Innovation #Sustainability",
      engagement: { likes: 287, comments: 22, shares: 12 },
      date: "1 week ago",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1686475577092-285cd688e55a?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
      linkedinUrl: "https://linkedin.com/company/renergizr-industries",
      author: "Himanshu Gupta"
    },
    {
      id: "post-003",
      title: "80% Cost Reduction vs Diesel Generators",
      excerpt: "Our clean energy genset system delivers significant savings with zero carbon emissions, low noise operation, and modular scalability from 5 kW to 1 MW+.",
      content: "80% reduction in operational costs compared to diesel generators. That's what our clean energy genset system delivers. Plus zero carbon emissions, low noise operation, and modular scalability from 5 kW to 1 MW+. The future of power generation is here. #CleanEnergy #Industry4.0",
      engagement: { likes: 412, comments: 35, shares: 18 },
      date: "2 weeks ago",
      category: "Products",
      image: "https://images.unsplash.com/photo-1639422026989-c17351e8c71e?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
      linkedinUrl: "https://linkedin.com/company/renergizr-industries",
      author: "Himanshu Gupta"
    },
    {
      id: "post-004",
      title: "Government Support for Clean Energy Innovation",
      excerpt: "Ministry of New and Renewable Energy validates our indigenous clean energy innovation. Accelerating sustainable power solutions across India with strategic partnerships.",
      content: "Thank you Ministry of New and Renewable Energy for supporting indigenous clean energy innovation. With validation from government and industry partners, Renergizr is accelerating the transition to sustainable power solutions across India. #EnergyIndependence #DeepTech",
      engagement: { likes: 156, comments: 18, shares: 9 },
      date: "3 weeks ago",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
      linkedinUrl: "https://linkedin.com/company/renergizr-industries",
      author: "Himanshu Gupta"
    },
  ];

  return (
    <main data-testid="media-page" className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <Newspaper className="w-3.5 h-3.5" />
              Media & News
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              News, Insights & Updates
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Stay updated with the latest news, industry insights, and announcements from Renergizr Industries.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section data-testid="blog-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                Blog
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Latest Articles
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                data-testid={`blog-post-${index}`}
                className="bg-white border border-slate-200 rounded-sm overflow-hidden card-lift"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="mt-4 text-emerald-600 text-sm font-semibold inline-flex items-center gap-1 hover:text-emerald-700">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Feed Section */}
      <section data-testid="linkedin-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-[#0077B5] flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-1 block">
                  Social Updates
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  LinkedIn Posts
                </h2>
              </div>
            </div>
            <a
              href="https://linkedin.com/company/renergizr-industries"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="view-linkedin"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white text-sm font-semibold rounded-sm hover:bg-[#006097] transition-colors mt-4 md:mt-0"
            >
              <Linkedin className="w-4 h-4" />
              Follow on LinkedIn
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {linkedinPosts.map((post) => (
              <a
                key={post.id}
                href={post.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`linkedin-post-${post.id}`}
                className="bg-white border border-slate-200 rounded-sm overflow-hidden card-lift hover:shadow-lg transition-all group"
              >
                {/* Image with LinkedIn Logo Overlay */}
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#0077B5] to-[#004182] flex items-center justify-center relative">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <Linkedin className="w-16 h-16 text-white opacity-50" />
                  )}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white rounded-sm flex items-center justify-center shadow-md">
                    <Linkedin className="w-5 h-5 text-[#0077B5]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Engagement Metrics */}
                  <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-slate-500 text-xs">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 hover:text-[#0077B5] transition-colors">
                        <Heart className="w-3.5 h-3.5" />
                        <span>{post.engagement.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-[#0077B5] transition-colors">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{post.engagement.comments}</span>
                      </button>
                    </div>
                    <button className="flex items-center gap-1 hover:text-[#0077B5] transition-colors">
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{post.engagement.shares}</span>
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Press Releases Section */}
          <div className="border-t border-slate-200 pt-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Press Releases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {pressReleases.map((release, index) => (
                <div
                  key={index}
                  data-testid={`press-release-${index}`}
                  className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-emerald-500" />
                    <span className="text-xs text-slate-500 font-semibold uppercase">{release.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {release.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Resources */}
            <h2 className="text-xl font-bold text-slate-900 mb-6">Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <button className="flex items-center gap-3 p-6 bg-white border border-slate-200 rounded-sm hover:shadow-md transition-shadow text-left">
                <Video className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Corporate Videos</span>
              </button>
              <button className="flex items-center gap-3 p-6 bg-white border border-slate-200 rounded-sm hover:shadow-md transition-shadow text-left">
                <ImageIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Photo Gallery</span>
              </button>
              <button className="flex items-center gap-3 p-6 bg-white border border-slate-200 rounded-sm hover:shadow-md transition-shadow text-left">
                <FileText className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Corporate Kit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
            Media Inquiries
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            For press inquiries, interview requests, or media partnerships, please contact our communications team.
          </p>
          <Link to="/contact">
            <Button
              data-testid="media-cta"
              className="rounded-sm px-10 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Media;
