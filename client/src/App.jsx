import {Routes, Route} from 'react-router-dom'
import Landing from './Views/Landing/LandingView'
import NotesView from './Views/Notes/NotesView'
import Login from './Views/Login/LoginView'
import Register from './Views/Register/RegisterView'

function App() {
  return (
    <div>
        <Routes>
            <Route path="/v47-tier3-team-37" element={<Landing />} />
            <Route path="/v47-tier3-team-37/login" element={<Login />} />
            <Route path="/v47-tier3-team-37/register" element={<Register />} />  
            <Route path="/v47-tier3-team-37/notes" element={<NotesView />} />
        </Routes>
    </div>
  )
}

export default App;