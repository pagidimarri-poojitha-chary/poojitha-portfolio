"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Code, Database, ExternalLink, Github, Monitor } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [

    {
      title: "ZapReach",
      description: "A lightning-fast email marketing platform with real-time analytics, automated campaigns, and intelligent targeting.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "ai-tools-for-video-creation.jpg",
      liveUrl: "https://zapreach.icu",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "RPS-48 Fashion",
      description: "E-commerce platform for a fashion brand, featuring product showcases, shopping cart functionality, and secure payment integration.",
      technologies: ["React", "Python", "Flask", "Judge0 API", "Docker"],
      image: "Geometric Fashion Design Display.png",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      liveUrl: "https://rps-48-fashion.vercel.app",
      icon: Code,
      gradient: "from-green-500 to-teal-600"
    },



    // {
    //   title: "Dragon Sino Group",
    //   description: "Worked as a Full Stack developer At Dragon Sino Group. Created a fully functional MERN Stack Web Application. Having responsive behaviour, smooth touch UI with API Integration. This is a Chinese Company, I was glad to work with them in the United Kingdom.",
    //   technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL","CSS3","MUI","SEO"],
    //   image: "2.png",
    //   liveUrl: "https://www.dragonsino.com/",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   icon: Zap,
    //   gradient: "from-orange-500 to-red-600",
    // },
          {
      title: "THE KOLORADO PAINTS",
      description: "Built The Kolorado Paints site using Next.js, React, Tailwind CSS, and responsive design for an engaging, mobile-friendly experience.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "3.png",
      liveUrl: "https://thekoloradopaints.com/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },

        {
      title: "TechnoKraft",
      description: "Developed the TTS website using Next.js, React, Tailwind CSS, and modern responsive design practices. Implemented smooth scrolling, interactive elements, and optimized performance for an engaging user experience.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "4.png",
      liveUrl: "https://tts.net.in/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },

    //     {
    //   title: "BEST GST Course",
    //   description: "Created the Best GST Course website using Next.js, React, Tailwind CSS, and responsive design principles. Focused on delivering a seamless user experience with fast load times, intuitive navigation, and mobile optimization.",
    //   technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
    //   image: "05.png",
    //   liveUrl: "https://www.bestgstcourse.com/",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   icon: Zap,
    //   gradient: "from-orange-500 to-red-600",
    // },




     {
      title: "Dragon Sino Group",
      description: "Worked as a Full Stack developer At Dragon Sino Group. Created a fully functional MERN Stack Web Application. Having responsive behaviour, smooth touch UI with API Integration. This is a Chinese Company, I was glad to work with them in the United Kingdom.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL","CSS3","MUI","SEO"],
      image: "2.png",
      liveUrl: "https://www.dragonsino.com/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },

        {
      title: "Affinix Digital",
      description: "Developed the Affinix Digital website using Next.js, React, Tailwind CSS, and responsive design techniques. Ensured a visually appealing and user-friendly interface with optimized performance across all devices.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "6.png",
      liveUrl: "https://affinixdigital.com/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },


    //     {
    //   title: "Octane Apps",
    //   description: "A lightning-fast email marketing platform with real-time analytics, automated campaigns, and intelligent targeting.",
    //   technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
    //   image: "7.png",
    //   liveUrl: "https://octaneapps.com/",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   icon: Zap,
    //   gradient: "from-orange-500 to-red-600",
    // },


        {
      title: "Dr.Manisha's Yoga Institute",
      description: "Built Dr. Manisha’s Yoga Institute site using Next.js, React, Tailwind CSS, and responsive design for a seamless, mobile-first user experience.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "8.png",
      liveUrl: "https://www.drmanishasyogainstitute.com/?ref=localhost",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },


        {
      title: "Anandlok Ayurveda",
      description: "Developed the Anandlok Ayurveda & Panchakarma Hospital website using Next.js, React, Tailwind CSS, and a mobile-first responsive design to showcase holistic healthcare services in a modern, user-friendly format.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "9.png",
      liveUrl: "https://www.anandlokayurveda.com/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },


        {
      title: "News-o-Pedia",
      description: "Built News-O-Pedia using Vue.js and deployed it as a fast, responsive Jamstack news site on Netlify.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "10.png",
      liveUrl: "https://news-o-pedia.netlify.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },

    //     {
    //   title: "Select Text to Speech Chrome extention",
    //   description: "A simple chrome extension where you can select text, then right click and then select the option 'Read aloud' and you can hear the final audio.",
    //   technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
    //   image: "11.png",
    //   liveUrl: "https://zapreach.icu",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   icon: Zap,
    //   gradient: "from-orange-500 to-red-600",
    // },

        {
      title: "RESTRO - A Restaurant Management System",
      description: "A simple and beautiful Restaurent Website made with Pure HTML, CSS and JS. With some beautiful Animation and data fetching using API.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "12.png",
      liveUrl: "https://fynd-academy-mevn.vercel.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },


    //     {
    //   title: "Chakra",
    //   description: "A lightning-fast email marketing platform with real-time analytics, automated campaigns, and intelligent targeting.",
    //   technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
    //   image: "13.png",
    //   liveUrl: "https://zapreach.icu",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   icon: Zap,
    //   gradient: "from-orange-500 to-red-600",
    // },

         {
      title: "Rural-Company(Urban clone)",
      description: "A clone of the Urban app tailored for rural markets, focusing on local services, user-friendly design, and efficient delivery systems.",
      technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
      image:"Rural Company Services and Worker Showcase.png",
      liveUrl: "https://rural-company.vercel.app",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      },

        {
      title: "YouTube-Clone",
      description: "A full-stack clone of the YouTube app, implementing core features like user authentication, video playback, and comment sections.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "14.png",
      liveUrl: "https://youtube-clone-06.netlify.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },
        {
      title: "SPACE TALKS",
      description: "This is a MERN Website. I have created this website using ReactJs, Material-UI, Nodejs, CSS, Express and MongoDB. This website is a platform for people to share their love and knowledge about space, universe, stars, galaxies and other planets with people from all over.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "15.png",
      liveUrl: "https://space-talks.netlify.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },

    //     {
    //   title: "ZapReach",
    //   description: "A lightning-fast email marketing platform with real-time analytics, automated campaigns, and intelligent targeting.",
    //   technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
    //   image: "16.png",
    //   liveUrl: "https://zapreach.icu",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   icon: Zap,
    //   gradient: "from-orange-500 to-red-600",
    // },

        {
      title: "Movie webApp",
      description: "A Simple Movie App Using Pure ReactJs - made for just revision purpose",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "17.png",
      liveUrl: "https://react-movie-app-yash.netlify.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },

        {
      title: "Complete React Website",
      description: "I made this whole website from scratch with latest versions of React. This Complete Demo Website is Made using ReactJs, HTML, CSS. This website is a complete demo website which includes all the components of ReactJs.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "19.png",
      liveUrl: "https://reactwebsite-3b247.web.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },

        {
      title: "Wedding Invitation Website",
      description: "A beautiful and elegant wedding invitation website made with ReactJs, HTML, CSS and JavaScript. This website is a perfect way to invite your friends and family to your wedding in a modern and stylish way.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "20.png",
      liveUrl: "https://harshal-nandani.web.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },

    //     {
    //   title: "ZapReach",
    //   description: "A lightning-fast email marketing platform with real-time analytics, automated campaigns, and intelligent targeting.",
    //   technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
    //   image: "20.png",
    //   liveUrl: "https://zapreach.icu",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   icon: Zap,
    //   gradient: "from-orange-500 to-red-600",
    // },



    {
      title: "The Coder Companion",
      description: "An intelligent AI-powered coding assistant that helps developers write better code, debug issues, and learn new technologies.",
      technologies: ["React", "Node.js", "OpenAI API", "TypeScript", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
      liveUrl: "https://codecompanion.ai/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Brain,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Code Watch",
      description: "Real-time code monitoring and performance analytics dashboard. Track your applications' health and get instant alerts.",
      technologies: ["React", "Python", "Flask", "Judge0 API", "Docker"],
      image: "https://www.shutterstock.com/image-photo/ai-artificial-intelligence-iot-internet-600nw-1940780935.jpg",
      liveUrl: "https://www.codewatchr.com/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Code,
      gradient: "from-green-500 to-teal-600",
    },
        { title: "Arcotindia",
      description: "Built and launched a corporate website for a startup, focusing on professional branding, UI/UX, and reliable deployment.",
      technologies: ["React", "Python", "Flask", "Judge0 API", "Docker"],
      image: "https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?semt=ais_hybrid&w=740&q=80",
      liveUrl: "https://arcotindia.com",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Code,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "AI-Waiter",
      description: "Smart restaurant management system powered by AI. Voice ordering, inventory management, and predictive analytics.",
      technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
      image: "Robot Waiter Serving Gourmet Dish.png",
      liveUrl: "https://kodyrobots.com/food-serving-robot-for-restaurant/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
    },
    // { title: "Arcotindia",
    //   description: "Built and launched a corporate website for a startup, focusing on professional branding, UI/UX, and reliable deployment.",
    //   technologies: ["React", "Python", "Flask", "Judge0 API", "Docker"],
    //   image: "https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?semt=ais_hybrid&w=740&q=80",
    //   liveUrl: "https://arcotindia.com",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   icon: Code,
    //   gradient: "from-green-500 to-teal-600",
    // },
    
    //   title: "RPS-48 Fashion",
    //   description: "E-commerce platform for a fashion brand, featuring product showcases, shopping cart functionality, and secure payment integration.",
    //   technologies: ["React", "Python", "Flask", "Judge0 API", "Docker"],
    //   image: "Geometric Fashion Design Display.png",
    //   // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
    //   liveUrl: "https://rps-48-fashion.vercel.app",
    //   icon: Code,
    //   gradient: "from-green-500 to-teal-600"
    // },
    {
      title: "Paytm-Clone",
      description: "A full-stack clone of the Paytm app, implementing core features like user authentication, wallet management, and transaction history.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image: "ChatGPT Image Sep 3, 2025, 07_47_05 AM.png",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Mecanav",
      description: "Designed and developed a fully functional website showcasing modern UI/UX, responsive design, and seamless deployment for a startup brand.",
      technologies: ["React", "Python", "Flask", "Judge0 API", "Docker"],
      image: "ChatGPT Image Sep 3, 2025, 07_58_48 AM.png",
      liveUrl: "https://mecanav.uk",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Code,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI-Video Transcription Tool",
      description: "An AI-powered tool that transcribes video content into text, enabling easy content repurposing and accessibility.",
      technologies: ["React", "Node.js", "AWS SES", "Redis", "PostgreSQL"],
      image:"Professional with AI Video Transcription Tool.png",
      liveUrl: "https://restream.io",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",},
      {
      title: "Food Industry Web Application",
      description: "A comprehensive web application for the food industry, featuring online ordering, menu management, and customer reviews.",
      technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
      image: "https://media.licdn.com/dms/image/v2/D4E12AQGvEgjresnHHw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721170218272?e=2147483647&v=beta&t=C-nBz3wS5afVkgHqg4O9O-d-4JQt9Pi6vbsRspgz0kQ",
      liveUrl: "https://www.grab.com/sg/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      },
      // {
      // title: "Rural-Company(Urban clone)",
      // description: "A clone of the Urban app tailored for rural markets, focusing on local services, user-friendly design, and efficient delivery systems.",
      // technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
      // image:"Rural Company Services and Worker Showcase.png",
      // liveUrl: "https://rural-company.vercel.app",
      // // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      // icon: Brain,
      // gradient: "from-purple-500 to-pink-600",
      // },
      {
      title: "Smart Pole Dashboard",
      description: "Interactive smart pole dashboard delivering real-time data, analytics, and control in a single unified view.",
      technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
      image: "WhatsApp Image 2025-09-03 at 8.20.28 AM (1).jpeg",
      liveUrl: "https://smartpole-dashboard.vercel.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      },
      {
      title: "Smart Bollard Dashboard",
      description: "Smart bollard dashboard with live status, energy usage, and security alerts in one place.",
      technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
      image: "ChatGPT Image Sep 3, 2025, 08_39_16 AM.png",
      liveUrl: "https://smart-bollard-dashboard-five.vercel.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      },
      {
      title: "ERP + CRM Dashboard",
      description: "A futuristic ERP + CRM dashboard with glassy gradients, interactive charts, and real-time data visualization for energy, IoT, and AI insights",
      technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
      image: "Tablero de Control Vibrante y Moderno.png",
      liveUrl: "https://erp-crm-dashboard.vercel.app/",
      // githubUrl: "https://github.com/pagidimarri-poojitha-chary/",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      },
{
  title: "Smart Bollard Application",
  description: (
    <>
      Intuitive smart bollard application combining monitoring, alerts, and remote commands for enhanced security and control.{" "}
      <span className="text-green-500 font-semibold">IN PROGRESS</span>
    </>
  ),
  technologies: ["React", "Python", "Gemini API", "LangChain", "Firebase"],
  image: "ChatGPT Image Sep 3, 2025, 08_02_38 AM.png",
  icon: Brain,
  gradient: "from-purple-500 to-pink-600",
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting digital experiences that bridge innovation and functionality.
            Each project represents a journey of learning, creativity, and technical excellence.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className={`grid grid-cols-1 xl:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "xl:grid-flow-col-dense" : ""
              }`}
            >
              {/* Info */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? "xl:col-start-2" : ""}`}
                whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Featured Project
                  </span>
                </div>

                <h3 className="heading-md">{project.title}</h3>
                <div className="glass-card p-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="social-link"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="social-link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>

              {/* iMac Mockup */}
              <motion.div
                className={`relative ${index % 2 === 1 ? "xl:col-start-1 xl:row-start-1" : ""}`}
                whileHover={{ scale: 1.05, rotateY: index % 2 === 1 ? -5 : 5 }}
                transition={{ duration: 0.3 }}
              >
<div className="relative mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                  {/* iMac Body */}
                  <div className="relative bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-6 shadow-2xl">
                    {/* Stand */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-b-2xl" />
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 dark:from-gray-500 dark:via-gray-600 dark:to-gray-500 rounded-full" />

                    {/* Screen */}
                    <div className="bg-black rounded-2xl p-2 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 blur-xl -z-10 rounded-3xl`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32 text-center"
        >
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative z-10">
              <h3 className="heading-md mb-6">Ready to Build Your Next Idea?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              <motion.button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
