import { Provider } from "urql"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"

import { client } from "./lib/urql"

function App() {
  return (
    <Provider value={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
