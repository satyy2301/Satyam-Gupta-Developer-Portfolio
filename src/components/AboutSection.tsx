import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, Briefcase, Code2, Sparkles } from 'lucide-react';

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  frontContent: string;
  backContent: string;
  delay: number;
  color: 'cyan' | 'purple' | 'green';
  onClick?: () => void;
}

const FlipCard = ({ icon, title, frontContent, backContent, delay, color, onClick }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const colorClasses = {
    cyan: 'from-neon-cyan/20 to-transparent border-neon-cyan/30 shadow-neon-cyan',
    purple: 'from-neon-purple/20 to-transparent border-neon-purple/30 shadow-neon-purple',
    green: 'from-neon-green/20 to-transparent border-neon-green/30 shadow-neon-green',
  };

  const textColors = {
    cyan: 'text-neon-cyan',
    purple: 'text-neon-purple',
    green: 'text-neon-green',
  };

  return (
    <motion.div
      className={`perspective-1000 h-72 md:h-80 ${onClick ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front */}
        <div className={`absolute inset-0 backface-hidden glass-card rounded-2xl p-6 border bg-gradient-to-br ${colorClasses[color]} flex flex-col items-center justify-center text-center`}>
          <div className={`mb-4 p-4 rounded-xl bg-card/50 ${textColors[color]}`}>
            {icon}
          </div>
          <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{frontContent}</p>
          <div className="mt-4 text-xs text-primary/60 font-medium">Hover to reveal more</div>
        </div>

        {/* Back */}
        <div 
          className={`absolute inset-0 backface-hidden glass-card rounded-2xl p-6 border bg-gradient-to-br ${colorClasses[color]} flex flex-col justify-center`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="text-foreground text-sm leading-relaxed">{backContent}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToExperience = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      frontContent: "B.Tech in Computer Science from Jaypee Institute of Information Technology (JIIT), Noida — graduating June 2025",
      backContent: "Core expertise in Data Structures & Algorithms, Web Development, Machine Learning, Database Systems, Operating Systems, and Cloud Computing. Senior Secondary from Delhi Public School with a strong foundation in Mathematics and Computer Science.",
      color: 'cyan' as const,
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Experience",
      frontContent: "Worked at ToolJet, ORIserve, and CRIS (Indian Railways) — Click to explore my journey",
      backContent: "Software Engineer at ToolJet building marketplace plugins. Frontend Developer at ORIserve crafting React UIs. Backend Developer at CRIS optimizing railway systems. Click to see the full timeline!",
      color: 'purple' as const,
      onClick: scrollToExperience,
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Tech Stack",
      frontContent: "Full-stack developer specializing in React, Node.js, TypeScript, and AI/ML integration",
      backContent: "Expert in React.js, Next.js, TypeScript, Node.js, Express, MongoDB, Firebase, Python, and AI/ML frameworks. Proficient with Tailwind CSS, Material-UI, Redux, and modern web optimization techniques like virtualization and lazy loading.",
      color: 'green' as const,
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Passion",
      frontContent: "Building intelligent, impactful products at the intersection of web technology and AI",
      backContent: "I thrive on creating smart content generators, archaeological prediction tools, OCR pipelines, and IoT-AI systems. Seeking remote opportunities to contribute versatile skills to teams building innovative, user-first solutions.",
      color: 'cyan' as const,
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
            Get to Know Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient-primary">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a developer who thrives at the intersection of modern web technology and applied artificial intelligence. 
            With a strong foundation in full-stack development, I build responsive, user-first web applications.
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
            <FlipCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              frontContent={card.frontContent}
              backContent={card.backContent}
              color={card.color}
              delay={index * 0.1}
              onClick={'onClick' in card ? card.onClick : undefined}
            />
          ))}
        </div>

        {/* Profile Summary */}
        <motion.div 
          className="mt-16 glass-card rounded-2xl p-8 md:p-12 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-gradient-primary">SG</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">Profile Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                I design and implement AI systems—from creating smart content generators and archaeological prediction tools 
                to developing OCR pipelines and signal processing models for IoT. I'm looking for remote opportunities to 
                contribute my versatile skill set to a team building intelligent, impactful products. Based in Noida, India, 
                I bring a unique blend of technical expertise and creative problem-solving to every project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default AboutSection;
