import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6 sm:py-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm" data-testid="text-copyright">
            <span>© 2025 Akash Verma. Built with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current" />
            <span>and React</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Designed with Three.js, GSAP, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
