import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Projects from './pages/Projects'
import NewProjects from './pages/NewProject'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Projects/>}/>
          <Route path='new-project' element={<NewProjects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
