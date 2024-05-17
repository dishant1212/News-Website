
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navabr from "./components/navbar"
import HealthAndFitness from "./components/pages/healthAndFitness"
import LifeStyle from "./components/pages/lifeStyle"
import Traveling from "./components/pages/traveling"
import Finance from "./components/pages/finance"
import AboutUs from "./components/pages/aboutUs"
import ContactUs from "./components/pages/contactUs"
import Home from "./components/pages/home"
import Authors from "./components/pages/authors"
import SignUp from "./components/Account/signUp"
import SignIn from "./components/Account/signIn"
import ArticalsDetails from "./components/pages/articalDetails"
import WebStoriesSlider from "./components/slider/webStoriesSlider"


function App() {
  

  return (
    <>
     <BrowserRouter>
         <Routes>
            <Route path="/"  element={<Navabr/>}>
              <Route index element={<Home/>}  />
              <Route path="/health-fitness" element={<HealthAndFitness/>}/>
              <Route path="/life-style" element={<LifeStyle/>} />
              <Route path="/traveling" element={<Traveling/>}/>
              <Route path="/finance" element={<Finance/>} />
              <Route path="/aboutUs" element={<AboutUs/>}/>
              <Route path="/contactUs" element={<ContactUs/>} />
              <Route path="/authors" element={<Authors/>}/>
              <Route  path="/signUp" element={<SignUp/>}/>
              <Route  path="/signIn" element={<SignIn/>}/>
              <Route path="/artical/:id" element={<ArticalsDetails/>}/>
            </Route>
            <Route path="/:id" element={<WebStoriesSlider/>}/>
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
