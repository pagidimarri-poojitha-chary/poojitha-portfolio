
import { motion } from 'framer-motion';
import { ExternalLink, Award, Trophy, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [

        {
      title: "Salesforce Certified Developer",
      provider: "Salesforce",
      date: "2023",
      description: "Completed an internship as a Salesforce Developer, working on customizing CRM solutions, building Apex classes, triggers, and Lightning components. Gained hands-on experience in Salesforce administration, automation, and integration.",
      // link: "https://kaggle.com/learn/certification/pagidimarrisai/intro-to-machine-learning",
      skills: ["Salesforce", "Apex", "Lightning", "CRM", "Flow Builder", "SOQL", "Data Modeling"]
    },
    {
      title: "Supervised Machine Learning",
      provider: "Coursera",
      date: "2023",
      description: "Comprehensive course covering regression, classification, and neural networks with hands-on projects.",
      // link: "https://coursera.org/verify/certificate-id",
      skills: ["Python", "TensorFlow", "Machine Learning", "Neural Networks"]
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      date: "2022",
      description: "Complete certification covering HTML5, CSS3, responsive design principles, and accessibility standards.",
      // link: "https://freecodecamp.org/certification/pagidimarrisai/responsive-web-design",
      skills: ["HTML5", "CSS3", "Responsive Design", "Accessibility"]
    },
    {
      title: "IoT Intern",
      provider: "ChargeKart",
      date: "2023",
      description: "Completed an internship focused on Internet of Things (IoT) technologies, working on projects involving embedded systems, sensor integration, and data communication protocols. Gained practical experience in developing IoT solutions for real-world applications. ",
      // link: "https://kaggle.com/learn/certification/pagidimarrisai/intro-to-machine-learning",
      skills: ["IoT", "Embedded Systems", "C/C++", "Sensors", "Microcontrollers", "Networking" ,"Cloud Integration", "Data Analysis", "Project Development", "Problem-Solving"]
    },

    {
      title: "Full Stack Web Development",
      provider: "FreeCodeCamp",
      date: "2022",
      description: "Extensive curriculum covering front-end and back-end development, including projects using HTML, CSS, JavaScript, Node.js, and databases.",
      // link: "https://kaggle.com/learn/certification/pagidimarrisai/intro-to-machine-learning",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "React"]
    },
        {
      title: "0 to 100X Web Development",
      provider: "100Xdevs",
      date: "2022",
      description: "Comprehensive web development course covering HTML, CSS, JavaScript, React, Node.js, and deployment strategies.",
      // link: "https://kaggle.com/learn/certification/pagidimarrisai/intro-to-machine-learning",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Deployment"]
    },
        {
      title: "Web developer Bootcamp",
      provider: "Udemy",
      date: "2023",
      description: "In-depth web development bootcamp covering full-stack technologies, including HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
      // link: "https://kaggle.com/learn/certification/pagidimarrisai/intro-to-machine-learning",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"]
    },

            {
      title: "Certified in Google Analytics 4 (GA4)",
      provider: "Google Digital Garage",
      date: "2023",
      description: "Comprehensive training on Google Analytics 4, covering data collection, analysis, and reporting to optimize website performance and marketing strategies.",
      // link: "https://kaggle.com/learn/certification/pagidimarrisai/intro-to-machine-learning",
      skills: ["Google Analytics 4", "Data Analysis", "Reporting", "Marketing Optimization", "SEO" ,"Data-Driven Decision Making", "Website Performance Analysis", "Campaign Tracking", "User Behavior Analysis", "Conversion Rate Optimization"]
    },

                {
      title: "UI/UX Design",
      provider: "Coursera",
      date: "2023",
      description: "Comprehensive course covering user research, wireframing, prototyping, and usability testing with hands-on projects.",
      // link: "https://kaggle.com/learn/certification/pagidimarrisai/intro-to-machine-learning",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },

    



  ];

  const achievements = [
    { icon: Trophy, label: "Certifications Earned", value: "9+", color: "#FFD700" },
    { icon: Star, label: "Course Completion Rate", value: "100%", color: "#FF6B6B" },
    { icon: Award, label: "Skills Validated", value: "15+", color: "#4ECDC4" },
  ];

  return (
    <section id="certifications" className="py-20 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications 
            and comprehensive skill validation.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 text-center group cursor-pointer"
            >
              <div 
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: achievement.color + '20' }}
              >
                <achievement.icon 
                  className="w-6 h-6" 
                  style={{ color: achievement.color }}
                />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{achievement.value}</div>
              <div className="text-muted-foreground text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary to-primary-glow rounded-xl group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link cursor-hover opacity-60 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
                
                <h3 className="heading-md text-xl mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-semibold text-primary">{cert.provider}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{cert.date}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-3">
                  <div className="text-sm font-medium text-muted-foreground">Skills Learned:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + skillIndex * 0.1 }}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-md mb-4">Committed to Excellence</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These certifications represent my dedication to continuous learning and staying current 
                with industry best practices and emerging technologies.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
