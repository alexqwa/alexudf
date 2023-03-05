import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { ProjectDetails } from "./pages/ProjectDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
