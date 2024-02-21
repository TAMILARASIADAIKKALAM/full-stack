import {Navigate, Route,Routes} from "react-router-dom"
import { lazy } from "react"
import LazyLayout from "./components/LazyLayout"
import UserLayout from "./pages/user/UserLayout"
// import Navbar from "./components/ui/Navbar"
const LazyLogin=lazy(()=>import("./pages/auth/login"))
const LazyReg=lazy(()=>import("./pages/auth/register"))
const LazyHome=lazy(()=>import("./components/Home/Home"))
//const LazyAbout=lazy(()=>import("./pages/user/About"))

// const Userroutes=()=>{
//   return(
//     <UserLayout>
//     <Routes>
//     <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
//     {/* <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/> */}
//     </Routes>
//     </UserLayout>
//   )
// }
function App() {
  return (
    <div>
    {/* <Navbar/> */}
    <Routes>
      <Route exact path="/" element={<Navigate to="/new-app/login"/>}/>
      <Route path="/new-app/login" element={<LazyLayout component={LazyLogin}/>}/>
      {/* <Route path="/new-app/signup" element={<LazyLayout component={LazyReg}/>}/>
      <Route path="/new-app/user/*" element={<Userroutes/>}/> */}
    </Routes>

    </div>
  )
}

export default App