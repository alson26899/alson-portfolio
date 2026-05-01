import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-6 right-6 z-50
        bg-white dark:bg-slate-900
        text-slate-900 dark:text-white
        border border-slate-300 dark:border-slate-700
        shadow-lg
        p-4 rounded-2xl
        hover:scale-105
        transition-all duration-300
      "
    >
      {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  )
}