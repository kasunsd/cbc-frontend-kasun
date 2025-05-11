import './App.css'
import Header from './components/header.jsx'
import ProductCard from './components/productCard.jsx'

function App() {

  return (
    <>
      <Header/>
      <ProductCard name="Dell Laptop" description="hfjdshfkn jfkdhfjdsk" price="800" picture="https://picsum.photos/id/2/367/267"/>
      <ProductCard name="Apple Laptop" description="itriutu uiturhgffjh" price="700" picture="https://picsum.photos/id/3/367/267"/>
    </>
  )
}

export default App
