import NavBar from "./Components/Navbar/NavBar"

import "./layout.scss"
import HomePage from "./Pages/Homepage/Homepage"


function App() {
  return (
    <div className="layout">
      <div className="NavBar">
      <NavBar/>
      </div>
      <div className="Homepage">
        <HomePage/>
      </div>
    </div>
  )
}

export default App