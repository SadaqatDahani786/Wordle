import { describe, it, expect, beforeEach } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'
import useTheme from '../Hooks/useTheme'
import appTheme from '../Theme/appTheme'

/*
 ** **
 ** ** ** Test Suite [useLocalStorage Hook]
 ** **
 */
describe('useTheme Hook', () => {
   let result = renderHook(useTheme).result

   beforeEach(() => {
      result = renderHook(useTheme).result
   })

   //1) Test -> return the app theme
   it('Should return the app default theme', () => {
      expect(result.current.theme.palette).toMatchObject(appTheme.palette.light)
   })

   //2) Test -> toggle the dark mode
   it('Should be able to togle the dark mode', () => {
      const darkMode = result.current.darkMode

      act(() => {
         result.current.toggleDarkMode()
      })

      expect(result.current.darkMode).toBe(!darkMode)
   })

   //3) Test -> toggle the dark mode and get dark theme
   it('Should return the app dark theme after toggling dark mode', () => {
      act(() => {
         result.current.toggleDarkMode()
      })

      expect(result.current.theme.palette).toMatchObject(appTheme.palette.dark)
   })
})
