'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <h1 style={styles.logo}>ModernSite</h1>
          <div style={styles.navLinks}>
            <a href="#features" style={styles.link}>Features</a>
            <a href="#about" style={styles.link}>About</a>
            <a href="#contact" style={styles.link}>Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Welcome to the Future</h1>
          <p style={styles.heroSubtitle}>Building amazing experiences with modern web technology</p>
          <button style={styles.ctaButton} onClick={() => setCount(count + 1)}>
            Get Started {count > 0 && `(${count})`}
          </button>
        </section>

        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Features</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.icon}>⚡</div>
              <h3 style={styles.cardTitle}>Lightning Fast</h3>
              <p style={styles.cardText}>Optimized performance for the best user experience</p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>🎨</div>
              <h3 style={styles.cardTitle}>Beautiful Design</h3>
              <p style={styles.cardText}>Modern, clean aesthetics that users love</p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>📱</div>
              <h3 style={styles.cardTitle}>Responsive</h3>
              <p style={styles.cardText}>Perfect on any device, any screen size</p>
            </div>
          </div>
        </section>

        <section id="about" style={styles.sectionAlt}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p style={styles.aboutText}>
            We're passionate about creating exceptional web experiences that combine cutting-edge
            technology with intuitive design. Our mission is to build products that people love to use.
          </p>
        </section>

        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" rows="4" style={styles.textarea}></textarea>
            <button type="submit" style={styles.submitButton}>Send Message</button>
          </form>
        </section>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2025 ModernSite. Built with Next.js and deployed on Vercel.</p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#1a1a2e',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    margin: 0,
    fontSize: '1.5rem',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s',
    fontSize: '1rem',
  },
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '8rem 2rem',
    textAlign: 'center',
    color: '#fff',
  },
  heroTitle: {
    fontSize: '3.5rem',
    margin: '0 0 1rem 0',
    fontWeight: '700',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0',
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: '#fff',
    color: '#667eea',
    border: 'none',
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  section: {
    padding: '5rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  sectionAlt: {
    padding: '5rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    backgroundColor: '#f7f9fc',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1a1a2e',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#1a1a2e',
  },
  cardText: {
    color: '#666',
    lineHeight: '1.6',
  },
  aboutText: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#444',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  textarea: {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#667eea',
    color: '#fff',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  },
  footer: {
    backgroundColor: '#1a1a2e',
    padding: '2rem',
    marginTop: 'auto',
    textAlign: 'center',
  },
  footerText: {
    color: '#fff',
    margin: 0,
    opacity: 0.8,
  },
}
