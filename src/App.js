import { Navbar } from "./Layout/Navbar";
import { Footer } from "./Layout/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/Abouts";
import ProjectPage from "./pages/Projects";
import SkillPage from "./pages/Skills";
import ContactPage from "./pages/Contact";
import ProjectDetailPage from "./pages/ProjectDetail";
import { Routes, Route } from 'react-router-dom';
import './assets/css/global.css';
import './assets/css/custom.css';
import './assets/css/layout.css'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
          <Routes>
              <Route index element={<HomePage /> } />
              <Route path='/' element={<HomePage /> } />
              <Route path='/abouts' element={<AboutPage /> } />
              <Route path='/projects' element={<ProjectPage /> } />
              <Route path='/skills' element={<SkillPage /> } />
              <Route path='/contact' element={<ContactPage /> } />
              <Route path='/project-detail' element={<ProjectDetailPage /> } />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
