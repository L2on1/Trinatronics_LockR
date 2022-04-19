import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Header() {
    return (
    <div className="lmj-banner">
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1  className="lmj-banner">La maison jungle</h1>
    </div>)
  }
  
  function Description() {
    return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)
  }
  
  function Banner() {
    return (<div>
        <Header />
        <Description />
    </div>)
  }

  export default Banner;