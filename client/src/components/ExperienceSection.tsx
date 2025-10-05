import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Growthify Solutions',
      location: 'Remote',
      period: 'June 2024 - August 2024',
      achievements: [
        'Developed and implemented RESTful APIs using Java and Spring Boot for the new "User Profile" module, serving over 10,000 users.',
        'Collaborated with the frontend team to integrate APIs, ensuring seamless data flow and improving data retrieval times by 15%.',
        'Wrote unit and integration tests using JUnit and Mockito, which increased the code coverage of the module to 90% and reduced pre-deployment bugs.',
        'Participated in Agile development cycles, daily stand-up meetings, and code reviews, contributing to a collaborative team environment.',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background" id="experience" data-testid="section-experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-chart-2 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8"
              data-testid={`card-experience-${index}`}
            >
              <div className="absolute left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

              <Card className="md:ml-20 p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1" data-testid="text-job-title">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-primary font-medium mb-1" data-testid="text-company">
                      {exp.company} ({exp.location})
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground" data-testid="text-period">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-card-foreground"
                      data-testid={`text-achievement-${i}`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-chart-3 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
