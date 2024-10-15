import './App.css'
import Hero from './components/hero/Hero'
import Header from "./components/header/Header"
import Main from './components/main/Main'
import SinglePost from './components/single-post/single-post'

function App() {
 

  return (
    <div className="container">
      <Header />
      <Hero />
      <Main />
      <SinglePost  />
    </div>
    
  )
}

export default App
