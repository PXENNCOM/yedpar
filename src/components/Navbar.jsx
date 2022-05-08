import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='logo'>
        <p className='LogoP'>YED-PAR OTO</p>
        </div>
        <div className='menu'>
            <ul>
                <li><a href="#">Ana Sayfa</a></li>
                <li><a href="#">Ürünler</a></li>
                <li><a href="#">Duyurular</a></li>
                <li><a href="#">Hakkımızda</a></li>
                <button className='İletişim'><i class="fa-solid fa-phone"></i>İletişim</button>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar


// Ana Sayfa
// Hakkımızda 
// İletişim
// Duyurular
// Ürünlerimiz