import { useEffect } from 'react'
import styled from 'styled-components'
import feather from 'feather-icons'
import useTheme from '../Hooks/useTheme'

/*
 ** ** == ==================================================
 ** ** ** Interface [FloatButtonStyledProps]
 ** ** == ==================================================
 */
interface FloatButtonStyledProps {
   size: number
   theme: {
      bg: { main: string; light: string; dark: string }
      fg: { main: string; light: string; dark: string }
   }
}

/*
 ** **
 ** ** ** Styled Components
 ** **
 */
//Float Button
const FloatButtonStyled = styled.button<FloatButtonStyledProps>`
   --size: ${({ size }) => size}px;
   width: var(--size);
   height: var(--size);
   border-radius: 100%;
   background: transparent;
   color: ${({ theme }) => theme.fg.main};
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 8px;
   cursor: pointer;
   transition: all 0.2s ease;

   &:hover {
      background: ${({ theme }) => theme.bg.light};
   }
`

/*
 ** ** == ==================================================
 ** ** ** Interface [FloatButtonProps]
 ** ** == ==================================================
 */

interface FloatButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
   icon?: feather.FeatherIconNames
   size?: 'SM' | 'MD' | 'LG'
   onClick?: () => void
}

/*
 ** ** == ==================================================
 ** ** ** Component [FloatButton]
 ** ** == ==================================================
 */
function FloatButton({
   icon = 'alert-circle',
   size = 'MD',
   onClick,
   ...delegated
}: FloatButtonProps) {
   /*
    ** **
    ** ** ** State & Hooks
    ** **
    */
   const { theme } = useTheme()
   const sizes = {
      SM: 32,
      MD: 48,
      LG: 64,
   }

   /*
    ** **
    ** ** ** Create feather icon on mount
    ** **
    */
   useEffect(() => {
      feather.replace()
   }, [])

   return (
      <FloatButtonStyled
         theme={{ bg: theme.palette.secondary, fg: theme.palette.primary }}
         size={sizes[size]}
         onClick={onClick}
         {...delegated}
      >
         <i data-feather={icon}></i>
      </FloatButtonStyled>
   )
}

export default FloatButton
