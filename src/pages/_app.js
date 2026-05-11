import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) setMode(saved)
  }, [])

  const handleSetMode = (newMode) => {
    setMode(newMode)
    localStorage.setItem('portfolio-theme', newMode)
  }

  return (
    <Layout mode={mode} setMode={handleSetMode}>
      <Component {...pageProps} mode={mode} />
    </Layout>
  )
}
