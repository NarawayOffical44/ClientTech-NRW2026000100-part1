import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageSquare,
  Zap,
  CheckCircle
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static form - just show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91-9315940284",
      subtext: "Himanshu Gupta",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@renergizr.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "New Delhi, India",
      subtext: "Serving clients nationwide",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon - Sat: 9AM - 6PM",
      subtext: "IST (Indian Standard Time)",
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
    <main data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px]" />
        
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
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Let's Start a Conversation
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-emerald-100/70 leading-relaxed"
            >
              Have questions about our platform? Ready to transform your energy trading? We're here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-testid="contact-form-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                Contact Information
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 tracking-tight mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Whether you're interested in our B2B energy trading platform, have technical questions, or want to explore partnership opportunities, our team is ready to assist.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    data-testid={`contact-info-${index}`}
                    className="flex items-start gap-5 p-5 rounded-2xl bg-white hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{info.title}</div>
                      <div className="text-lg font-semibold text-emerald-950 mb-1">{info.value}</div>
                      <div className="text-sm text-slate-500">{info.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden bg-emerald-100 h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                  <p className="text-emerald-700 font-medium">New Delhi, India</p>
                  <p className="text-emerald-600 text-sm">Serving clients across the nation</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-400 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-950">Send Us a Message</h3>
                    <p className="text-slate-500 text-sm">Fill out the form below</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-950 mb-3">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for reaching out. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-emerald-950">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          data-testid="input-name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-emerald-950">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          data-testid="input-email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-emerald-950">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          data-testid="input-company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-emerald-950">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          data-testid="input-phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91-XXXXXXXXXX"
                          className="h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-emerald-950">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        data-testid="input-message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your energy trading needs..."
                        rows={5}
                        className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      data-testid="submit-button"
                      className="w-full h-14 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section data-testid="faq-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            {[
              {
                q: "What is Renergizr's B2B energy trading platform?",
                a: "Our platform connects energy buyers with verified vendors through an intelligent marketplace featuring AI-powered bid ranking, RFQ/tendering workflows, and real-time grid balancing capabilities."
              },
              {
                q: "How does the AI-driven bid ranking work?",
                a: "Our proprietary algorithm analyzes multiple parameters including price, vendor reliability, compliance status, and energy specifications to rank bids and help you make optimal procurement decisions."
              },
              {
                q: "Is the platform suitable for small businesses?",
                a: "Absolutely! Our platform is designed to serve businesses of all sizes, from SMEs to large enterprises, with scalable solutions tailored to your specific energy trading needs."
              },
              {
                q: "How do you ensure vendor compliance?",
                a: "We have a comprehensive verification system that checks regulatory documents, green energy certifications, carbon credit balances, and ongoing compliance monitoring for all registered vendors."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                data-testid={`faq-item-${index}`}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-emerald-950 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
