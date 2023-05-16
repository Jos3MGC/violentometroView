import {
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'

// Inicio
import Home from '../views/Home'

const AppOutlet = () => {
  return (
    <div>
            <Routes>
                <Route index element={<Home />} />
                <Route
                    path='*'
                    element={<Navigate to='/home' replace />}
                />
            </Routes>
        </div>
  )
}

export default AppOutlet