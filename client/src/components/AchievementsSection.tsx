import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Trophy, Code, Target, Award } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'GATE 2025',
    value: 2145,
    suffix: 'AIR',
    description: 'Secured All India Rank in Computer Science & IT',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Code,
    title: 'LeetCode',
    value: 500,
    suffix: '+ Problems',
    description: 'Contest rating of 1750 (Knight)',
    link: '#',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Target,
    title: 'CodeChef',
    value: 4,
    suffix: '★ Rating',
    description: 'Max Rating: 1820',
    link: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'SIH 2024',
    value: 0,
    label: 'Finalist',
    description: 'Smart India Hackathon - Built digital village management system',
    color: 'from-blue-500 to-cyan-500',
  },
];

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || hasAnimated) return;
    
    setHasAnimated(true);
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background" id="achievements" data-testid="section-achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div key={achievement.title} variants={itemVariants}>
                <Card
                  className="p-4 sm:p-6 h-full bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300 text-center"
                  data-testid={`card-achievement-${index}`}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} p-2 sm:p-3 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2" data-testid={`text-achievement-title-${index}`}>
                    {achievement.title}
                  </h3>

                  <div className="mb-2 sm:mb-3">
                    {achievement.value > 0 ? (
                      <div className="text-2xl sm:text-3xl font-bold text-foreground" data-testid={`text-achievement-value-${index}`}>
                        <Counter value={achievement.value} />
                        <span className="text-sm sm:text-lg ml-1 text-muted-foreground">{achievement.suffix}</span>
                      </div>
                    ) : (
                      <div className="text-xl sm:text-2xl font-bold text-foreground" data-testid={`text-achievement-label-${index}`}>
                        {achievement.label}
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground" data-testid={`text-achievement-description-${index}`}>
                    {achievement.description}
                  </p>

                  {achievement.link && (
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs text-primary hover:underline"
                      whileHover={{ scale: 1.05 }}
                      data-testid={`link-achievement-${index}`}
                    >
                      View Profile →
                    </motion.a>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
