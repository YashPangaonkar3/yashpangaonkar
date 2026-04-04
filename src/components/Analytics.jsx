import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, BarChart3, TrendingUp, Presentation } from 'lucide-react';

const Analytics = () => {
  const steps = [
    { icon: <Database />, title: "Data Collection & Preprocessing", desc: "Structured real-time data pipelines & aggressive cleaning." },
    { icon: <Filter />, title: "Feature Engineering", desc: "Extracting highly predictive features from raw datasets." },
    { icon: <TrendingUp />, title: "Model Training & Evaluation", desc: "Developing optimized ML/DL models with rigorous validation." },
    { icon: <BarChart3 />, title: "Business Insights", desc: "Translating predictions into actionable automation strategies." },
    { icon: <Presentation />, title: "Data Visualization", desc: "Building intuitive dashboards using Power BI and Plotly." }
  ];

  return (
    <section id="analytics" className="section-container relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-0 hidden md:block"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">Analytics & <span className="text-purple-500">Insights</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Transforming raw data into strategic business value through end-to-end ML pipelines.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-4 relative z-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 relative group"
          >
            <div className="w-14 h-14 mx-auto bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              {step.icon}
            </div>
            <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
            <p className="text-xs text-slate-400">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Analytics;
