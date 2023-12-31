import { useEffect, useState } from 'react'
import appTheme from '../Theme/appTheme'
import useLocalStorage from './useLocalStorage'

/*
 ** ** == ==================================================
 ** ** ** Hook [useTheme]
 ** ** == ==================================================
 */
const useTheme = () => {
   /*
    ** **
    ** ** ** State
    ** **
    */
   const [theme, setTheme] = useState({ palette: appTheme.palette.light })
   const [darkMode, setDarkMode] = useState(false)
   const { storedItems, addItem } = useLocalStorage()

   /*
    ** **
    ** ** ** Toggle theme when darkmode changes
    ** **
    */
   useEffect(() => {
      setTheme(
         storedItems['dark-mode'] === 'true'
            ? { palette: appTheme.palette.dark }
            : { palette: appTheme.palette.light },
      )
   }, [darkMode, storedItems])

   /*
    ** **
    ** ** ** Toggle dark mode
    ** **
    */
   const toggleDarkMode = (): void => {
      setDarkMode((mode) => {
         addItem('dark-mode', mode ? 'false' : 'true')
         console.log(storedItems)
         return !mode
      })
   }

   return { theme, toggleDarkMode }
}

export default useTheme
