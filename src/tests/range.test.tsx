import { describe, expect, it } from 'vitest'
import range from '../Utils/range'

/*
 ** **
 ** ** ** Test Suite [range Func]
 ** **
 */
describe('Utility function [range]', () => {
   const r1 = range(2, 6, 1)
   const r2 = range(2, 10, 2)
   const r3 = range(0, 5)

   it('Should return the correct length of items', () => {
      expect(r1).toHaveLength(4)
      expect(r2).toHaveLength(4)
      expect(r3).toHaveLength(5)
   })

   it('Should return the correct items in array', () => {
      expect(r1).toStrictEqual([2, 3, 4, 5])
      expect(r2).toStrictEqual([2, 4, 6, 8])
      expect(r3).toStrictEqual([0, 1, 2, 3, 4])
   })
})
