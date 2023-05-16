import { BrowserRouter } from "react-router-dom"
// Routes
import AppOutlet from "./routes/AppOutlet"
//CSS
import './styles/index.css'

function App() {

  return (
    <BrowserRouter>
      <AppOutlet />
    </BrowserRouter>
  )
}

export default App
