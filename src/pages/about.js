import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

const experiences = [
  {
    role: 'Front-end Developer Intern',
    company: 'ASM Academy',
    period: 'Feb 2026 – Apr 2026',
    location: 'Nilakottai, Dindigul',
    points: [
      'Engineered a responsive Venue Booking Web Application using React with modular and scalable frontend architecture.',
      'Developed dynamic UI components to streamline venue search, selection, and booking processes.',
      'Improved application responsiveness and performance through component optimization and efficient state management.',
      'Worked in an internship environment to translate project requirements into functional frontend features and intuitive user experiences.',
    ],
  },
]

const education = [
  {
    degree: 'MCA (CGPA: 8.6)',
    school: 'The Gandhigram Rural Institute – DTBU',
    period: 'Jul 2024 – May 2026',
    location: 'Dindigul, Tamil Nadu',
  },
  {
    degree: 'B.Sc. Mathematics (CGPA: 8.6)',
    school: 'The Gandhigram Rural Institute – DTBU',
    period: 'Sep 2021 – May 2024',
    location: 'Dindigul, Tamil Nadu',
  },
  {
    degree: 'Class XII (93%)',
    school: 'S.R Vidhyalaya Matriculation Higher Secondary School',
    period: 'Jun 2020 – Apr 2021',
    location: 'Trichy, Tamil Nadu',
  },
  {
    degree: 'Class X (93%)',
    school: 'SFS Matriculation High School',
    period: 'Jun 2018 – Apr 2019',
    location: 'Dindigul, Tamil Nadu',
  },
]

const skills = {
  'Programming Languages': ['Python', 'Java', 'R', 'SQL'],
  'Web Technologies': ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  'Libraries & Tools': ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'NLTK', 'Git', 'GitHub'],
  'Frameworks': ['Node.js', 'Express.js', 'Supabase', 'Vite', 'TailwindCSS'],
}

const interests = [
  'Full Stack Web Development', 'Frontend Development',
  'Database Systems', 'REST API Development',
  'Machine Learning', 'Deep Learning',
]

export default function About({ mode }) {
  const isDark = mode === 'dark'
  const cardStyle = {
    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
    borderRadius: 'var(--border-radius-lg)',
    padding: '1.75rem',
    boxShadow: 'var(--shadow-card)',
  }

  return (
    <>
      <Head>
        <title>About | Krishnamoorthi R</title>
        <meta name="description" content="Learn about Krishnamoorthi R – Frontend Developer. Background, skills, experience, and education." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* ─── Header ─── */}
        <AnimatedText text="Passion Fuels Purpose!" />
        <div className="divider" style={{ marginTop: '1.5rem' }} />

        {/* ─── Bio + Photo ─── */}
        <div style={{
          display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '4rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1 1 320px' }}
          >
            <p style={{ lineHeight: 1.9, opacity: 0.8, marginBottom: '1rem' }}>
              Hi, I&apos;m <strong>Krishnamoorthi R</strong>, a Frontend Developer with strong expertise in
              HTML, CSS, JavaScript, and React.js. I&apos;m experienced in building responsive and
              user-centric web interfaces with a focus on UI optimization, cross-browser
              compatibility, and API integration.
            </p>
            <p style={{ lineHeight: 1.9, opacity: 0.8, marginBottom: '1rem' }}>
              I&apos;m passionate about creating high-performance, accessible web applications and
              improving user experience through clean and efficient design. My academic background
              in Mathematics and Computer Applications gives me a strong analytical foundation.
            </p>
            <p style={{ lineHeight: 1.9, opacity: 0.8 }}>
              I believe in solving real-world problems through technology – whether it&apos;s a
              full-stack venue booking platform, an IoT animal detection system, or a deep
              learning brain tumor classifier, I bring commitment and creativity to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: '0 0 260px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '240px', height: '300px', borderRadius: 'var(--border-radius-xl)',
              overflow: 'hidden', position: 'relative',
              background: 'var(--gradient-primary)',
              padding: '3px',
              boxShadow: 'var(--shadow-primary)',
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: 'calc(var(--border-radius-xl) - 3px)',
                overflow: 'hidden', position: 'relative',
              }}>
                <Image
                  src="/images/profile/krishnamoorthi.jpg"
                  alt="Krishnamoorthi R"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Skills ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
            Technical Skills
          </h2>
          <div className="divider" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginTop: '1.5rem',
          }}>
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                style={cardStyle}
              >
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--color-primary)' }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Experience ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
            Experience
          </h2>
          <div className="divider" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                ...cardStyle,
                marginBottom: '1.25rem',
                borderLeft: '4px solid var(--color-primary)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem' }}>{exp.role}</h3>
                  <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.92rem' }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.82rem', opacity: 0.6, fontWeight: 500 }}>{exp.period}</p>
                  <p style={{ fontSize: '0.82rem', opacity: 0.5 }}>{exp.location}</p>
                </div>
              </div>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '0.75rem' }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ fontSize: '0.9rem', lineHeight: 1.75, opacity: 0.78, marginBottom: '0.35rem' }}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Education ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
            Education
          </h2>
          <div className="divider" />
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem', marginTop: '1.25rem'
          }}>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{ ...cardStyle, borderTop: '3px solid var(--color-primary-dark)' }}
              >
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>{edu.degree}</h3>
                <p style={{ color: 'var(--color-primary)', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.25rem' }}>{edu.school}</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.55 }}>{edu.period}</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.45 }}>{edu.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Certifications ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
            Certifications &amp; Achievements
          </h2>
          <div className="divider" />
          {[
            'Legacy Responsive Web Design V8: Responsive Web Design certification from freeCodeCamp – HTML5, CSS & accessible layouts.',
            'Full Stack Web Development: Completed 2-day live training program on Full Stack Web Development.',
            'Paper Presentation: Presented "Enhanced Brain Tumor Classification with DenseNet-121" at NCACDS-2025.',
            'Students\' Mentor of YSSP-2025: Trained and encouraged school students to develop an IoT-based Smart Dustbin.',
          ].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                padding: '1rem 1.25rem', marginBottom: '0.75rem',
                ...cardStyle,
              }}
            >
              <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem', flexShrink: 0 }}>🏆</span>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.82 }}>{cert}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Areas of Interest ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
            Areas of Interest
          </h2>
          <div className="divider" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            {interests.map(item => (
              <span key={item} className="tag" style={{ fontSize: '0.88rem', padding: '0.45rem 1.1rem' }}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
