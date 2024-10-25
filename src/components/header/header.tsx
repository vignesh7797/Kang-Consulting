import './header.css'
import rectLogo from '../../assets/logo-rect.svg'
import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import NavList from '../NavList/NavList';
import { NavLink } from 'react-router-dom';


const Header:React.FC = ()=>{

  const [menu, setMenu] = useState(false)

  const handleMenuClick = () =>{
    setMenu(!menu);
  }

  const handleNavClick = () =>{
    setMenu(false)
  }

  return (
    <div className="w-screen fixed flex top-0 bg-secondary h-16 md:h-20 justify-between items-center z-50">
      <img className="h-full" src={rectLogo} alt="" />

      <div className="hidden lg:block">
        <NavList onNavClick={handleNavClick}></NavList>
      </div>

      <button className="hidden lg:block text-white border-[2px] border-white px-4 h-12 mr-8">
        <NavLink to="/contact">Get in Touch</NavLink>
      </button>

      <button className="menu-bar" onClick={handleMenuClick}>
        <span className={'bar-1 ' + (menu ? 'open' : '')}></span>
        <span className={'bar-2 ' + (menu ? 'open' : '')}></span>
        <span className={'bar-3 ' + (menu ? 'open' : '')}></span>
      </button>

      <Sidebar visible={menu} onHide={() => setMenu(false)}  position="left" content={({  }) => (
        <NavList onNavClick={handleMenuClick}></NavList>
      )}>
      </Sidebar>
    </div>

  )
}
export default Header