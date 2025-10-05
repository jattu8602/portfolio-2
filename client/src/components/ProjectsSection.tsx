import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Shopper's Bay - E-commerce Platform",
    description: 'A full-stack e-commerce website that allows users to browse products, add them to a cart, and proceed to checkout.',
    features: [
      'Secure user authentication with JWT',
      'Product search and filtering',
      'Shopping cart functionality',
      'Responsive user interface',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    demoLink: '#',
    githubLink: '#',
    image: 'project1',
  },
  {
    title: 'CodeSnip - Code Snippet Manager',
    description: 'A backend-focused application for developers to save, manage, and search for useful code snippets. The primary focus was on building a clean and well-documented REST API.',
    features: [
      'Secure CRUD operations for code snippets',
      'Search functionality based on language or tags',
      'User-specific data storage',
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Spring Security'],
    githubLink: '#',
    image: 'project2',
  },
  {
    title: 'CampusConnect - College Discussion Forum',
    description: 'A web-based forum where students can post questions, share notes, and discuss topics related to different college subjects. This was a collaborative team project.',
    features: [
      'Discussion threads with posts and comments',
      'Subject-based categorization',
      'User authentication and profiles',
    ],
    role: 'I was responsible for the entire backend development, including database schema design, user authentication, and the logic for handling posts and comments.',
    techStack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
    githubLink: '#',
    image: 'project3',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-card" id="projects" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card
                className="h-full bg-background/50 backdrop-blur-sm border-card-border overflow-hidden group hover-elevate transition-all duration-300"
                data-testid={`card-project-${index}`}
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-chart-2/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20">
                      {project.image === 'project1' ? '🛍️' : project.image === 'project2' ? '💻' : '🎓'}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>

                  {project.role && (
                    <p className="text-sm text-card-foreground mb-4 italic">
                      <strong>My Role:</strong> {project.role}
                    </p>
                  )}

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-chart-3 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.demoLink && (
                      <Button size="sm" className="flex-1 gap-2" data-testid={`button-demo-${index}`}>
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 gap-2"
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
