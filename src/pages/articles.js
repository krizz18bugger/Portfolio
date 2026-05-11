import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

const articles = [
  {
    title: 'Build A Custom Pagination Component In Reactjs From Scratch',
    summary: 'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.',
    readTime: '9 min read',
    image: '/images/articles/pagination component in reactjs.jpg',
    href: '#',
    date: '2023',
  },
  {
    title: 'Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens',
    summary: 'Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen.',
    readTime: '10 min read',
    image: '/images/articles/create loading screen in react js.jpg',
    href: '#',
    date: '2023',
  },
  {
    title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
    summary: 'Learn how to build a reusable custom React hook to handle form inputs and validation errors cleanly and efficiently.',
    readTime: '8 min read',
    image: '/images/articles/form validation in reactjs using custom react hook.png',
    href: '#',
    date: '2023',
  },
  {
    title: 'Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers',
    summary: 'Implement buttery-smooth scrolling in your React applications using modern scroll libraries and native CSS scroll-behavior.',
    readTime: '6 min read',
    image: '/images/articles/smooth scrolling in reactjs.png',
    href: '#',
    date: '2023',
  },
  {
    title: 'Creating An Efficient Modal Component In React Using Hooks And Portals',
    summary: 'Build a reusable, accessible modal component using React Portals and hooks for a clean, efficient approach to overlay UIs.',
    readTime: '7 min read',
    image: '/images/articles/create modal component in react using react portals.png',
    href: '#',
    date: '2023',
  },
  {
    title: 'Build A Fabulous Todo List App With React, Redux And Framer-Motion',
    summary: 'Create a beautiful, animated Todo list application using React, Redux for state management, and Framer Motion for smooth animations.',
    readTime: '11 min read',
    image: '/images/articles/todo list app built using react redux and framer motion.png',
    href: '#',
    date: '2023',
  },
  {
    title: 'Redux Simplified: A Beginner\'s Guide For Web Developers',
    summary: 'Understand Redux from the ground up — actions, reducers, store, and how they all connect in a real React application.',
    readTime: '9 min read',
    image: '/images/articles/What is Redux with easy explanation.png',
    href: '#',
    date: '2023',
  },
  {
    title: 'What Is Higher Order Component (HOC) In React?',
    summary: 'Demystify Higher Order Components in React — learn what they are, when to use them, and how to write your own.',
    readTime: '7 min read',
    image: '/images/articles/What is higher order component in React.jpg',
    href: '#',
    date: '2023',
  },
]

export default function Articles({ mode }) {
  const isDark = mode === 'dark'
  const cardBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.85)'
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'

  return (
    <>
      <Head>
        <title>Articles | Krishnamoorthi R</title>
        <meta name="description" content="Tech articles and guides on React.js, frontend development and web technologies by Krishnamoorthi R." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <AnimatedText text="Words Can Change The World!" />
        <p style={{ marginTop: '1rem', opacity: 0.65, lineHeight: 1.7, maxWidth: '560px', marginBottom: '1rem' }}>
          A collection of articles on React.js, frontend patterns, and web development best practices.
        </p>
        <div className="divider" style={{ marginBottom: '3rem' }} />

        {/* Featured large article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex', gap: '2rem', flexWrap: 'wrap',
            marginBottom: '3rem',
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: 'var(--border-radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div style={{ flex: '0 1 380px', position: 'relative', minHeight: '240px' }}>
            <Image src={articles[0].image} alt={articles[0].title} fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ flex: '1 1 280px', padding: '2rem 2rem 2rem 0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="tag" style={{ marginBottom: '0.75rem', width: 'fit-content' }}>Featured Article</span>
            <h2 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{articles[0].title}</h2>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.75, marginBottom: '1rem' }}>{articles[0].summary}</p>
            <span style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 600 }}>⏱ {articles[0].readTime}</span>
          </div>
        </motion.div>

        {/* Grid of remaining articles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {articles.slice(1).map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.3s ease',
                display: 'flex', flexDirection: 'column',
              }}
              className="article-card"
            >
              <div style={{ position: 'relative', height: '180px', flexShrink: 0 }}>
                <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: isDark
                    ? 'linear-gradient(to bottom, transparent 50%, rgba(27,27,27,0.9) 100%)'
                    : 'linear-gradient(to bottom, transparent 50%, rgba(245,245,245,0.85) 100%)',
                }} />
              </div>
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.97rem', lineHeight: 1.45, marginBottom: '0.65rem' }}>{article.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.65, opacity: 0.7, flex: 1, marginBottom: '1rem' }}>{article.summary}</p>
                <span style={{ fontSize: '0.78rem', opacity: 0.5, fontWeight: 600 }}>⏱ {article.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-teal) !important;
          border-color: var(--color-primary-dark) !important;
        }
      `}</style>
    </>
  )
}
