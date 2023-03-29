import React from 'react'

import './styles.css'

import Logo from '../../objects/Logo'
import Hamburger from '../../objects/Hamburger'
import Sobre from '../../objects/Sobre'

const Header = () => {
  return (
    <header>

      <div className='header-left'>
        <Logo />
      </div>

      <div className='header-right'>
        <Sobre />
        <Hamburger />
      </div>

    </header>
  )
}

export default Header