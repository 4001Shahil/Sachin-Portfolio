import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Configure EmailJS with your credentials
    // Get your credentials from https://www.emailjs.com/
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
    //   .then(() => {
    //     setStatus('success');
    //     setFormData({ name: '', email: '', message: '' });
    //     setTimeout(() => setStatus(''), 3000);
    //   })
    //   .catch(() => {
    //     setStatus('error');
    //     setTimeout(() => setStatus(''), 3000);
    //   });

    // Temporary success simulation (remove when EmailJS is configured)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contact Me!</h2>
        
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Get In Touch</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope size={24} />
                <div>
                  <h4>Email</h4>
                  <p>sachin@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt size={24} />
                <div>
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="status-message success">Message sent successfully! 🎉</p>
            )}
            {status === 'error' && (
              <p className="status-message error">Failed to send message. Please try again.</p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
