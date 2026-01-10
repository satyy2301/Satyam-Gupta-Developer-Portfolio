import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Briefcase, Download, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  color: 'cyan' | 'purple' | 'green';
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern',
    company: 'ToolJet',
    location: 'India',
    period: 'Jun 2025 – Oct 2025',
    description: [
      'Built custom plugins for ToolJet Marketplace using TypeScript & Node.js',
      'Designed schema-driven UIs via manifest.json and operations.json',
      'Optimized API query execution with caching and error handling',
      'Empowered 1000+ users to integrate external APIs without coding',
    ],
    color: 'cyan',
  },
  {
    title: 'Junior Software Engineer Intern',
    company: 'ORIserve',
    location: 'India',
    period: 'Jul 2024 – Jun 2025',
    description: [
      'Developed responsive UI components using React.js, TypeScript, and Redux',
      'Reduced integration bugs by 30% through RESTful API implementation',
      'Applied React.memo, useMemo, and virtualization for performance',
      'Built accessible, mobile-first UI with Ant Design and Material-UI',
    ],
    color: 'purple',
  },
  {
    title: 'Backend Developer Intern',
    company: 'CRIS (Railway)',
    location: 'Delhi',
    period: 'May 2024 – Jul 2024',
    description: [
      'Contributed to scalable backend modules using Node.js and Express.js',
      'Integrated RESTful APIs and optimized response times by 20%',
      'Collaborated in Agile team structure with weekly sprint goals',
    ],
    color: 'green',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Coincent',
    location: 'India',
    period: 'Aug 2022 – Oct 2022',
    description: [
      'Built responsive web pages for an industry-level job portal',
      'Integrated dynamic forms, real-time listings, and modal views',
      'Enhanced cross-browser compatibility and reduced bounce rate',
    ],
    color: 'cyan',
  },
];

const TimelineItem = ({ experience, index, isLast }: { experience: Experience; index: number; isLast: boolean }) => {
  const colorClasses = {
    cyan: {
      dot: 'bg-neon-cyan shadow-neon-cyan',
      line: 'from-neon-cyan',
      border: 'border-neon-cyan/30 hover:border-neon-cyan/60',
      text: 'text-neon-cyan',
    },
    purple: {
      dot: 'bg-neon-purple shadow-neon-purple',
      line: 'from-neon-purple',
      border: 'border-neon-purple/30 hover:border-neon-purple/60',
      text: 'text-neon-purple',
    },
    green: {
      dot: 'bg-neon-green shadow-neon-green',
      line: 'from-neon-green',
      border: 'border-neon-green/30 hover:border-neon-green/60',
      text: 'text-neon-green',
    },
  };

  const colors = colorClasses[experience.color];

  return (
    <motion.div 
      className="relative flex gap-6 md:gap-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${colors.dot} z-10`} />
        {!isLast && (
          <div className={`w-0.5 flex-1 bg-gradient-to-b ${colors.line} to-transparent opacity-30`} />
        )}
      </div>

      {/* Content Card */}
      <motion.div 
        className={`flex-1 glass-card rounded-2xl p-6 border ${colors.border} mb-8 transition-all duration-300`}
        whileHover={{ scale: 1.02, x: 10 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground">{experience.title}</h3>
            <p className={`font-medium ${colors.text}`}>{experience.company}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
              <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`} />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-secondary mb-4 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Building impactful products across the full stack
          </p>

          {/* Download Resume Button */}
          <motion.a
            href="/resume/SATYAM_GUPTA_RESUME.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-heading font-semibold rounded-xl hover:shadow-neon-cyan transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={exp.company + exp.period} 
              experience={exp} 
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Achievements */}
        <motion.div 
          className="mt-16 glass-card rounded-2xl p-8 border border-accent/20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-heading font-bold text-center mb-6 text-accent">Achievements & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Deployed multiple full-stack web applications with real-time features',
              'Published 10+ open-source projects on GitHub with clean documentation',
              'React - The Complete Guide (Udemy) certification',
              'JavaScript Algorithms & Data Structures (freeCodeCamp)',
            ].map((achievement, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                {achievement}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default ExperienceSection;
