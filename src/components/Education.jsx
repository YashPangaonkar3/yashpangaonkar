import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, CircleDot } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B. Tech)",
      institution: "Walchand Institute of Technology, Solapur",
      date: "June 2021 – May 2025",
      details: "Batch 2025 passout",
      grade: "CGPA: 8.52",
      icon: <GraduationCap size={20} className="text-blue-400" />
    },
    {
      degree: "12th Grade (HSC)",
      institution: "Walchand College of Science",
      date: "2020 – 2021",
      details: "Science Stream",
      grade: "Marks: 85%",
      icon: <BookOpen size={20} className="text-purple-400" />
    }
  ];

  return (
    <section id="education" className="section-container relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">My <span className="text-blue-500">Education</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          My academic background and qualifications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-slate-700/50 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[45px] md:-left-[53px] top-1 w-10 h-10 rounded-full bg-[#050505] border-2 border-slate-700/50 flex items-center justify-center shadow-lg shadow-blue-500/10 z-10">
                <CircleDot size={14} className={idx === 0 ? "text-blue-500" : "text-purple-500"} />
              </div>

              <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100">{item.degree}</h3>
                      <p className="text-lg text-slate-300 font-medium mt-1">{item.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm whitespace-nowrap bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 items-center">
                  <span className="text-slate-400 text-sm">{item.details}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 hidden md:block"></span>
                  <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-3 py-1 rounded-md text-sm border border-emerald-400/20">
                    {item.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
