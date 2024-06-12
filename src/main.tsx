import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Suspense } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Suspense>
        <App />
    </Suspense>

)
