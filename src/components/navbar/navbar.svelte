<script>
  import './navbar.scss';

  let overlayState = false;

  const toggleState = () => {
    overlayState = !overlayState;
  }
</script>

{#if false}<slot/>{/if}
<div>
  <nav class='main-navbar'>
    <p class='title'>Amir4rab</p>
    <div class='links'>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/projects'>Projects</a>
      <a href='/blog'>Blog</a>
      <a href='/contact'>Contact</a>
    </div>
    <button on:click={ toggleState } class='hamburger-button'>
      <img src="/assets/IonMenu.svg" alt="" />
    </button>
  </nav>
  <div class={['main-overlay', overlayState ? 'open' : 'close'].join(' ')}>
    <div class='links'>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/projects'>Projects</a>
      <a href='/blog'>Blog</a>
      <a href='/contact'>Contact</a>
      <button on:click={ () => toggleState(false) }>Close</button>
    </div>
  </div>
</div>