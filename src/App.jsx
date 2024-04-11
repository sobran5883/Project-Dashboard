import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Projects from './pages/Projects'
import NewProjects from './pages/NewProject'
import Chat from './components/Chat'
function App() {

  return (
    <BrowserRouter>
      <Chat/>
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
