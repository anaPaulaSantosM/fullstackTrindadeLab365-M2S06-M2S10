import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
/* import Main from './components/main/main'
import Header from './components/header/header'
import Footer from './components/footer/footer' */
import { HomePage } from './page/HomePage'
import { ProdutosPage } from './page/ProdutosPage'
import { ContatoPage } from './page/ContatoPage'
import { FAQPage } from './page/FAQPage'
import { ErrorPage } from './page/ErrorPage'



function App() {

  return (
      <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='produtos' element={<ProdutosPage/>}/>
            <Route path='contato' element={<ContatoPage/>}/>
            <Route path='FAQ' element={<FAQPage/>}/>
            <Route path='erro' element={<ErrorPage/>}/>
        </Routes>
     </Router>
  )
}

export default App
