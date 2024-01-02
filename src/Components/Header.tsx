import styled from 'styled-components'
import useTheme from '../Hooks/useTheme'
import FloatButton from './FloatButton'

/*
 ** **
 ** ** ** Styled Components
 ** **
 */
//Header
const HeaderStyled = styled.header`
   height: 64px;
   background: ${({ theme }) => theme.secondary.main};
`

//Navigation
const Nav = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${({ theme }) => theme.primary.main};
`

//Button Group
const ButtonsGroup = styled.div`
   display: flex;
   gap: 4px;
`

//Logo
const Logo = styled.h1`
   margin: 0 auto;
   color: inherit;
`

/*
 ** ** == ==================================================
 ** ** ** Interface [HeaderProps]
 ** ** == ==================================================
 */
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
   children?: React.ReactNode
}

/*
 ** ** == ==================================================
 ** ** ** Component [Header]
 ** ** == ==================================================
 */
function Header({ ...delegated }: HeaderProps) {
   /*
    ** **
    ** ** ** State & Hooks
    ** **
    */
   const { theme, darkMode, toggleDarkMode } = useTheme()

   return (
      <HeaderStyled theme={theme.palette} {...delegated}>
         <Nav theme={theme.palette}>
            <Logo>Wordle</Logo>
            <ButtonsGroup>
               <FloatButton
                  key={darkMode.toString() + 1}
                  size="MD"
                  icon={'help-circle'}
               />
               <FloatButton
                  key={darkMode.toString() + 2}
                  size="MD"
                  icon={'award'}
               />
               <FloatButton
                  key={darkMode.toString() + 3}
                  size="MD"
                  icon={'settings'}
               />
               <FloatButton
                  key={darkMode.toString()}
                  size="MD"
                  icon={!darkMode ? 'moon' : 'sun'}
                  onClick={() => toggleDarkMode()}
               />
            </ButtonsGroup>
         </Nav>
      </HeaderStyled>
   )
}

export default Header
