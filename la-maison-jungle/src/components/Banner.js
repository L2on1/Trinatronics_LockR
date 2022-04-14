import '../styles/Banner.css'

function Header() {
    return (<div className="lmj-banner">
        <h1>La maison jungle</h1>
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