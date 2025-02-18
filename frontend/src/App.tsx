import './App.css'
import Homepage from './pages/Homepage.tsx'
import Loginpage from './pages/auth/Loginpage'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { store } from "./store/store";
import Signuppage from './pages/auth/Signuppage';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import PatientDashboard from './pages/patient/PatientDashboard';
import AddPatient from './pages/doctor/AddPatient.tsx';
import PatientProfile from './pages/patient/PatientProfile.tsx';
import AddPatient2 from './pages/doctor/AddPatient2.tsx';


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
        <Route path="/doc/add-patient" element={<AddPatient2 />} />

        <Route path="/pat/dashboard" element={<PatientDashboard />} />
        <Route path="/pat/profile" element={<PatientProfile />} />
        </Routes>
      </BrowserRouter> 
      </Provider>   
    </>
  )
}

export default App
