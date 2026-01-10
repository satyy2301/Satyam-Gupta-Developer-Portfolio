import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: 'cyan' | 'purple' | 'green' | 'blue' | 'pink';
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js / Next.js', level: 95, color: 'cyan', category: 'Frontend' },
  { name: 'TypeScript', level: 90, color: 'blue', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, color: 'cyan', category: 'Frontend' },
  { name: 'HTML5 / CSS3', level: 95, color: 'purple', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 94, color: 'blue', category: 'Frontend' },
  { name: 'Material-UI / Ant Design', level: 85, color: 'purple', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js / Express', level: 88, color: 'green', category: 'Backend' },
  { name: 'Python', level: 85, color: 'blue', category: 'Backend' },
  { name: 'MongoDB / Firebase', level: 85, color: 'green', category: 'Backend' },
  { name: 'REST APIs', level: 90, color: 'cyan', category: 'Backend' },
  { name: 'PostgreSQL / MySQL', level: 80, color: 'green', category: 'Backend' },
  { name: 'GraphQL', level: 75, color: 'pink', category: 'Backend' },
  
  // AI/ML
  { name: 'AI / Machine Learning', level: 80, color: 'purple', category: 'AI/ML' },
  { name: 'LangChain / RAG', level: 78, color: 'pink', category: 'AI/ML' },
  { name: 'OpenCV / OCR', level: 75, color: 'purple', category: 'AI/ML' },
  { name: 'TensorFlow / PyTorch', level: 70, color: 'blue', category: 'AI/ML' },
  { name: 'NLP / Transformers', level: 72, color: 'pink', category: 'AI/ML' },
  
  // Tools & DevOps
  { name: 'Git / GitHub', level: 92, color: 'green', category: 'Tools' },
  { name: 'Redux / Zustand', level: 88, color: 'blue', category: 'Tools' },
  { name: 'Postman / DevTools', level: 90, color: 'cyan', category: 'Tools' },
  { name: 'Docker / CI/CD', level: 75, color: 'green', category: 'Tools' },
  { name: 'AWS / Cloud Services', level: 70, color: 'cyan', category: 'Tools' },
  { name: 'Figma / UI Design', level: 78, color: 'purple', category: 'Tools' },
];

const SkillOrb = ({ skill, index }: { skill: Skill; index: number }) => {
  const colorClasses = {
    cyan: {
      bg: 'bg-neon-cyan/20',
      border: 'border-neon-cyan/50',
      text: 'text-neon-cyan',
      shadow: 'shadow-neon-cyan',
      glow: 'group-hover:shadow-neon-cyan',
      bar: 'from-neon-cyan to-neon-cyan/50',
    },
    purple: {
      bg: 'bg-neon-purple/20',
      border: 'border-neon-purple/50',
      text: 'text-neon-purple',
      shadow: 'shadow-neon-purple',
      glow: 'group-hover:shadow-neon-purple',
      bar: 'from-neon-purple to-neon-purple/50',
    },
    green: {
      bg: 'bg-neon-green/20',
      border: 'border-neon-green/50',
      text: 'text-neon-green',
      shadow: 'shadow-neon-green',
      glow: 'group-hover:shadow-neon-green',
      bar: 'from-neon-green to-neon-green/50',
    },
    blue: {
      bg: 'bg-neon-blue/20',
      border: 'border-neon-blue/50',
      text: 'text-neon-blue',
      shadow: 'shadow-[0_0_20px_hsl(210_100%_60%/0.5)]',
      glow: 'group-hover:shadow-[0_0_30px_hsl(210_100%_60%/0.6)]',
      bar: 'from-neon-blue to-neon-blue/50',
    },
    pink: {
      bg: 'bg-neon-pink/20',
      border: 'border-neon-pink/50',
      text: 'text-neon-pink',
      shadow: 'shadow-[0_0_20px_hsl(320_100%_60%/0.5)]',
      glow: 'group-hover:shadow-[0_0_30px_hsl(320_100%_60%/0.6)]',
      bar: 'from-neon-pink to-neon-pink/50',
    },
  };

  const colors = colorClasses[skill.color];

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`glass-card rounded-2xl p-5 border ${colors.border} transition-all duration-500 ${colors.glow} hover:scale-105`}
        whileHover={{ y: -5 }}
      >
        {/* Skill Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-heading font-semibold text-sm ${colors.text}`}>{skill.name}</h3>
          <span className={`text-xs font-display font-bold ${colors.text}`}>{skill.level}%</span>
        </div>

        {/* Progress Bar */}
        <div className="skill-bar h-2 mb-3">
          <motion.div
            className={`skill-bar-fill bg-gradient-to-r ${colors.bar}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>

        {/* Category Tag */}
        <div className={`inline-block text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} font-medium`}>
          {skill.category}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ['Frontend', 'Backend', 'AI/ML', 'Tools'];

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-secondary mb-4 block">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient-primary">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, AI/ML, and DevOps
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <div
              key={category}
              className="px-6 py-2 rounded-full glass-card border border-primary/30 text-sm font-medium text-primary"
            >
              {category}
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillOrb key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div 
          className="mt-16 glass-card rounded-2xl p-8 border border-accent/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-heading font-bold text-center mb-6 text-accent">Soft Skills & Methodologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Team Collaboration', 'Agile & Scrum', 'Technical Documentation', 
              'Problem Solving', 'Analytical Thinking', 'Project Management',
              'Self-Learning', 'Creativity & Design Thinking', 'Attention to Detail'
            ].map((skill) => (
              <span key={skill} className="tech-badge">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default SkillsSection;
