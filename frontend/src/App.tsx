import './App.css'
import Homepage from './pages/Homepage'
import Loginpage from './pages/auth/Loginpage'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { store } from "./store/store";
import Signuppage from './pages/auth/Signuppage';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import PatientDashboard from './pages/patient/PatientDashboard';


function App() {


  return (
    <>
      <Provider store = {store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />

        <Route path="/doc/dashboard" element={<DoctorDashboard />} />
        <Route path="/pat/dashboard" element={<PatientDashboard />} />
        </Routes>
      </BrowserRouter> 
      </Provider>   
    </>
  )
}

export default App
