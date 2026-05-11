import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'

const projects = [
  {
    title: 'Venue Booking Web App',
    period: 'Feb 2026 – Apr 2026',
    type: 'Web Development',
    tags: ['React', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL'],
    image: '/images/projects/agency-website-cover-image.jpg',
    description:
      'A full-stack venue booking application with role-based modules for Owner, Admin, and Customer. Built responsive UI using React (Vite) and TailwindCSS, with RESTful APIs using Node.js and Express. Features authentication, revenue tracking dashboards, and scalable media storage.',
    github: 'https://github.com/krizz18bugger/Venue-Booking-Web-Application.git',
    featured: true,
  },
  {
    title: 'Forest Roadside Animal Collision Avoidance System',
    period: 'Jan 2025 – Apr 2025',
    type: 'IoT Project',
    tags: ['OpenCV', 'NodeMCU', 'ESP32-CAM', 'Python'],
    image: '/images/projects/IoT-img.jpg',
    description:
      'An IoT-based real-time animal detection system for forest roads. Used OpenCV and ESP32-CAM to stream video and detect animals, activating alert LEDs instantly on detection.',
    github: 'https://github.com/krizz18bugger',
  },
  {
    title: 'Brain Tumor Classification (DenseNet-121)',
    period: 'Mar 2025 – Apr 2025',
    type: 'Deep Learning',
    tags: ['TensorFlow', 'Scikit-learn', 'DenseNet-121', 'Python'],
    image: '/images/projects/deep-learning.jpg',
    description:
      'Deep learning model for brain tumor classification achieving 88% accuracy, AUC-ROC of 0.98, with strong precision and recall across all classes.',
    github: 'https://github.com/krizz18bugger/Brain-Tumor-Classification.git',
  },
  {
    title: 'Webpages for Seva NGO',
    period: 'Oct 2024 – Nov 2024',
    type: 'Web Development',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/images/projects/web-dev.jpg',
    description:
      'Responsive webpages for Seva NGO with user-friendly layouts and interactive JavaScript elements to enhance engagement and cross-browser compatibility.',
    github: 'https://github.com/krizz18bugger/Seva-Web-Page.git',
  },
  {
    title: 'Computational Group Theory with Python',
    period: 'Dec 2023 – Apr 2024',
    type: 'Algebra / Math',
    tags: ['Python', 'Algebra', 'Algorithms'],
    image: '/images/projects/math.jpg',
    description:
      'Implemented algorithms to compute and analyze algebraic group structures and subgroup relationships using Python mathematical programming.',
    github: 'https://github.com/krizz18bugger',
  },
  {
    title: 'React Portfolio Website',
    period: 'May 2026',
    type: 'Web Development',
    tags: ['Next.js', 'React', 'Framer Motion', 'CSS'],
    image: '/images/projects/portfolio-cover-image.jpg',
    description:
      'A professional developer portfolio website built with Next.js and Framer Motion featuring smooth animations, dark mode, and a fully responsive design.',
    github: 'https://github.com/krizz18bugger/Portfolio.git',
  },
]

export default function Projects({ mode }) {
  const isDark = mode === 'dark'
  const cardBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.85)'
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'

  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <>
      <Head>
        <title>Projects | Krishnamoorthi R</title>
        <meta name="description" content="Portfolio of projects by Krishnamoorthi R including web apps, IoT systems, and deep learning models." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <AnimatedText text="Imagination Trumps Knowledge!" />
        <p style={{ marginTop: '1rem', opacity: 0.65, lineHeight: 1.7, maxWidth: '560px', marginBottom: '1rem' }}>
          Projects spanning web development, IoT, and machine learning — each solving a real-world problem with code.
        </p>
        <div className="divider" style={{ marginBottom: '3rem' }} />

        {/* Featured */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex', gap: '0', flexWrap: 'wrap',
              marginBottom: '3rem',
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: 'var(--border-radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-primary)',
            }}
          >
            <div style={{ flex: '0 1 420px', position: 'relative', minHeight: '260px' }}>
              <Image src={featured.image} alt={featured.title} fill style={{ objectFit: 'cover' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(182,62,150,0.55) 0%, rgba(88,230,217,0.35) 100%)',
              }} />
              <span style={{
                position: 'absolute', top: '1rem', left: '1rem',
                background: 'var(--color-primary)', color: '#fff',
                padding: '0.3rem 0.8rem', borderRadius: '9999px',
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em',
              }}>
                ⭐ Featured
              </span>
            </div>
            <div style={{ flex: '1 1 280px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.78rem', opacity: 0.5, marginBottom: '0.4rem', display: 'block' }}>{featured.period} · {featured.type}</span>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: 1.35 }}>{featured.title}</h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, opacity: 0.78, marginBottom: '1.25rem' }}>{featured.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
                {featured.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={featured.github} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)', width: 'fit-content' }}>
                <GithubIcon style={{ width: '1.2rem' }} /> View on GitHub
              </a>
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                display: 'flex', flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
              className="project-card"
            >
              <div style={{ position: 'relative', height: '185px', flexShrink: 0 }}>
                <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: isDark
                    ? 'linear-gradient(to bottom, transparent 45%, rgba(27,27,27,0.9) 100%)'
                    : 'linear-gradient(to bottom, transparent 45%, rgba(240,240,240,0.88) 100%)',
                }} />
              </div>
              <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.75rem', opacity: 0.48, marginBottom: '0.3rem' }}>{project.period} · {project.type}</p>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.4, marginBottom: '0.6rem' }}>{project.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.65, opacity: 0.72, flex: 1, marginBottom: '0.9rem' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem', marginBottom: '0.9rem' }}>
                  {project.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.72rem' }}>{t}</span>)}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.38rem', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-primary)', width: 'fit-content' }}>
                  <GithubIcon style={{ width: '1rem', color: 'currentColor' }} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-primary) !important;
          border-color: var(--color-primary) !important;
        }
      `}</style>
    </>
  )
}
