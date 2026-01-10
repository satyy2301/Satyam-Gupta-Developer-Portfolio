import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/satyy2301', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/satyamgupta-dev', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:satyamg065@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-border/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="mb-10 p-4 glass-card rounded-full border border-primary/30 hover:border-primary hover:shadow-neon-cyan transition-all group"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-6 h-6 text-primary group-hover:animate-bounce" />
          </motion.button>

          {/* Logo */}
          <motion.div 
            className="text-3xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="holographic-text">SATYAM GUPTA</span>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-neon-cyan text-muted-foreground hover:text-primary transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center flex items-center gap-2">
            © 2026 Satyam Gupta. Crafted with
            <Heart className="w-4 h-4 text-destructive animate-pulse" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
