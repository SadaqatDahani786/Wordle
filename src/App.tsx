import './App.css'
import Header from './Components/Header'
import LettersGrid from './Components/LettersGrid'

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
         <Header />
         <main>
            <LettersGrid />
         </main>
      </div>
   )
}

export default App
