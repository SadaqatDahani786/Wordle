import { useEffect, useState } from 'react'
import styled from 'styled-components'

//Utils
import range from '../Utils/range'

/*
 ** **
 ** ** ** Styled Components
 ** **
 */
//Letters Grid
const LettersGridStyled = styled.div`
   display: grid;
   grid-template: repeat(6, 1fr) / repeat(5, 1fr);
   gap: 3px;
`

//Letter Cell
const LetterCell = styled.div<{ status: string }>`
   width: 4rem;
   height: 4.4rem;
   border: 1px solid black;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
   font-weight: bolder;

   background-color: ${({ status }) =>
      status === 'correct'
         ? 'green'
         : status === 'partial'
         ? 'yellow'
         : status === 'done'
         ? 'hsl(0, 0%, 90%)'
         : 'transparent'};
`

/*
 ** ** == ==================================================
 ** ** ** Type [attempt]
 ** ** == ==================================================
 */
export type attempt = { letter: string; exist: boolean; order: boolean }[]

/*
 ** ** == ==================================================
 ** ** ** Component [LettersGrid]
 ** ** == ==================================================
 */
function LettersGrid({ ...delegated }) {
   /*
    ** **
    ** ** ** State & Hooks
    ** **
    */
   const [attempts, setAttempts] = useState<attempt[]>([[]])
   const [currAttempt, setCurrAttempt] = useState(0)
   const wordOfTheDay = 'HELLO'

   /*
    ** **
    ** ** ** Effects
    ** **
    */
   //Make a range of grids with empty attempts at the start of the game
   useEffect(() => {
      //1) Create range for a grid with attemps
      const grid = range(0, 6).map(() =>
         range(0, 5).map(() => ({ letter: '', order: false, exist: false })),
      )

      //2) Set grid
      setAttempts(grid)
   }, [])

   //Attach keydown event listener to windows a
   useEffect(() => {
      //1) Attach event listener when component mount
      window.addEventListener('keydown', handleKeyPress)

      //2) Deattach event listenr on component unmount
      return () => window.removeEventListener('keydown', handleKeyPress)
   }, [attempts])

   /*
    ** **
    ** ** ** Methods
    ** **
    */
   //Boolean method which check if the given attemp equal to the length given
   const isEqualLength = (attempt: attempt, length = 5) => {
      return (
         attempt.reduce(
            (acc, curr) => (curr.letter !== '' ? acc + 1 : acc),
            0,
         ) === length
      )
   }

   //Handle and save the user input
   const handleInput = (value: string) => {
      //1) Don't allow more than five letters limit
      if (isEqualLength(attempts[currAttempt])) return

      //2) Make a copy to hold updated attempts
      let updatedAttempts = [...attempts]

      //3) Find the index where to put and save the current input
      const ind = updatedAttempts[currAttempt].findIndex(
         (item) => item.letter === '',
      )

      //4) Save the input
      if (ind != -1) {
         updatedAttempts[currAttempt][ind].letter = value.toUpperCase()
      }

      //5) Update the attempts
      setAttempts(updatedAttempts)
   }

   //Handle the key press event
   const handleKeyPress = ({ key }: KeyboardEvent) => {
      console.log('I PRESESED')
      //1) Get char code of the pressed key
      const charCode = key.charCodeAt(0)

      //2) If any letters are pressed, save that input in state, ignore all other keystrokes
      if (key.length === 1) {
         if (
            (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)
         ) {
            handleInput(key)
         }
      }

      //3) If the 'backspace' key was pressed, removed the last input
      if (key === 'Backspace') {
         const updatedAttemps = [...attempts]

         let ind =
            updatedAttemps[currAttempt].findIndex((l) => l.letter === '') - 1
         if (ind <= -1) ind = 4

         updatedAttemps[currAttempt][ind].letter = ''
         updatedAttemps[currAttempt][ind].exist = false
         updatedAttemps[currAttempt][ind].order = false
         setAttempts(updatedAttemps)
      }

      //4) If the 'enter' key was pressed and the letter is complete, save current attempt and proceed for the next attempt
      if (
         key === 'Enter' &&
         attempts[currAttempt].reduce(
            (acc, curr) => (curr.letter !== '' ? acc + 1 : acc),
            0,
         ) === 5
      ) {
         //=> Make a copy
         const updatedAttempts = [...attempts]

         //=> Store the updated result after revealing letters
         updatedAttempts[currAttempt] = revealResults(
            updatedAttempts[currAttempt],
            wordOfTheDay,
         )

         //=> Update the state
         setAttempts(updatedAttempts)
         setCurrAttempt((attempt) => attempt + 1)
      }
   }

   //Reveal the results for the new attempt user has made
   const revealResults = (attempt: attempt, wordOfTheDay: string) => {
      //1) New updated values
      let word = wordOfTheDay
      let updatedAttempt = [...attempt]

      //2_ Find letters which exist and also are in correct order - GREEN LETTERS
      updatedAttempt = updatedAttempt.map(({ letter, exist, order }, i) => {
         if (
            letter.toUpperCase() === wordOfTheDay[i] &&
            word.includes(letter)
         ) {
            word = word.replace(letter.toUpperCase(), '')
            return { letter, exist: true, order: true }
         }
         return { letter, exist, order }
      })

      //3_ Find the remaining letters that also exist, but are not in correct order - YELLOW LETTERS
      updatedAttempt = updatedAttempt.map(({ letter, exist, order }) => {
         console.log(word)
         if (letter !== '' && word.includes(letter.toUpperCase()) && !exist) {
            word = word.replace(letter.toUpperCase(), '')
            return { letter, exist: true, order }
         }
         return { letter, exist, order }
      })

      //4) Return updated attempts
      return updatedAttempt
   }

   return (
      <LettersGridStyled {...delegated}>
         {attempts.map((_, i) =>
            attempts[i].map((_, j) => (
               <LetterCell
                  className={`cell-${i}-${j}`}
                  key={i + j}
                  status={
                     attempts[i][j].order && attempts[i][j].exist
                        ? 'correct'
                        : attempts[i][j].exist
                        ? 'partial'
                        : i < currAttempt || attempts[i][j].letter !== ''
                        ? 'done'
                        : 'default'
                  }
               >
                  {attempts[i][j].letter}
               </LetterCell>
            )),
         )}
      </LettersGridStyled>
   )
}

export default LettersGrid
