import { useState } from 'react'
import Styles from './App.module.css'
import AppDefault from './routes/AppDefault.tsx'


function App() {

  const [isAuth, setIsAuth] = useState(true)

 


  return (
    <div className={Styles.app}>
      {isAuth ?
        <AppDefault />
        :
        <div></div>
      }

    </div>
  )
}

export default App
