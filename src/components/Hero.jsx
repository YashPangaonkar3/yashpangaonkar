import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="section-container text-center z-10 w-full px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-400 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Hi, I'm <br />
            <span className="heading-gradient text-transparent bg-clip-text">Yash Pangaonkar</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium text-slate-300 h-16 md:h-12 mb-6"
        >
          <span>
            <Typewriter
              words={[
                'Software Engineer',
                'AI/ML Engineer',
                'Data Analyst',
                'Python Developer'
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mb-10 leading-relaxed"
        >
          I build intelligent systems using Python, Machine Learning, and scalable architectures. Proven ability to translate business problems into technical solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Yash.pdf"
            download="Yash_Pangaonkar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 glass-panel hover:bg-white/10 text-slate-200 px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a href="https://github.com/Yash-Pangaonkar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yash-pangaonkar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 hover:-translate-y-1 transition-all">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:yashpangaonkar03@gmail.com" className="text-slate-400 hover:text-rose-400 hover:-translate-y-1 transition-all">
            <Mail size={24} />
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-600 flex justify-center p-2">
          <div className="w-1 h-3 bg-blue-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
