import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Energy Trading", path: "/services" },
      { name: "AI Solutions", path: "/services" },
      { name: "Grid Balancing", path: "/services" },
    ],
    legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Compliance", path: "#" },
    ],
  };

  return (
    <footer data-testid="footer" className="bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-400 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Renergizr</span>
            </Link>
            <p className="text-emerald-200/70 leading-relaxed mb-8">
              Powering the future of B2B energy trading with AI-driven solutions and sustainable technology.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                data-testid="social-linkedin"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                data-testid="social-twitter"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-emerald-200/70 hover:text-lime-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-emerald-200/70 hover:text-lime-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-emerald-200/70">+91-9315940284</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-emerald-200/70">contact@renergizr.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-emerald-200/70">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-200/50 text-sm">
              © {currentYear} Renergizr Industries Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-emerald-200/50 text-sm hover:text-lime-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
