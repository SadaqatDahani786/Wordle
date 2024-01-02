import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Components/Header'

/*
 ** **
 ** ** ** Test Suite [Header Commponent]
 ** **
 */
describe('<Header/> Component', () => {
   it('Should render in the DOM', () => {
      const { getByTestId } = render(<Header data-testid="header" />)

      expect(getByTestId('header')).toBeInTheDocument()
   })
})
