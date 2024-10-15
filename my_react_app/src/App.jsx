
import Sample2_class from './component/Sample2'
import Sample1_class from './component/sample1'
import Layout from './component/Layout'
import Home from './component/Home'
import Contact from './component/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='contact' element={<Contact/>}/>


    </Route>
  </Routes>
  </BrowserRouter>
  </>
 )
}

export default App
