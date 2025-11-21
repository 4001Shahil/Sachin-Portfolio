import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../constants';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text">{personalInfo.name}</h3>
            <p>{personalInfo.description}</p>
            
            <div className="about-details">
              <p>I specialize in creating modern, responsive web applications with a focus on user experience and performance. My journey in software development has equipped me with a diverse skill set and a problem-solving mindset.</p>
              <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and continuously learning to stay ahead in this ever-evolving field.</p>
            </div>

            <a href={`mailto:${personalInfo.email}`} className="btn-contact">
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            className="skills-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
