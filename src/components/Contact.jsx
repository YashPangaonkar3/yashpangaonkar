import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section-container relative">
      <div className="absolute top-0 left-1/2 -ml-1/2 w-screen h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="text-center mb-16 pt-10">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">Let's <span className="text-blue-500">Connect</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

            <a href="mailto:yashpangaonkar03@gmail.com" className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail />
              </div>
              <div>
                <h4 className="text-sm text-slate-400 mb-1">Email</h4>
                <p className="text-lg text-slate-200 group-hover:text-blue-400 transition-colors">yashpangaonkar03@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919209114777" className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Phone />
              </div>
              <div>
                <h4 className="text-sm text-slate-400 mb-1">Phone</h4>
                <p className="text-lg text-slate-200 group-hover:text-emerald-400 transition-colors">+91 9209114777</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/yash-pangaonkar" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaLinkedin />
              </div>
              <div>
                <h4 className="text-sm text-slate-400 mb-1">LinkedIn</h4>
                <p className="text-lg text-slate-200 group-hover:text-blue-500 transition-colors">Yash Pangaonkar</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/40 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-rose-400 text-xs mt-1.{errors.name}">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/40 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors h-32 resize-none"
                placeholder="Hello Yash, I'd like to talk about..."
              ></textarea>
              {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex justify-center items-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {isSuccess && (
              <p className="text-emerald-400 text-sm text-center">Message sent successfully! I'll get back to you soon.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
