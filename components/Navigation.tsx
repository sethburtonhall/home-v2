import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Navigation() {
  const {theme, setTheme} = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }
  return (
    <ul className="flex items-center">
      <Link href="code"><a className="p-6">Code</a></Link>
      <Link href="film"><a className="p-6">Film</a></Link>
      <button onClick={switchTheme}> switch theme</button>
    </ul>
  )
}