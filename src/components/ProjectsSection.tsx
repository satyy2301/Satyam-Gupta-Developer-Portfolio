import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Sparkles, Brain, Cpu, Gamepad2, Map, Plane } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  icon: React.ReactNode;
  color: 'cyan' | 'purple' | 'green';
}

const projects: Project[] = [
  {
    title: 'Poetik',
    description: 'AI-Powered Creative Writing & Literature Learning Platform',
    longDescription: 'Full-stack platform where users learn, write, and share poetry through AI-guided pillars: Read, Write, and Learn. Integrates OpenAI APIs for poem generation, critique, and style adaptation.',
    technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/satyy2301/Poetik',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'purple',
  },
  {
    title: 'Archaeological RAG Chatbot',
    description: 'AI Assistant for Survey Analysis & Site Prediction',
    longDescription: 'RAG chatbot that analyzes archaeological documents, maps, and survey data to predict excavation sites. Uses LangChain, FAISS vector storage, and geospatial libraries for interactive map visualization.',
    technologies: ['Python', 'LangChain', 'FAISS', 'GeoPandas', 'Folium'],
    github: 'https://github.com/satyy2301/archaeological-rag-chatbot',
    icon: <Map className="w-8 h-8" />,
    color: 'cyan',
  },
  {
    title: 'AIPoster',
    description: 'AI-Powered Content Generator & Auto-Tweeter',
    longDescription: 'Automated system fetching real-time news via GNews API and generating Twitter posts with Deepseek AI. Features keyword filtering, AI summarization, and auto-posting with rate limit handling.',
    technologies: ['FastAPI', 'Deepseek AI', 'Tweepy', 'Python', 'SupaBase'],
    github: 'https://github.com/satyy2301/AiPoster',
    icon: <Brain className="w-8 h-8" />,
    color: 'green',
  },
  {
    title: 'AI Police - CopMap',
    description: 'Patrol Bandobast Automation System',
    longDescription: 'Intelligent patrol management and automation system designed to optimize police deployment and coverage. Features real-time tracking and strategic route planning.',
    technologies: ['React', 'Node.js', 'Maps API', 'AI/ML'],
    github: 'https://github.com/satyy2301/AI-POLICE---CopMap-Patrol-Bandobast-Automation',
    icon: <Cpu className="w-8 h-8" />,
    color: 'purple',
  },
  {
    title: 'Local Mind LLM',
    description: 'Open-Source, Locally-Runnable LLM Interface',
    longDescription: 'Desktop-native LLM interface enabling offline interaction with open-source models like Llama 3 and Mistral. Features model quantization and memory optimization for consumer hardware.',
    technologies: ['Python', 'PyTorch', 'Tkinter', 'Llama', 'Mistral'],
    github: 'https://github.com/satyy2301/Local-Mind-LLM',
    icon: <Brain className="w-8 h-8" />,
    color: 'cyan',
  },
  {
    title: 'Multi-Tenant Project Mgmt',
    description: 'CRUD-Based Project Management System',
    longDescription: 'Comprehensive multi-tenant project management application with full CRUD operations, user authentication, and role-based access control for enterprise use.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/satyy2301/Multi-Tenant-Project-Management-System---CRUD',
    icon: <Cpu className="w-8 h-8" />,
    color: 'green',
  },
  {
    title: 'AI FlightTracker',
    description: 'Airline Market Analysis Dashboard',
    longDescription: 'Real-time flight analytics platform that scrapes, processes, and visualizes airline data—tracking pricing trends, demand shifts, and route performance with predictive models.',
    technologies: ['Python', 'Data Analysis', 'Visualization', 'ML'],
    github: 'https://github.com/satyy2301/AIFlightTracker',
    icon: <Plane className="w-8 h-8" />,
    color: 'purple',
  },
  {
    title: 'Snowboarder Game',
    description: '2D Platformer Game in Unity',
    longDescription: '2D side-scrolling platform game in Unity with smooth player movement, jump physics, crash detection, score tracking, and optimized rendering with particle effects.',
    technologies: ['Unity', 'C#', 'Game Dev', '2D Physics'],
    github: 'https://github.com/satyy2301/snowboarder-game',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: 'cyan',
  },
  {
    title: 'Archaeological Site Predictor',
    description: 'AI-Based Discovery Prediction Tool',
    longDescription: 'Machine learning model that predicts potential archaeological site locations based on historical data, terrain analysis, and pattern recognition algorithms.',
    technologies: ['Python', 'ML', 'GeoPandas', 'Data Science'],
    github: 'https://github.com/satyy2301/Archaeological-Site-Discovery-Predictor',
    icon: <Map className="w-8 h-8" />,
    color: 'green',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    cyan: {
      border: 'border-neon-cyan/30 hover:border-neon-cyan/60',
      text: 'text-neon-cyan',
      glow: 'group-hover:shadow-neon-cyan',
      bg: 'bg-neon-cyan/10',
    },
    purple: {
      border: 'border-neon-purple/30 hover:border-neon-purple/60',
      text: 'text-neon-purple',
      glow: 'group-hover:shadow-neon-purple',
      bg: 'bg-neon-purple/10',
    },
    green: {
      border: 'border-neon-green/30 hover:border-neon-green/60',
      text: 'text-neon-green',
      glow: 'group-hover:shadow-neon-green',
      bg: 'bg-neon-green/10',
    },
  };

  const colors = colorClasses[project.color];

  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`h-full glass-card rounded-2xl p-6 border ${colors.border} transition-all duration-500 ${colors.glow}`}
        whileHover={{ y: -10, scale: 1.02 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Icon */}
        <div className={`inline-flex items-center justify-center p-4 rounded-xl ${colors.bg} ${colors.text} mb-4`}>
          {project.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-gradient-primary transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Long Description - Revealed on Hover */}
        <motion.p 
          className="text-muted-foreground/80 text-xs mb-4 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? 'auto' : 0, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {project.longDescription}
        </motion.p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-badge text-xs">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-medium ${colors.text} hover:underline transition-all`}
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const displayedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of innovative projects spanning AI, web development, and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="p-3 glass-card rounded-xl border border-primary/30 disabled:opacity-30 hover:border-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentPage 
                      ? 'bg-primary shadow-neon-cyan' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-3 glass-card rounded-xl border border-primary/30 disabled:opacity-30 hover:border-primary transition-all"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default ProjectsSection;
