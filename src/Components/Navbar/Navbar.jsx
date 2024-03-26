import './Navbar.css'
import navlogo from '../../assets/fashionhub4.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={navlogo} alt="" className='nav-logo'/>
        <p>FashionHub</p>
        <img src={navProfile} alt="" className='nav-profie'/>
    </div>
  )
}

export default Navbar