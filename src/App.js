import './App.css';
import {Route, Routes} from "react-router-dom"

//components
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

//pages
import Test from "./pages/test/Test"
import Profile from "./pages/profile/Profile"
import About from "./pages/about/About"
import Page404 from "./pages/404/Page404";

export default function App() {
  return <main>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<Test/>}></Route>
      <Route path="profile" element={<Profile/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="*" element={<Page404/>}></Route>
    </Routes>
    <Footer></Footer>
  </main>
}
