import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListEmployee from "./components/ListEmployee"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';
import ListDepartment from './components/ListDepartment';
import DepartmentComponent from './components/DepartmentComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-employee" element={<EmployeeComponent />} />
          <Route path="/update-employee/:id" element={<EmployeeComponent />} />
          <Route path="/departments" element={<ListDepartment />} />
          <Route path="/add-department" element={<DepartmentComponent />} />
          <Route path="/update-department/:id" element={<DepartmentComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
