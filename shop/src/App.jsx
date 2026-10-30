import Header from './Header.jsx'
import ProductList from './ProductList.jsx'

const products = [
  { id: 1, title: 'Ноутбук Lenovo IdeaPad', price: 289000, inStock: true },
  { id: 2, title: 'Смартфон Samsung A15', price: 119900, inStock: true },
  { id: 3, title: 'Наушники Sony WH-CH520', price: 32500, inStock: false },
  { id: 4, title: 'Мышь Logitech M185', price: 6900, inStock: true },
  { id: 5, title: 'Монитор Xiaomi 24"', price: 74500, inStock: false },
]

function App() {
  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  )
}

export default App
