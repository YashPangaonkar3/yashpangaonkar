import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, LineChart, Users, Zap, Lightbulb } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Django Web Development",
      desc: "Building scalable, secure web applications and REST APIs using Django & PostgreSQL."
    },
    {
      icon: <Brain className="text-purple-400" size={32} />,
      title: "Machine Learning & AI",
      desc: "Developing end-to-end ML systems, NLP models, and leveraging Generative AI."
    },
    {
      icon: <LineChart className="text-emerald-400" size={32} />,
      title: "Data Analytics & Automation",
      desc: "Creating data pipelines, performing complex preprocessing, and building insights dashboards."
    }
  ];

  const traits = [
    { name: "Problem Solving", icon: <Zap size={18} className="text-yellow-400" /> },
    { name: "Analytical Thinking", icon: <LineChart size={18} className="text-blue-400" /> },
    { name: "Fast Learning", icon: <Lightbulb size={18} className="text-purple-400" /> },
    { name: "Team Collaboration", icon: <Users size={18} className="text-emerald-400" /> }
  ];

  return (
    <section id="about" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">About <span className="text-blue-500">Me</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Data-driven Software Engineer with hands-on experience in building robust applications and deriving business value from data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/[0.05] transition-all group"
            >
              <div className="mb-4 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Zap className="text-blue-500" /> Core Strengths
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {traits.map((trait, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-lg hover:border-blue-500/50 transition-colors">
                {trait.icon}
                <span className="font-medium text-slate-200">{trait.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
