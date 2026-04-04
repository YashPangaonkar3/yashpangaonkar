import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    "Google Project Management",
    "AWS Cloud Foundations",
    "Generative AI (Coursera)",
    "Python Programming"
  ];

  const achievements = [
    "Salesforce Super Badges",
    "Competitive coding participation",
    "Power BI simulations"
  ];

  return (
    <section className="section-container">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Award className="text-blue-500 w-10 h-10" />
            <h2 className="text-3xl font-bold font-poppins">Certifications</h2>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-slate-200 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="text-yellow-500 w-10 h-10" />
            <h2 className="text-3xl font-bold font-poppins">Achievements</h2>
          </div>
          <div className="space-y-4">
            {achievements.map((ach, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-yellow-500/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="text-slate-200 font-medium">{ach}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
