import Addproduct from '../../Components/AddProduct/Addproduct'
import Listproduct from '../../Components/ListProduct/Listproduct'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Admin.css'
import { Routes, Route } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="admin">
        <Sidebar/>

        <Routes>
           <Route path='/addProduct' element={<Addproduct/>}/>
           <Route path='/listProduct' element={<Listproduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin