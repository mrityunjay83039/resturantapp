import React from 'react'

export const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        {/* Desktop and Tablet */}
        <div className='hidden md:flex'>Desktop</div>

        {/* For Moile device */}
        <div className='flex md:hidden'>Mobile</div>
    </header>
  )
}

export default Header;