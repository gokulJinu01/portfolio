import React, { useState, useEffect, useRef } from "react";
import "../styles/ContactForm.css";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheck, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  
  useEffect(() => {
    const sectionNode = sectionRef.current;
    
    // Create a separate observer for the social icons in the contact section
    const socialIconsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Hide the fixed social links when contact social icons are visible
          const socialLinksVertical = document.querySelector('.social-links-vertical');
          if (socialLinksVertical) {
            socialLinksVertical.classList.add('hide-social-links');
          }
        } else {
          // Show the fixed social links when contact social icons are not visible
          const socialLinksVertical = document.querySelector('.social-links-vertical');
          if (socialLinksVertical) {
            socialLinksVertical.classList.remove('hide-social-links');
          }
        }
      },
      { threshold: 0.7 } // Higher threshold to ensure social icons are well visible
    );
    
    // Main section observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          
          // Animate the section title characters with a subtle delay
          const titleChars = document.querySelectorAll('.contact .section-title-char');
          titleChars.forEach((char, index) => {
            setTimeout(() => {
              char.classList.add('char-visible');
            }, 100 * index);
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionNode) {
      observer.observe(sectionNode);
      
      // Observe the social icons container specifically
      const socialContactElement = sectionNode.querySelector('.social-contact');
      if (socialContactElement) {
        socialIconsObserver.observe(socialContactElement);
      }
    }
    
    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
        
        const socialContactElement = sectionNode.querySelector('.social-contact');
        if (socialContactElement) {
          socialIconsObserver.unobserve(socialContactElement);
        }
        
        // Ensure social links are visible when component unmounts
        const socialLinksVertical = document.querySelector('.social-links-vertical');
        if (socialLinksVertical) {
          socialLinksVertical.classList.remove('hide-social-links');
        }
      }
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // EmailJS configuration
    const serviceId = 'service_aswwbfn';
    const templateId = 'template_gwe0iwh';
    const publicKey = 'nA45RNzSyaNMH7WjZ';
    
    // Send email using EmailJS
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 3000);
      }, (error) => {
        console.log('Failed to send email:', error.text);
        setIsSubmitting(false);
        setSubmitError(true);
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      });
  };

  // Split the title into individual characters for animation
  const renderAnimatedTitle = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="section-title-char">
        {char}
      </span>
    ));
  };

  return (
    <section className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">
            {renderAnimatedTitle("Get In Touch")}
          </h2>
          <div className="section-underline"></div>
          <p className="contact-intro"><strong>Let's discuss your next project.</strong> Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:gokuljinu12@gmail.com" className="contact-link">gokuljinu12@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Toronto, Canada</p>
                </div>
              </div>
              
              <div className="social-contact">
                <h3>Connect With Me</h3>
                <div className="social-icons">
                  <a href="https://github.com/gokulJinu01" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/gokul-jinu-627695223/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.instagram.com/gokul_jinu/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-container">
            {isSubmitted ? (
              <div className="success-message">
                <FaCheck className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="What would you like to talk about?" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Write your message here..." 
                    rows="6" 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="spin-icon" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="send-icon" />
                      Send Message
                    </>
                  )}
                </button>
                {submitError && (
                  <div className="error-message">
                    <p>Failed to send message. Please try again or contact me directly at gokuljinu12@gmail.com</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
