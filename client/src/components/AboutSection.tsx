import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const paragraphs = sectionRef.current.querySelectorAll('.about-paragraph');
    
    paragraphs.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: paragraph,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background" id="about" data-testid="section-about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-card-border">
              <div className="space-y-4 sm:space-y-6 text-card-foreground">
                <p className="about-paragraph text-sm sm:text-base leading-relaxed" data-testid="text-about-paragraph-1">
                  My journey into the world of technology began with a simple "Hello, World!" program in C++. 
                  That moment sparked a curiosity that has driven me ever since. I am a recent graduate with a 
                  B.Tech in Computer Science from the University Institute of Technology, RGPV, Bhopal.
                </p>
                <p className="about-paragraph text-sm sm:text-base leading-relaxed" data-testid="text-about-paragraph-2">
                  Throughout my degree, I've developed a strong foundation in Data Structures, Algorithms, and 
                  Object-Oriented Programming. I enjoy diving deep into how things work, which led me to focus on 
                  backend development.
                </p>
                <p className="about-paragraph text-sm sm:text-base leading-relaxed" data-testid="text-about-paragraph-3">
                  During my internship at Growthify Solutions, I had the opportunity to build and deploy RESTful 
                  APIs using Spring Boot, which solidified my interest in creating robust server-side applications.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/20">
              <blockquote className="text-base sm:text-lg lg:text-xl font-medium italic text-foreground leading-relaxed" data-testid="text-quote">
                "I am a dedicated problem-solver, consistently practicing on platforms like LeetCode and CodeChef. 
                I'm now eager to apply my skills and passion to a challenging full-time role as a Software Development 
                Engineer, where I can contribute to meaningful projects and continue to learn from experienced professionals."
              </blockquote>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
