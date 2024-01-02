import './App.css'
import Header from './Components/Header'

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
      </div>
   )
}

export default App
