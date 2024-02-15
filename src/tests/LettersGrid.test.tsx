import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import LettersGrid from '../Components/LettersGrid'

/*
 ** **
 ** ** ** Test Suite [LettersGrid Commponent]
 ** **
 */
describe('<LettersGrid/> Component', () => {
   it('Should render in the DOM', () => {
      const { getByTestId } = render(<LettersGrid data-testid="grid" />)

      const GridComponent = getByTestId('grid')

      expect(GridComponent).toBeInTheDocument()
   })
})
