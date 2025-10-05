import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-card" id="education" data-testid="section-education">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-4 sm:p-6 lg:p-8 bg-background/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300" data-testid="card-education">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-chart-2 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2" data-testid="text-degree">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-base sm:text-lg text-primary font-medium mb-3" data-testid="text-major">
                  Computer Science & Engineering
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm" data-testid="text-university">
                      University Institute of Technology, RGPV, Bhopal
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm" data-testid="text-duration">
                      2021 - 2025
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-gradient-to-r from-chart-3/20 to-chart-3/10 border border-chart-3/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-foreground">CGPA:</span>
                  <span className="text-xl sm:text-2xl font-bold text-chart-3" data-testid="text-cgpa">8.5</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">/ 10</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
