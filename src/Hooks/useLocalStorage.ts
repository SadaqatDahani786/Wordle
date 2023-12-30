import { useEffect, useState } from 'react'

/*
 ** ** == ==================================================
 ** ** ** Hook [useLocalStorage]
 ** ** == ==================================================
 */
const useLocalStorage = () => {
   /*
    ** **
    ** ** ** State
    ** **
    */
   const [storedItems, setStoredItems] = useState<Record<string, string>>({})

   /*
    ** **
    ** ** ** useEffect hook to sync local storage on initial render
    ** **
    */
   useEffect(() => {
      syncLocalStorage()
   }, [])

   /*
    ** **
    ** ** ** Sync local storage values to this state
    ** **
    */
   const syncLocalStorage = () => {
      const values = { ...window.localStorage } as Record<string, string>
      setStoredItems(values)
   }

   /*
    ** **
    ** ** ** Add item in the local storage
    ** **
    */
   const addItem = (key: string, value: string) => {
      window.localStorage.setItem(key, value)
      syncLocalStorage()
   }

   /*
    ** **
    ** ** ** Remove item from the local storage
    ** **
    */
   const removeItem = (key: string) => {
      window.localStorage.removeItem(key)
      syncLocalStorage()
   }

   return { storedItems, addItem, removeItem }
}

export default useLocalStorage
