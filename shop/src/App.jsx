import Header from './Header.jsx'
import ProductCard from './ProductCard.jsx'

function App() {
  return (
    <div>
      <Header />
      <div className="list">
        <ProductCard title="Ноутбук Lenovo IdeaPad" price={289000} inStock={true} />
        <ProductCard title="Смартфон Samsung A15" price={119900} inStock={true} />
        <ProductCard title="Наушники Sony WH-CH520" price={32500} inStock={false} />
      </div>
    </div>
  )
}

export default App
