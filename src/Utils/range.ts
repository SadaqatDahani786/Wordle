/*
 ** Function [range] => Get an array with the range given.
 **
 ** @params
 ** from       => start of a range.
 ** to         => end of a range.
 ** step       => increment of a range.
 **
 ** Returns array
 */
const range = (from: number, to: number = from, step: number = 1) => {
   //1) Create length array
   const len = Math.ceil((to - from) / step)

   //2) Return new array created with the length
   return [...new Array(len)].map((_, i) => from + step * i)
}

export default range
