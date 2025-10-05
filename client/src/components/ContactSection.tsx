import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import RoundedButton from '@/components/RoundedButton';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akash.verma.dev@email.com',
      href: 'mailto:akash.verma.dev@email.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/akash-verma-dev',
      href: 'https://linkedin.com/in/akash-verma-dev',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhopal, Madhya Pradesh, India',
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background" id="contact" data-testid="section-contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4" data-testid="text-contact-intro">
            I'm actively looking for full-time SDE roles and would love to hear from you. Whether you have a question or just want to connect, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-card-border h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6" data-testid="text-contact-info-title">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4"
                      data-testid={`contact-info-${info.label.toLowerCase()}`}
                    >
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-foreground hover:text-primary transition-colors font-medium break-words"
                            data-testid={`link-${info.label.toLowerCase()}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base text-foreground font-medium break-words">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Open to opportunities in backend development, full-stack roles, and SDE positions.
                </p>
                <Button className="w-full gap-2" data-testid="button-download-resume">
                  <Mail className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-card-border">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6" data-testid="text-form-title">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    data-testid="input-message"
                  />
                </div>

                <div className="hidden sm:block w-full">
                  <RoundedButton backgroundColor="#3b82f6" className="w-full">
                    <span className="flex items-center gap-2 font-medium text-foreground hover:text-white transition-colors">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  </RoundedButton>
                </div>
                <div className="sm:hidden w-full">
                  <Button type="submit" className="w-full gap-2" data-testid="button-send-message">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
