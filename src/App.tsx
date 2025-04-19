import { Outlet } from "react-router-dom"
import Header from "./computent/Header"
import Footer from "./computent/Footer"


function App() {

  return (
    <div
      className="w-full "
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
