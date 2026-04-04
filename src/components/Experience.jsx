import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Genicminds",
      date: "Sep 2025 – Present",
      points: [
        "Built scalable web applications using Django & PostgreSQL",
        "Developed HRMS system with analytics and workflow automation",
        "Created web scraping pipelines using Selenium & BeautifulSoup",
        "Performed data preprocessing & analysis for actionable insights",
        "Used AI tools (Claude, Copilot) for development optimization",
        "Improved system performance and debugging efficiency"
      ]
    },
    {
      role: "Python Developer Intern",
      company: "Mass IT Solutions",
      date: "Jan 2025 – May 2025",
      points: [
        "Built automation scripts for data extraction and analysis",
        "Cleaned and processed data using Pandas & NumPy",
        "Applied feature engineering techniques to improve model accuracy",
        "Built data visualization dashboards using Power BI & Excel",
        "Worked with real-world datasets using Agile methodology"
      ]
    },
    {
      role: "Salesforce Developer",
      company: "SmartInternz",
      date: "2024",
      points: [
        "Worked on Apex, LWC, and Process Automation",
        "Earned essential Super Badges for advanced platform mechanics",
        "Built custom automation workflows tailored to business needs"
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">Professional <span className="text-purple-500">Experience</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          My journey in building scalable systems and extracting value from data.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-slate-800 rounded-full"></div>

        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`relative flex items-center justify-between md:justify-normal w-full mb-12 flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 -ml-3 md:-ml-3 w-6 h-6 rounded-full bg-[#050505] border-4 border-blue-500 z-10"></div>
            
            <div className="w-full md:w-5/12 pl-12 md:pl-0">
              <div className={`glass-panel p-6 rounded-2xl hover:border-blue-500/30 transition-colors ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                  <Briefcase size={18} />
                  <h4>{exp.role}</h4>
                </div>
                <h5 className="text-xl font-bold text-white mb-2">{exp.company}</h5>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Calendar size={14} />
                  <span>{exp.date}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Spacer for the other side */}
            <div className="w-full md:w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
