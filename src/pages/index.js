import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow, GithubIcon, LinkedInIcon } from '@/components/Icons'

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
  'Python', 'SQL', 'Git', 'GitHub', 'Supabase', 'TensorFlow',
]

export default function Home({ mode }) {
  const isDark = mode === 'dark'

  return (
    <>
      <Head>
        <title>Krishnamoorthi R | Frontend Developer</title>
        <meta name="description" content="Frontend Developer skilled in React.js, HTML, CSS and JavaScript. Building responsive and user-centric web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          gap: '3rem',
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        {/* Decorative blobs */}
        <div
          className="blob blob-pink"
          style={{ width: 400, height: 400, top: '-60px', left: '-120px' }}
        />
        <div
          className="blob blob-teal"
          style={{ width: 300, height: 300, bottom: '0', right: '-60px' }}
        />

        {/* Left – Text */}
        <div style={{ flex: '1 1 340px', zIndex: 1 }}>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              padding: '0.35rem 1rem',
              background: 'rgba(182,62,150,0.12)',
              border: '1px solid rgba(182,62,150,0.3)',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginBottom: '1.25rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Frontend Developer
          </motion.span>

          <AnimatedText
            text="Turning Vision Into Reality With Code & Design."
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              marginTop: '1.5rem',
              lineHeight: 1.8,
              opacity: 0.75,
              maxWidth: '480px',
              fontSize: '1rem',
            }}
          >
            I&apos;m Krishnamoorthi R, a passionate Frontend Developer with expertise in
            React.js, HTML, CSS, and JavaScript. I build responsive, accessible and
            high-performance web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}
          >
            <a
              href="/All-Texts/Resume (3).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary${isDark ? ' light' : ''}`}
              style={{ fontSize: '0.9rem' }}
            >
              Resume <LinkArrow style={{ width: '1rem' }} />
            </a>
            <a
              href="mailto:moorthi18krishna@gmail.com"
              className="btn-outline"
              style={{ fontSize: '0.9rem' }}
            >
              Hire Me
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem', alignItems: 'center' }}
          >
            <a href="https://github.com/krizz18bugger" target="_blank" rel="noopener noreferrer"
              style={{ width: '1.7rem', color: 'currentColor', transition: 'opacity 0.2s' }}>
              <GithubIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              style={{ width: '1.7rem' }}>
              <LinkedInIcon />
            </a>
            <span style={{ fontSize: '0.82rem', opacity: 0.5, marginLeft: '0.25rem' }}>
              6383140771 · moorthi18krishna@gmail.com
            </span>
          </motion.div>
        </div>

        {/* Right – Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          style={{
            flex: '0 1 340px',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              padding: '4px',
              boxShadow: 'var(--shadow-primary)',
            }}
            className="animate-float"
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/profile/developer-pic-1.png"
                alt="Krishnamoorthi R – Frontend Developer"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── SKILLS ─── */}
      <section
        style={{
          padding: '4rem 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="divider" />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '1.5rem',
            }}
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)',
                  color: 'currentColor',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── QUICK NAV CARDS ─── */}
      <section
        style={{
          padding: '4rem 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {[
          { href: '/about', label: 'About Me', desc: 'Learn my story, experience, and education', emoji: '👤' },
          { href: '/projects', label: 'Projects', desc: 'Explore my portfolio of work', emoji: '💼' },
          {/* { href: '/articles', label: 'Articles', desc: 'Read my tech articles and guides', emoji: '📝' }, */}
        ].map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <Link href={item.href}
              style={{
                display: 'block',
                padding: '1.75rem',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.09)',
                background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                boxShadow: 'var(--shadow-card)',
              }}
              className="nav-card"
            >
              <span style={{ fontSize: '2rem' }}>{item.emoji}</span>
              <h3 style={{ fontWeight: 700, margin: '0.75rem 0 0.4rem', fontSize: '1.1rem' }}>{item.label}</h3>
              <p style={{ fontSize: '0.88rem', opacity: 0.6, lineHeight: 1.6 }}>{item.desc}</p>
            </Link>
          </motion.div>
        ))}
      </section>

      <style jsx>{`
        .nav-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary) !important;
          box-shadow: var(--shadow-primary) !important;
        }
      `}</style>
    </>
  )
}
