import { describe, it, expect, beforeEach } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'
import useLocalStorage from '../Hooks/useLocalStorage'

/*
 ** **
 ** ** ** Test Suite [useLocalStorage Hook]
 ** **
 */
describe('useLocalStorage Hook', () => {
   let result = renderHook(useLocalStorage).result

   beforeEach(() => {
      result = renderHook(useLocalStorage).result
   })

   //1) Test -> add item
   it('Should add item in local storage', () => {
      act(() => {
         result.current.addItem('test-item', 'test-value')
      })

      expect(result.current.storedItems['test-item']).toBe('test-value')
   })

   //2) Test -> remove item
   it('Should remove item from local storage', () => {
      act(() => {
         result.current.addItem('test-item', 'test-value')
         result.current.removeItem('test-item')
      })

      expect(result.current.storedItems['test-item']).toBe(undefined)
   })
})
