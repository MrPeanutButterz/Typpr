import './App.css';
import {Route, Routes} from "react-router-dom"

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

import SpeedTest from "./pages/speedtest/SpeedTest"
import Profile from "./pages/profile/Profile"
import About from "./pages/about/About"
import Page404 from "./pages/404/Page404";

export default function App() {
  return <>
    <Navigation/>
    <main>
      <Routes>
        <Route exact path="/Typpr" element={<SpeedTest/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
      </Routes>
    </main>
    <Footer/>
  </>
}
