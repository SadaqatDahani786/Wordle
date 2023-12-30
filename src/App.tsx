import './App.css'

/*
 ** ** == ==================================================
 ** ** ** Interface [AppProps]
 ** ** == ==================================================
 */
interface AppProps extends React.HTMLAttributes<HTMLDivElement> {
   children?: React.ReactNode
}

/*
 ** ** == ==================================================
 ** ** ** Component [App]
 ** ** == ==================================================
 */
function App({ children, ...delegated }: AppProps) {
   return (
      <div className="App" {...delegated}>
         <h1>Wordle</h1>
      </div>
   )
}

export default App
