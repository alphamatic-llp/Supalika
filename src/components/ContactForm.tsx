"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Building, Briefcase, Factory } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nProduct Interest: ${formData.productInterest}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919804270501?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-text-muted mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text uppercase mb-6 leading-tight">
              Let's Build <br/>
              <span className="text-brand-text-muted">Together.</span>
            </h2>
            <p className="text-brand-text-muted mb-12 max-w-md">
              Whether you need a quote for a large infrastructure project or have questions about our stone aggregates, our team is ready to assist you.
            </p>
            
            <div className="flex flex-col gap-8">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-bg-alt flex items-center justify-center shrink-0 border border-brand-border">
                  <Building className="w-5 h-5 text-brand-text" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text mb-1">Registered Office</h4>
                  <p className="text-sm text-brand-text-muted">Premises No- 51/2072, Bandhabahal,<br/>Tahsil-Lakhanpur, Jharsuguda, Odisha-768211</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-bg-alt flex items-center justify-center shrink-0 border border-brand-border">
                  <Briefcase className="w-5 h-5 text-brand-text" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text mb-1">Corporate Office</h4>
                  <p className="text-sm text-brand-text-muted">Room 2C, Bajaj Kunj, 118-Bangur Avenue,<br/>Block-C, Kolkata-700055</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-bg-alt flex items-center justify-center shrink-0 border border-brand-border">
                  <Factory className="w-5 h-5 text-brand-text" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text mb-1">Production Unit</h4>
                  <p className="text-sm text-brand-text-muted">Chichinda, Kechobahal,<br/>Dis-Jharuguda, Odisha-768216</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-bg-alt flex items-center justify-center shrink-0 border border-brand-border">
                  <Phone className="w-5 h-5 text-brand-text" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text mb-1">Phone</h4>
                  <p className="text-sm text-brand-text-muted">+91 98042 70501</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-bg-alt flex items-center justify-center shrink-0 border border-brand-border">
                  <Mail className="w-5 h-5 text-brand-text" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text mb-1">Email</h4>
                  <p className="text-sm text-brand-text-muted">contact@supalikastone.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-brand-border/30 relative overflow-hidden h-fit"
          >
            <h3 className="text-2xl font-bold text-brand-text mb-8">Send a Message</h3>
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-brand-text-muted">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-brand-bg-alt/50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-text transition-colors" 
                  placeholder="John Doe" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-brand-text-muted">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-brand-bg-alt/50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-text transition-colors" 
                    placeholder="john@company.com" 
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-brand-text-muted">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-brand-bg-alt/50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-text transition-colors" 
                    placeholder="+91 98765 43210" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-brand-text-muted">Company</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-brand-bg-alt/50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-text transition-colors" 
                    placeholder="Company Name" 
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-brand-text-muted">Product Interest</label>
                  <select 
                    required
                    value={formData.productInterest}
                    onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
                    className="w-full bg-brand-bg-alt/50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-text transition-colors" 
                  >
                    <option value="" disabled>Select Product</option>
                    <option value="Quarry Boulders">Quarry Boulders</option>
                    <option value="Crusher Aggregates (20mm, 10mm, etc)">Crusher Aggregates (20mm, 10mm, etc)</option>
                    <option value="Sand (Dust/M-Sand)">Sand (Dust/M-Sand)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-brand-text-muted">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-brand-bg-alt/50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-text transition-colors resize-none" 
                  placeholder="Tell us about your project requirements..." 
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-btn hover:bg-brand-btn-hover text-white rounded-xl px-6 py-4 font-bold transition-colors flex items-center justify-center gap-2 mt-2"
              >
                Send via WhatsApp
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
        
        {/* Map Embed */}
        <div className="w-full h-[400px] rounded-[32px] overflow-hidden shadow-lg border border-brand-border/30">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d118228.84711690074!2d83.8443586!3d21.8496979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20e2ef64db0c3f%3A0xc48c1eeb6b36a536!2sJharsuguda%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}
