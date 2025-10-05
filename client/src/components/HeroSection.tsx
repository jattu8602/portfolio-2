import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import RoundedButton from '@/components/RoundedButton';
import { Download, Mail } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const particles = new THREE.Group();
    for (let i = 0; i < 50; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x3b82f6 : 0x06b6d4,
        transparent: true,
        opacity: 0.6,
      });
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      particles.add(particle);
    }
    scene.add(particles);

    const mainShape = new THREE.Mesh(geometry, material);
    scene.add(mainShape);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      mainShape.rotation.x += 0.001;
      mainShape.rotation.y += 0.002;

      particles.rotation.y += 0.0005;
      particles.children.forEach((particle, index) => {
        particle.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card" id="home" data-testid="section-hero">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-24 sm:pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4" data-testid="text-badge">
                Available for Full-Time Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
              data-testid="text-heading"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2 block sm:inline">
                Akash Verma
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              data-testid="text-tagline"
            >
              A Software Developer with a passion for building efficient and scalable backend systems. 
              I love solving complex problems with clean code.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="hidden sm:block">
                <RoundedButton backgroundColor="#3b82f6">
                  <span className="flex items-center gap-2 font-medium text-foreground hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                    View My Resume
                  </span>
                </RoundedButton>
              </div>
              <div className="sm:hidden">
                <Button size="lg" className="gap-2 w-full" data-testid="button-view-resume">
                  <Download className="w-4 h-4" />
                  View My Resume
                </Button>
              </div>
              
              <div className="hidden sm:block">
                <RoundedButton backgroundColor="transparent">
                  <span className="flex items-center gap-2 font-medium text-foreground hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </span>
                </RoundedButton>
              </div>
              <div className="sm:hidden">
                <Button size="lg" variant="outline" className="gap-2 w-full" data-testid="button-contact">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80" data-testid="container-avatar">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full border-4 border-primary/30 overflow-hidden bg-gradient-to-br from-card to-background flex items-center justify-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary/50">AV</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
          data-testid="container-scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
