import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Web', 'AI/ML'];

  const projects = [
    {
      title: "HRMS System",
      desc: "Employee management, leave tracking, and workflow automation. Includes a real-time dashboard with role-based access.",
      tech: ["Django", "PostgreSQL", "TailwindCSS"],
      category: "Web",
      metric: "Improved organizational productivity",
      link: "#",
      github: "#"
    },
    {
      title: "Image Caption Generator",
      desc: "Combined NLP and Computer Vision to generate descriptive captions for images using deep learning architectures.",
      tech: ["CNN (VGG16)", "LSTM", "TensorFlow"],
      category: "AI/ML",
      metric: "Achieved ~85% accuracy, Reduced loss by 30%",
      link: "#",
      github: "#"
    },
    {
      title: "AI Resume Analyzer",
      desc: "NLP-based resume parsing for skill extraction and job recommendation with real-time feedback.",
      tech: ["Streamlit", "MySQL", "NLP"],
      category: "AI/ML",
      metric: "Automated candidate screening",
      link: "#",
      github: "#"
    },
    {
      title: "Web Scraping Automation",
      desc: "Built scalable data pipelines to extract and structure real-time data into ML-ready formats.",
      tech: ["Selenium", "BeautifulSoup", "Python"],
      category: "Web",
      metric: "Real-time data extraction",
      link: "#",
      github: "#"
    },
    {
      title: "Chat with PDF (Gemini AI)",
      desc: "AI-based document Q&A system leveraging large language models for contextual understanding.",
      tech: ["Gemini AI", "LLM", "Python"],
      category: "AI/ML",
      metric: "Advanced contextual search",
      link: "#",
      github: "#"
    },
    {
      title: "Hand Gesture Volume Control",
      desc: "Real-time gesture recognition system managing system volume using computer vision.",
      tech: ["OpenCV", "MediaPipe", "Python"],
      category: "AI/ML",
      metric: "Real-time gesture tracking",
      link: "#",
      github: "#"
    },
    {
      title: "AI Voice Assistant",
      desc: "Speech recognition and NLP-powered voice-based task automation system.",
      tech: ["SpeechRecognition", "NLP", "Python"],
      category: "AI/ML",
      metric: "Hands-free automation process",
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">Featured <span className="text-blue-500">Projects</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Here are some of my recent works across web development and artificial intelligence.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {filters.map((f, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === f ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'glass-panel text-slate-300 hover:text-white'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="glass-panel p-6 rounded-2xl group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-all group-hover:bg-blue-500/20"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all">
                  <Folder size={24} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                  <a href={project.link} className="text-slate-400 hover:text-blue-400 transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{project.desc}</p>
              
              <div className="mb-4 text-xs font-medium text-emerald-400 bg-emerald-400/10 inline-block px-3 py-1 rounded-full w-fit">
                {project.metric}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
