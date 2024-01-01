import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import FloatButton from '../Components/FloatButton'
import { act } from 'react-dom/test-utils'

/*
 ** **
 ** ** ** Test Suite [FloatButton Commponent]
 ** **
 */
describe('<FloatButton/> Component', () => {
   //1) Test -> Render in the UI.
   it('Should render in the DOM', () => {
      const { getByTestId } = render(<FloatButton data-testid="float-button" />)

      expect(getByTestId('float-button')).toBeInTheDocument()
   })

   //2) Test -> Handle the onClick event.
   it('Handle the onClick event', () => {
      let ran = false

      const { getByTestId } = render(
         <FloatButton
            onClick={() => {
               ran = true
            }}
            data-testid="float-button"
         />,
      )

      act(() => {
         getByTestId('float-button').click()
      })

      expect(ran).toBe(true)
   })
})
