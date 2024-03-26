import './Sidebar.css'
import {Link} from 'react-router-dom'
import addproduct_icon from '../../assets/Product_Cart.svg'
import productList_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
         <Link to={'/addProduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={addproduct_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listProduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={productList_icon} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar