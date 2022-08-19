import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import MedicineList from './pages/MedicineList'
import SignUp from './pages/SignUp'
import SignUpSuccess from './pages/SignUpSuccess'
import Analysis from './pages/Analysis'
import Information from './pages/Information'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/medicine-list" element={<MedicineList />} />
          <Route path="/signup/success" element={<SignUpSuccess />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
