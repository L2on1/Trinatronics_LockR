function Header() {
  return (<div>
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

console.log(Banner)

ReactDOM.render(<Banner />, document.getElementById("root"))