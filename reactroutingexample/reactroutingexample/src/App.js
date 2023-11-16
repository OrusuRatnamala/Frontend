import Navbar from './component/Navbar';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Services from './component/Services';
import Home from './component/Home';
import About from './component/About';
import Team from './component/Team';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
  </>
  );
}

export default App;
