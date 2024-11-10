import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Product from "./Components/Product"
import Dashboard from "./Components/Dashboard"
import Overview from "./Components/Overview"
import Settings from "./Components/Settings"

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

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={ <Home/> }></Route>

        <Route path="/about" element={ <About/> }></Route>

        {/* Ruta personalizada /:id */}
        <Route path="/product/:id" element={ <Product/> }></Route>

        {/* Ruta anidada /* */}
        <Route path="/dashboard/*" element={ <Dashboard/> }>
          <Route path="overview" element={ <Overview/> }></Route>

          {/* Lazy Loading */}
          <Route path="settings" element={ 
            <Suspense fallback={ <p>Loading...</p>}>
              <Settings/> 
            </Suspense>
          }>          
          </Route>
        </Route>
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
