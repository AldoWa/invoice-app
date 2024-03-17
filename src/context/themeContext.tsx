import React, { createContext, useEffect, useState } from "react";

type ThemeProps = {
  children: React.ReactNode
}

type ThemeContextData = {
  theme: string
  changeTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if(localTheme) {
      setTheme(localTheme);
      document.documentElement.setAttribute('data-mode', localTheme)
      return;
    }

    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-mode', theme)
  }, [theme])

  const changeTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}