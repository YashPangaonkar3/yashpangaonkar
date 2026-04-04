import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "HTML", "CSS", "JavaScript", "Apex"]
    },
    {
      title: "AI/ML & Data Science",
      skills: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "NLP", "Computer Vision", "ETL Pipelines", "Data Analysis"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Django", "Django REST", "Pandas", "TensorFlow", "spaCy", "LangChain", "Selenium", "BeautifulSoup", "Streamlit"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "AWS", "Power BI", "Salesforce (LWC)"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL"]
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "Claude AI", "GitHub Copilot", "Antigravity AI"]
    }
  ];

  return (
    <section id="skills" className="section-container relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">Core <span className="text-emerald-500">Competencies</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I leverage to build robust, intelligent systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
          >
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-sm px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
