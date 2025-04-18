import { Outlet } from "react-router-dom"
import Header from "./computent/Header"


function App() {

  return (
    <div
      className="w-full"
    >
      <Header />
      <Outlet />
    </div>
  )
}

export default App
