import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductsGrid from './components/ProductsGrid'
import Services from './components/Services'
import Insta from './components/Insta'
import Footer from './components/Footer'  
import Hero from './components/Hero'
import Category from './components/Category'
import Types from './components/Types'
function App() {

  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Types />
      <Services />
      <ProductsGrid />
      <Banner />
      <Insta />
      <Footer />
    </>
  )
}

export default App
