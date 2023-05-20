import {
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'

// Inicio
import Home from '../views/Home'
// Denuncias
import ComplaintView from '../views/ComplaintView'

const AppOutlet = () => {
  return (
    <div>
            <Routes>
                <Route path='inicio' index element={<Home />} />
                <Route path='denuncia-ciudadana' element={<ComplaintView/>} />
                <Route
                    path='*'
                    element={<Navigate to='/inicio' replace />}
                />
            </Routes>
        </div>
  )
}

export default AppOutlet