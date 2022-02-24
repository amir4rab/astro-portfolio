import { useState } from 'preact/hooks';
import './navbar.scss';

function Navbar() {
  const [ overlayIsOpen, setOverlayIsOpen ] = useState(false);

  return (
    <>
      <nav class='main-navbar'>
        <p class='title'>Amir4rab</p>
        <div class='links'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/projects'>Projects</a>
          <a href='/blog'>Blog</a>
          <a href='/contact'>Contact</a>
        </div>
        <button onClick={ () => setOverlayIsOpen(true) } class='hamburger-button'>
          <img src="/assets/IonMenu.svg" alt="" />
        </button>
      </nav>
      <div class={['main-overlay', overlayIsOpen ? 'open' : 'close'].join(' ')}>
        <div class='links'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/projects'>Projects</a>
          <a href='/blog'>Blog</a>
          <a href='/contact'>Contact</a>
          <button onClick={ () => setOverlayIsOpen(false) }>Close</button>
        </div>
      </div>
    </>
  )
}

export default Navbar

// <style lang='scss'>
//   @import '../../styles/baseStyles';
//   .navbar {
//     position: sticky;
//     left: 0;
//     top: 0;
//     width: 100%;
//     padding: .4rem 2rem;
//     display: flex;
//     justify-content: space-between;
//   }
// </style>
