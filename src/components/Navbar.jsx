import React from 'react'
import Logo from '../assets/Shopee_logo.png'

const Navbar = () => {
  return (
    <div>
       {/*Upper Navbar */} 
      <div>
        <div>
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" height={100} width={100} className='w-10 uppercase'/>
              Shopee
            </a>
          </div>
        </div>
      </div>

      {/*Lower Navbar */} 
      <div>
        <div className='group'>
          <input type="text" 
          placeholder='search'
          className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full
          border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
          />
        </div>
      </div>

    </div>
  )
}

export default Navbar
