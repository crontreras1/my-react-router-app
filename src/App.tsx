import { Link, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Product from "./Components/Product"

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={ <Home/> }></Route>

        <Route path="/about" element={ <About/> }></Route>

        <Route path="/product/:id" element={ <Product/> }></Route>
      </Routes>
    </div>
  )
}

function About () {
  return (
    <h2>About</h2>
  )
}

export default App
